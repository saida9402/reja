console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1. KIrish code // expressga kirib kevotgan ma'lumotlarga bog'liq bo'gan kodlar yoziladi.
app.use(express.static("public")); //css styling va kerakli imglani joylashtirish joyi
app.use(express.json()); //kirib keladigon json datani object holatiga o'girib beradi. (ya'ni klaynt va web server data json ko'rinishida bo'ladi)
app.use(express.urlencoded({ extended: true })); ///htmldan form request degan traditional request qilish instrumenti bor. formdan biror narsa yzoilsa express server qabul qiladi. yozilmasa serverga kiritmag ignore qiladi.

//2. Session code

//3. Views code
app.set("views", "views"); //views folder ichidan o'qidi. ejs orqali html frontendi backend ichidan yasash
app.set("view engine", "ejs");

//4. Routing code - address shakllantirish
app.get("/", function (req, res) {
  res.end(`<h1 style="background: yellow" >HELLO World by Deena</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1 style="background: pink" >Siz sovg'alar sahifasidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
