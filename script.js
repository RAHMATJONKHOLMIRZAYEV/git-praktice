"use strict";

const numberOfseries = +prompt("Nechta Serial kurdingiz", "");

const seriesDB = {
    count: numberOfseries,
    series: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("yaqin 5 kun ichida qaysi serialni kurdingiz?"),
  b = prompt("Nechi baho berasiz?"),
  c = prompt("Oxirgi ko'rgan serialingiz?"),
  d = prompt("Nechi baho berasiz?");
const Answer = prompt("Javobingiz uchun rahmat😊");  
const ok = alert("Tashakur😍");
const comment = {
  comment: Answer,
};
seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);
console.log(comment);


