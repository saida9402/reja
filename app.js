console.log("web serverni boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//MongoDB connect
const db = require("./server").db(); //serverdan client chaqirib, client ichidagi documentaionga ko'ra shunday yozilsa mongodb objectini (db orqali) qo'lga olib beradi. shu orqali databasega crud(create,read,update,delete) amalarini bajarish imkonini beradi.

// 1. KIrish code // expressga kirib kevotgan ma'lumotlarga bog'liq bo'gan kodlar yoziladi.
app.use(express.static("public")); //papkasi ichidagi fayllar (CSS, rasmlar, JS fayllar) front-endda to‘g‘ridan-to‘g‘ri ko‘rsatiladi.
app.use(express.json()); //kirib keladigon json datani object holatiga o'girib beradi. (ya'ni klaynt va web server data json ko'rinishida bo'ladi)
app.use(express.urlencoded({ extended: true })); ///htmldan form request degan traditional request qilish instrumenti bor. formdan biror narsa yzoilsa express server qabul qiladi. yozilmasa serverga kiritmag ignore qiladi.

//2. Session code

//3. Views code
app.set("views", "views"); //views folder ichidan o'qidi. ejs orqali html frontendi backend ichidan yasash-> views — EJS fayllar joylashgan katalog nomi (views/harid.ejs).
app.set("view engine", "ejs"); //BSSR backendda htmlni qurib browserga yuborish  ejs — bu templating engine bo‘lib, HTML ichida JS kod yozish imkonini beradi.

//req.body — foydalanuvchidan kelgan ma’lumot.
//res.json() — mijozga JSON formatda javob qaytaradi.
//➡ Bosh sahifaga (/) kirilsa, views/harid.ejs fayli render qilinadi.

//4. Routing code - address shakllantirish
app.post("/create-item", (req, res) => {
  console.log("user entered / create-item");
  ///ma'lum bir ma'lumotni o'zi bilan olib keladi va data basega shuni yozadi
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  ///data basedan malumot olib o'qish uchun <get> ishlatiladi
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data }); //datani ejs ichiga pass qilish uchun
      }
    });
});

module.exports = app;

// const db = require("./server");

// if (err) {
//   console.log(err);
//   res.end("something went wrong");
// } else {
//   res.end("successefully added");
// }
