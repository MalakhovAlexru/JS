/*•	Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/


"use strict"

var myDigit = {};
function digitSort(a){

var b;

if(a<999 && a>0){
b = a.toString();

var i = b.length;

if (i == 3){
	myDigit.one = b.charAt(2);
	i--;
}
if (i == 2){
	myDigit.ten = b.charAt(1);
	i--;
}
if (i == 1){
	myDigit.hundred = b.charAt(0);
	i--;
}
}
else {
	console.log("Вы ввыели не правильное число, введите другое.");

}
return myDigit;
}

console.log(digitSort(190));
console.log("Едениц:" + myDigit.one + "\nДесятков:" + myDigit.ten + "\nСотен:" + myDigit.hundred);
