"use strict";
let obj = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Субота",
  7: "Воскресенье",
};
for (let index = 0; index < 7; index++) {
  document.write(`${obj[index + 1]}<br>`);
}