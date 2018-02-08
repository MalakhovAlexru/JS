//Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], 
//а также функцию listToArray, которая создаёт массив из списка


var item = null;
var myArray = [1,2,3];
var myList = null;
var currentValue = 0;

myArray.reverse().map(function(currentValue){
	myList = {value: currentValue, rest: item };
			item = myList;
		return myList;});
console.log(myList);


var myArrayFromList = [];
var temp = myList;

while (temp.rest != null){

	myArrayFromList.push(temp.value);
	temp = temp.rest;
}
if (temp.rest == null){
	myArrayFromList.push(temp.value);
}
console.log(myArrayFromList);
