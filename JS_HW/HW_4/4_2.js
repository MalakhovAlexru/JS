/*CountBs - Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, 
содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs, 
только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). 
Для этого переделайте функцию countBs.*/

var Data = "Here is my Data: BBB BB Bb?" // Count B = 6;

function CountBs(a) {
	var count=0, count2 = 0; 
	
	var Myresult;
	var result_2 = Data.length;
	for(var i =0 ; i <= result_2; i++){
		if(Data.charAt(i)=="B"){
			count++;
		}
count2++;
	}
	return Myresult = "Количество букв 'В' в строке: " + count + "\nСимволов в строке: " + count2;
}

console.log(CountBs(Data));


function CountAny(a,b){
	var count=0, count2 = 0; 
	
	var Myresult;
	var result_2 = Data.length;
	for(var i =0 ; i <= result_2; i++){
		if(Data.charAt(i)==b){
			count++;
		}
count2++;
	}
	return Myresult = "Количество букв '" + b + "' в строке: " + count + "\nСимволов в строке: " + count2;
}



console.log(CountAny(Data, 'H'));










	if(a < b){
		return min2 = a;
	}
	else {
		return min2 = b;
	}
	console.log (min2);
}


//FOR TESTs
var count=0, count2 = 0; 
	var Data = "Here is my Data BBB BB B?";
	var Myresult;
	var result_2 = Data.length;
	var result;
	
	for(var i =0 ; i <= result_2; i++){
		if(Data.charAt(i)=="B"){
			count++;
		}
count2++;
	}
	
	result = "Количество букв 'В' в строке: " + count + "\n символов в строке: " + count2;

console.log(result);