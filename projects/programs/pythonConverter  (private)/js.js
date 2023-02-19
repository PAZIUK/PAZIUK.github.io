"use strict"

function banner() {
  setTimeout(() => document.querySelector('.text').classList.add('active'), 100);
  setTimeout(() => document.querySelector('button').classList.add('active'), 100);
  setTimeout(() => document.querySelector('#out').classList.add('active'), 100);
};
window.onload = function(){
	let bInput = document.getElementById("input");
	let wordInput = document.querySelector('#word');
	let varInput = document.querySelector('#var'); 

	if(localStorage.getItem("bInput")){
		bInput.value=localStorage.getItem("bInput");
	}
	bInput.oninput=function(){
	  localStorage.setItem("bInput",bInput.value);
	};

	if(localStorage.getItem("wordInput")){
		wordInput.value=localStorage.getItem("wordInput");
	}
	wordInput.oninput=function(){
	  localStorage.setItem("wordInput",wordInput.value);
	};

	if(localStorage.getItem("varInput")){
		varInput.value=localStorage.getItem("varInput");
	}
	varInput.oninput=function(){
	  localStorage.setItem("varInput",varInput.value);
	};
};
document.addEventListener("DOMContentLoaded", banner);

document.querySelector('button').onclick = function() {
	let b = document.getElementById('input').value.toLowerCase();
	let word = document.querySelector('#word').value;				
	let variable = document.querySelector('#var').value.toLowerCase();
	let code = "";

	
	let w = word.split("");
	let wordArr = {};
	if (b.length == 0) {
		document.querySelector('#out').innerHTML = 'ВИ НЕ ВВЕЛИ ВСЕ ЩО ПОТРІБНО!!!';;
	} else {

		b = b.split(",");
		function toObject(arr) {
		  	for (let i = 0; i < w.length; ++i)
		    	wordArr[i] = w[i];
		}
		toObject();


		for (let i = 0; i < b.length; i++) {
		b[i] = b[i].replace(/\n/g, '');
		let a = b[i].split("");

			Object.prototype.getKeyByValue = function( value ) {
			    for( let prop in this ) {
			        if( this.hasOwnProperty( prop ) ) {
			             if( this[ prop ] === value )
			                 return prop;
			        }
			    }
			}


			for (let i = 0; i < w.length; i++) {
				let wordArrId = wordArr.getKeyByValue(a[i]);
				if (typeof(wordArrId) == "undefined"){
				} else if ((i+1) == a.length){
					code += variable+"["+ wordArrId +"],";
				}
				else {
					code += variable+"["+ wordArrId +"]+"; 
				}
			}


			if(word.length == 0 || variable == 0){
				document.querySelector('#out').innerHTML = 'ВИ НЕ ВВЕЛИ ВСІ ДАНІ ДЛЯ РОБОТИ!!!';
			} else {
				let codeNewInput = code.replace(/^,|,$/g,'');
				let codeNew = codeNewInput.replace(/,/g, ',<br>');
				document.querySelector('#out').innerHTML = 
			    variable + ' = ' + '"'+word+'"'+'<br>'+
			   	'<br>'+
			   	'word = ['+codeNew+']'+ '<br>'+
			   	'<br>'+
			   	'i = 0'+'<br>'+
				'while i < len(word):'+'<br>'+
				'&nbsp;&nbsp;&nbsp;&nbsp;'+'printWord = i+1'+'<br>'+
				'&nbsp;&nbsp;&nbsp;&nbsp;'+'print(str(printWord)+") "+word[i].title())'+'<br>'+
				'&nbsp;&nbsp;&nbsp;&nbsp;'+'i+=1;'+'<br>';
			}
		}
	}
}