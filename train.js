//MIT B-TASK

function countDigits(str) {
  let count = 0;
  for (let char of str) {
    if (char >= "0" && char <= "9") {
      count++;
    }
  }
  return count;
}

let result = countDigits("ad2a54y79wet0sfgb9");
console.log("Digitlar soni:", result);

let result2 = countDigits("ad2a54y79wet0sfg332b9");
console.log("Digitlar soni:", result2);

// MIT  A-TASK
// function countLetter(letter, word) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countLetter("e", "engineer"));
// console.log(countLetter("a", "saida"));
// console.log(countLetter("e", "deena"));

// console.log("JACK MA maslahatlari");
// const list = [
//   "yahshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yog endi", // 60
// ];

//1chi holat
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     callback(null, list[5]);
//   }
// }

// maslahatBering("hello", (err, data) => {           // if (typeof a !== "number") callback("insert a number", null); bo'lgani uchun   //  number bilan yozish kerak stringda hatolik chiqadi.
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// maslahatBering(32, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

///********* 2chi holat setTimeout(function); bilan yozilganda***********////

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//     callback(null, list[5]);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

///*******async function qurish*************////

//[ main define]
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
//   }
// }

/////// 1-usul call -> .then/ .catch metod bilan callni tuzish

// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })

//   .catch((err) => {
//     console.log("Error:", err);
//   });
// console.log("passed here 1");

/////// 2 -usul call-> async / awaitt bilan callni tuzish
// bunda 1chisidan javob kelsa keyingisi ishga tushib shu holaatda ketma ket ketvuradi. {(20), (31), (40) natijasi chiqadi}

// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();

///*********promise function bilan qurish******setTimeout bilan*****////

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();

///*********promise function bilan qurish******setInterval bilan*****//// agar shu kodni callback bilan setIntervalda yozilganda javob tinmiy kevurardi

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   //   javob = await maslahatBering(70);
//   //   console.log(javob);
//   //   javob = await maslahatBering(41);
//   //   console.log(javob);
// }

// run();
