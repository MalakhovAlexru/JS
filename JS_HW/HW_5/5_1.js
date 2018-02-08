/*•	Написать функцию преобразования цвета из 10-ного представления в 16-ный. 
Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.*/

"use strict"


function getHash(a,b,c){
	

if(a<256 && a>=0){
	a = a.toString(16);
}
else{
	console.log ("Enter another digit!");
}
if(b<256 && b>=0){
	b = b.toString(16);
}
else{
	console.log ("Enter another digit!");
}
if(c<256 && c>=0){
	c = c.toString(16);
}
else{
	console.log ("Enter another digit!");
}
return a+"\n"+b+"\n"+c+"\n";
}

console.log(getHash(39,87,190));