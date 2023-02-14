"use strict";
let r_circle = Number(prompt("Введите радиус круга: ")),
  Pi = Math.PI;
document.write(` ${Pi * r_circle ** 2}`);
let a_square = Number(prompt("Введите сторону квадарата: "));
document.write(`<br> ${a_square ** 2}`);
let l_rect = Number(prompt("Введите сторону прямоугольника: ")),
  w_rect = Number(prompt("Введите вторую сторону: "));
document.write(`<br> ${w_rect * l_rect}`);
document.write(`<br> ${2 * (l_rect + w_rect)}`);
let tc = Number(prompt("Введите показатель: "));
document.write(`<br> ${tc * (9 / 5) + 32}`);
let fc = Number(prompt("Введите показатель: "));
document.write(`<br> ${(fc - 32) / (9 / 5)}`);
