/*•	* Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. 
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.*/



"use strict";
var buff;
var b;
var j=0,i=0;
var result=" ";
for (i=0;i<8;i++)
{
	if (i%2==0)
	{
		b = 0;
	}
	else
	{
		b = 1;
	}

	for (j=b;j<8;j++)
	{
			if (j%2 == 0) 
		{
			buff = buff + " ";
		}
		else
		{
			buff = buff + "#";
		}

	}
	result = result + "\n" +buff;
	
	buff = "";
}

console.log(result);