"use strict";

let ok = confirm('Вам есть 18 лет?');

if (ok) {
	document.write('текст для взрослых 0_0');
} else {
	document.write('доступ запрещен');
}