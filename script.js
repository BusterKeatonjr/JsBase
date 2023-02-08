"use strict";
let a = '10';
let b = '20';
alert(Number(a) + Number(b));

alert( Number('2') + Number('3') ); // 5

alert( 2 + Number('3') ); //5

alert( '2' + Number('3') ); //23

let c = '2';
let d = '3';
alert(+c + +d);

let i = '5s' * '2';
alert(i); // Nan

let j = '5s' + '2';
alert(j); // 5s2

let k = (-'5') + (-'2');
alert(k); //-7

let l = '5' * 1 + '2' * 1;
alert(l); // 7

let m = '5' * '1' + '2' * '1';
alert(m); // 7

let n = '' + 3 + 1;
alert(n); // 31



