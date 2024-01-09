"use strict";

const numberOfseries = +prompt("Nechta Serial kurdingiz", "");

const seriesDB = {
  count: numberOfseries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};
// Buyerda Savol berilgan yani ushbu 2-dona savol 2-marta berilishi kerak bulgan va shu kurinishda berilgan va keyinchalik pastroqda optimalashtirilgan
//   const a = prompt("yaqin 5 kun ichida qaysi serialni kurdingiz?"),
//   b = prompt("Nechi baho berasiz?"),
//   c = prompt("Oxirgi ko'rgan serialingiz?"),
//   d = prompt("Nechi baho berasiz?");

for(let i = 0; i < 2; i++){
  const a = prompt("Oxirgi ko'rgan serialingiz?"),
  b = prompt("Nechi baho berasiz?");
  if (a != null && b != null && a != "" && b != ""){
    seriesDB.series[a] = b;
    console.log("done");
  }else{
    console.log("error");
    i--;
  }
}

if (seriesDB.count < 5){
  console.log("Kam serial ko'ripsiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10){
  console.log("Siz Klassik tomoshabin ekansiz");
} else if (seriesDB.count >=10){
  console.log("Siz serialchi zvezda ekansiz");
} else {
  console.log("Error")
};
const Answer = prompt("Javobingiz uchun rahmat😊");  
const ok = alert("Tashakur😍");
const comment = {
  comment: Answer,
};

console.log(seriesDB);
console.log(comment);
