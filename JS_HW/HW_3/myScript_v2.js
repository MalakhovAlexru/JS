//•	Создать функцию, генерирующую шахматную доску. 
//При этом можно использовать любые html-тэги по своему желанию. 
//Доска должна быть разленована соответствующим образом, т.е. чередовать черные и белые ячейки. 
//Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

/*
This list shows how much time each plugin has taken to respond to each event:

on_activated:
    Default.pane: 0.000s total, mean: 0.000s, max: 0.000s
    Color Highlighter.ColorHighlighter: 0.016s total, mean: 0.005s, max: 0.016s
    SublimeLinter.sublimelinter: 0.000s total, mean: 0.000s, max: 0.000s

on_deactivated:
    Default.history_list: 0.000s total, mean: 0.000s, max: 0.000s

on_hover:
    Default.symbol: 0.097s total, mean: 0.005s, max: 0.038s
    JavaScript Completions._generated_2017_04_09_at_16_06_42: 0.147s total, mean: 0.007s, max: 0.047s

on_load:
    Color Highlighter.ColorHighlighter: 0.063s total
    Default.detect_indentation: 0.147s total
    Default.exec: 0.085s total

on_modified:
    Color Highlighter.ColorHighlighter: 0.000s total
    SublimeLinter.sublimelinter: 0.000s total
    Default.settings: 0.000s total

on_selection_modified:
    Color Highlighter.ColorHighlighter: 0.001s total, mean: 0.000s, max: 0.001s

*/


var one = {A:'15', B:'14', C:'13', D:'12', E:'11', F:'13', G:'14', H:'15'};
var two = {A:'16', B:'16', C:'16', D:'16', E:'16', F:'16', G:'16', H:'16'};
var three = null;
var four = null;
var five = null;
var six = null;
var seven = {A:'26', B:'26', C:'26', D:'26', E:'26', F:'26', G:'26', H:'26'};
var eight = {A:'25', B:'24', C:'23', D:'22', E:'21', F:'23', G:'24', H:'25'};


//делаем шахматную доску.

for (var i = 1; i <= 8 ; i++) {
	var tr = document.createElement('tr');
	var td = document.createElement('td');

	tr.id = 'tr'+i;
	
	chessBoard.appendChild(tr);
if(i == 1 && one != null){
	makeChess(one,i);
	continue;
};
if(i == 2 && two != null){
	makeChess(two,i);
	continue;
};
if(i == 3 && three != null){
	makeChess(three,i);
	continue;
};
if(i == 4 && four != null){
	makeChess(four,i);
	continue;
};
if(i == 5 && five != null){
	makeChess(five,i);
	continue;				
};
if(i == 6 && six != null){
	makeChess(six,i);
	continue;
};
if(i == 7 && seven != null){
	makeChess(seven,i);
	continue;
};
if(i == 8 && eight != null){
	makeChess(eight,i);
	continue;
}
if(one == null || two == null || three == null || four == null || five == null || six == null || seven == null || eight == null){

	 for (var j = 1; j <= 8; j++) {
	  	var td = document.createElement('td');

	  	//td.id = 'td'+j+'_'+i;
	 	if(i%2 == 0){

	 	if(j%2 == 0){
	 		td.className = 'black';
	 	}else td.className = 'white';
	 	 tr.appendChild(td)
	 	};
	 	if (i%2 !=0){
	 		if((j+1)%2 == 0){
	 		td.className = 'black';
	 	}else td.className = 'white';
	 	tr.appendChild(td)
	 	};
	 	};
	 }
	//blackOrWhite(i);
	//tr.appendChild(td);
}



// Доска сделана.
var typeName = null;
var obj = {};
var abc = null;
var value = 0;
var temp = 1; // временное решение, скорее всегор нужно будет добавить объект, в свойства которого занести номера строк
	function makeChess(obj,i){

// for (var j = 1; j <= 8; j++) {
		var j = 0;

		for (var key in obj){
		var tmp1 = '';
		var td = document.createElement('td');
		var b = document.createElement('b');


		tmp1 = obj[key];
		td.className = '';
		td.innerHTML = '';


//черная или белая клетка
	

		 j++;
		 if(j%2 == 0){

		 	if(i%2 == 0){
		 		td.className = 'black';
		 	}else td.className = 'white';
		 	 //tr.appendChild(td)
		 };
		 if (j%2 !=0){

		 	if((i+1)%2 == 0){
		 		td.className = 'black';
		 	}else td.className = 'white';
		 };
		  //if(j%2 == 0){
		 		//td.className = 'black';
		 	//else td.className = 'white';
		 	 //tr.appendChild(td)
		 // };
		 //if (j%2 !=0){

		 // 	if((i+1)%2 == 0){
		 
		
		//Анализируем код записанный в объекте, определяя фигуру 
		
		for (var h = 0; h <= tmp1.length-1; h++){
			
			if (h == 0){
			if (tmp1.charAt(h) == 1){
				b.className += ' chessWhite'; // для проверки цвет у белых - желтый
				continue;
			};
			if (tmp1.charAt(h) == 2){
			 b.className += ' chessBlack'; // у черных - розовый
			 continue;
			};
		};
			if (h == 1){
				if (tmp1.charAt(1) == '1'){
					b.className += ' King';
					b.innerHTML = "K";
					continue;
				};
				if (tmp1.charAt(1) == '2'){
					b.className += ' Queen';
					b.innerHTML = "Q";
					continue;
				};
				if (tmp1.charAt(1) == '3'){
					b.className += ' Elephan';
					b.innerHTML = "E";
					continue;
				};
				if (tmp1.charAt(1) == '4'){
					b.className += ' Horse';
					b.innerHTML = "H";
					continue;
				};
				if (tmp1.charAt(1) == '5'){
					b.className += ' Tower';
					b.innerHTML = "T";
					continue;
				};
				if (tmp1.charAt(1) == '6'){
					b.className += ' Soldier';
					b.innerHTML = "S";
					continue;
				};
			}
		}
	tr.appendChild(td);
	td.appendChild(b);
	}
}





// 		for (var key in obj){
// 		//var chess = document.createElement('b');
// 		var td = document.createElement('td');

// 		for (i = 0; i <= key.length-1; i++){
// 			//typeName = 'td'+ i + '_' + temp;
// 			if (i == 0){
// 			if (key[i] == 1){
// 				td.className = 'chessWhite'; // для проверки цвет у белых - желтый
// 			}else td.className = 'chessBlack'; // у черных - розовый
// 			};
// 			if (i == 1){
// 				if (key[i] == 1){
// 					td.className = 'King';
// 					td.innerHTML = "K";
// 				}
// 				if (key[i] == 2){
// 					td.className = 'Queen';
// 					td.innerHTML = "Q";
// 				}if (key[i] == 3){
// 					td.className = 'Elephan';
// 					td.innerHTML = "E";
// 				}
// 				if (key[i] == 4){
// 					td.className = 'Horse';
// 					td.innerHTML = "H";
// 				}
// 				if (key[i] == 5){
// 					td.className = 'Tower';
// 					td.innerHTML = "T";
// 				}
// 				if (key[i] == 6){
// 					td.className = 'Soldier';
// 					td.innerHTML = "S"
// 				}
// 			}
// 		}
// 		value.insertBefore(td,value.firstChild);
			
// 	}
// }

// // функция отрабатывает, 
// //но при передачи значения не корректно вызывается функция при использовании this, без него - работает.
// //function insertAfter(elem, refElem) {
// //  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
// //}
// //создать функцию по установке в ячейку на доске
// // установить и навешивать свойства на ячейку;


// 		chessBoard.appendChild(tr)
// 	for (var j = 1; j <= 8; j++) {
// 		var td = document.createElement('td');
// 		//td.id = 'td'+j+'_'+i;
// 		if(i%2 == 0){

// 		if(j%2 == 0){
// 			td.className = 'black';
// 		}else td.className = 'white';
// 		 tr.appendChild(td)
// 		};
// 		if (i%2 !=0){
// 			if((j+1)%2 == 0){
// 			td.className = 'black';
// 		}else td.className = 'white';
// 		tr.appendChild(td)
// 		};
// 		};
// 	}


// var one = {A:'15', B:'14', C:'13', D:'12', E:'11', F:'13', G:'14', H:'15'};
// for (var key in one){
// 	var a =one[key];
// 	console.log(a.length);
// 	console.log(a);
// }




// function blackOrWhite(i){

// 	for (var j = 1; j <= 8; j++) {

// 		//td.id = 'td'+j+'_'+i;
// 		if(i%2 == 0){

// 		if(j%2 == 0){
// 			td.className = 'black';
// 		}else td.className = 'white';
// 		tr.appendChild(td)
// 		};
// 		if (i%2 !=0){
// 			if((j+1)%2 == 0){
// 			td.className = 'black';
// 		}else td.className = 'white';
// 		tr.appendChild(td)
// 		};
// 		};
// 	};

//}

		// j++;
		// if(j%2 == 0){

		// 	if(i%2 == 0){
		// 		td.className = 'black';
		// 	}else td.className = 'white';
		// 	 //tr.appendChild(td)
		// };
		// if (j%2 !=0){

		// 	if((i+1)%2 == 0){
		// 		td.className = 'black';
		// 	}else td.className = 'white';
		// };