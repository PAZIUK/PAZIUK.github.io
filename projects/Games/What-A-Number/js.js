let number;
let tryIt = 0;
let wins = 0;
let howMuchTryIt;


let sound = true;


let antarctica = new Audio();
let veryCold = new Audio();
let cold = new Audio();
let hot = new Audio();
let veryHot = new Audio();
let winSound = new Audio();

 	antarctica.src = 'mp3/antarctica.mp3';
 	veryCold.src = 'mp3/veryCold.mp3';
 	cold.src = 'mp3/cold.mp3';
 	hot.src = 'mp3/hot.mp3';
 	veryHot.src = 'mp3/veryHot.mp3';
 	winSound.src = 'mp3/winSound.mp3'

let levelNum = 0;
let lastLevelNum;
let levelNumbers = document.querySelector("#levelNumbers");
let level = {
	first: function(){
		levelNum = 1;
		levelNumbers.innerHTML = '<span class="levelNumbers">1&nbsp;</span>'+
								" Level - Numbers from "+'&nbsp;<span class="levelNumbers">0</span>&nbsp;'+
								" to "+'&nbsp;<span class="levelNumbers">10</span>';
	},
	second: function(){
		levelNum = 2;
		levelNumbers.innerHTML = '<span class="levelNumbers">2&nbsp;</span>'+
								" Level - Numbers from "+'&nbsp;<span class="levelNumbers">0</span>&nbsp;'+
								" to "+'&nbsp;<span class="levelNumbers">100</span>';
	},
	third: function(){
		levelNum = 3;
		levelNumbers.innerHTML = '<span class="levelNumbers">3&nbsp;</span>'+
								" Level - Numbers from "+'&nbsp;<span class="levelNumbers">0</span>&nbsp;'+
								" to "+'&nbsp;<span class="levelNumbers">1000</span>';
	},
	fourth: function(){
		levelNum = 4;
		levelNumbers.innerHTML = '<span class="levelNumbers">4&nbsp;</span>'+
								" Level - Numbers from "+'&nbsp;<span class="levelNumbers">0</span>&nbsp;'+
								" to "+'&nbsp;<span class="levelNumbers">10000</span>';
	},
	fifth: function(){
		levelNum = 5;
		levelNumbers.innerHTML = '<span class="levelNumbers">5&nbsp;</span>'+
								" Level - Numbers from "+'&nbsp;<span class="levelNumbers">0</span>&nbsp;'+
								" to "+'&nbsp;<span class="levelNumbers">100000</span>';
	}
}

function random(){
	if(levelNum == 1){
		number = Math.floor(Math.random() * 10);
	} else if(levelNum == 2){
		number = Math.floor(Math.random() * 100);
	} else if(levelNum == 3){
		number = Math.floor(Math.random() * 1000);
	} else if(levelNum == 4){
		number = Math.floor(Math.random() * 10000);
	} else if(levelNum == 5){
		number = Math.floor(Math.random() * 100000);
	}
	console.log(number);
}
function back(){
	lastLevelNum = levelNum;
	setTimeout(()=>document.querySelector(".start").classList.toggle('active'),1050);
	setTimeout(()=>document.querySelector(".start").style.display = "flex",1001);
	setTimeout(()=>document.querySelector(".game").classList.toggle('active'),1);
	setTimeout(()=>document.querySelector(".game").style.display = "none",1000);
	setTimeout(()=>document.querySelector("#error").innerHTML = "0",2000);

}
function start(){
	if(levelNum == 0){
		document.querySelector(".start").querySelectorAll("h1")[1].style.color = "red";
		document.querySelector(".start").querySelectorAll("h1")[1].innerHTML = "CHOOSE LEVEL!!";
	} else {
		setTimeout(()=>document.querySelector(".game").classList.toggle('active'),1050);
		setTimeout(()=>document.querySelector(".game").style.display = "flex",1001);
		setTimeout(()=>document.querySelector(".start").classList.toggle('active'),1);
		setTimeout(()=>document.querySelector(".start").style.display = "none",1000);
		setTimeout(()=>document.querySelector(".start").querySelectorAll("h1")[1].style.color = "black",1001);
		setTimeout(()=>document.querySelector(".start").querySelectorAll("h1")[1].innerHTML = "Now you need to choose a level of game!",1001);
		if(levelNum == lastLevelNum){
			document.querySelector("#error").innerHTML = tryIt;
		} else {
			document.querySelector("#num").value = "";
			tryIt = 0;
			random();
		}
		
	}
}
function win(){
	document.querySelector("#tryIt").style.color = "red";
	document.querySelector("#tryIt").innerHTML = "&nbsp;"+tryIt+"&nbsp;";
	document.querySelector(".win").classList.toggle("active");
}
function restart(){
	tryIt = 0;
	document.querySelector("#error").innerHTML = tryIt;
	document.querySelector(".win").classList.toggle("active");
	document.querySelector("#answer").innerHTML = "&#8291;";
	document.querySelector("#num").value = "";
	random();
}
function refresh(){
	tryIt = 0;
	document.querySelector("#error").innerHTML = tryIt;
	document.querySelector("#answer").innerHTML = "&#8291;";
	random();
	document.querySelector("#num").value = "";
}
function soundTurn(){
	if (sound){
		document.querySelector("#sound1").style.display = "none";
		document.querySelector("#sound2").style.display = "flex";
		sound = false;
	} else {
		document.querySelector("#sound2").style.display = "none";
		document.querySelector("#sound1").style.display = "flex";
		sound = true;
	}

}
function cleerAnswer(){
	answer.innerHTML = "&#8291;";
}
function game(){
	let answer = document.querySelector("#answer");
	let num = document.querySelector("#num").value;

	if (isNaN(Number(num))||num.length == 0) {
		answer.innerHTML = "You writed wrong info";
		answer.style.color = "red";
		if(sound){
			error.play();
		}
	} else {
		if(levelNum == 1){
			if(num!=number){
				if(Math.abs(num-number)>7){
					answer.innerHTML = "Cold as if we were in Antarctica";
					answer.style.color = "blue";
					if(sound){
						antarctica.play();
					}
				} else if(Math.abs(num-number)>5&&Math.abs(num-number)<=7){
					answer.innerHTML = "Very cold";
					answer.style.color = "blue";
					if(sound){
						veryCold.play();
					}
				} else if(Math.abs(num-number)>3&&Math.abs(num-number)<=5){
					answer.innerHTML = "Cold";
					answer.style.color = "#5454ff";
					if(sound){
						cold.play();
					}
				} else if(Math.abs(num-number)>1&&Math.abs(num-number)<=3){
					answer.innerHTML = "Hot";
					answer.style.color = "orange";
					if(sound){
						hot.play();
					}
				} else if(Math.abs(num-number)==1){
					answer.innerHTML = "Very HOT";
					answer.style.color = "red";
					if(sound){
						veryHot.play();
					}
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
			} else {
				if(sound){
					winSound.play();
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
				win();
			}
		} else if(levelNum == 2){
			if(num!=number){
				if(Math.abs(num-number)>=60){
					answer.innerHTML = "Cold as if we were in Antarctica";
					answer.style.color = "blue";
					if(sound){
						antarctica.play();
					}
				} else if(Math.abs(num-number)>=40&&Math.abs(num-number)<60){
					answer.innerHTML = "Very cold";
					answer.style.color = "blue";
					if(sound){
						veryCold.play();
					}
				} else if(Math.abs(num-number)>=20&&Math.abs(num-number)<40){
					answer.innerHTML = "Cold";
					answer.style.color = "#5454ff";
					if(sound){
						cold.play();
					}
				} else if(Math.abs(num-number)>=10&&Math.abs(num-number)<20){
					answer.innerHTML = "Hot";
					answer.style.color = "orange";
					if(sound){
						hot.play();
					}
				} else if(Math.abs(num-number)<10){
					answer.innerHTML = "Very HOT";
					answer.style.color = "red";
					if(sound){
						veryHot.play();
					}
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
			} else {
				if(sound){
					winSound.play();
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
				win();
			}
		} else if(levelNum == 3){
			if(num!=number){
				if(Math.abs(num-number)>=400){
					answer.innerHTML = "Cold as if we were in Antarctica";
					answer.style.color = "blue";
					if(sound){
						antarctica.play();
					}
				} else if(Math.abs(num-number)>=200&&Math.abs(num-number)<400){
					answer.innerHTML = "Very cold";
					answer.style.color = "blue";
					if(sound){
						veryCold.play();
					}
				} else if(Math.abs(num-number)>=100&&Math.abs(num-number)<200){
					answer.innerHTML = "Cold";
					answer.style.color = "#5454ff";
					if(sound){
						cold.play();
					}
				} else if(Math.abs(num-number)>=20&&Math.abs(num-number)<100){
					answer.innerHTML = "Hot";
					answer.style.color = "orange";
					if(sound){
						hot.play();
					}
				} else if(Math.abs(num-number)<20){
					answer.innerHTML = "Very HOT";
					answer.style.color = "red";
					if(sound){
						veryHot.play();
					}
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
			} else {
				if(sound){
					winSound.play();
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
				win();
			}
		} else if(levelNum == 4){
			if(num!=number){
				if(Math.abs(num-number)>=3000){
					answer.innerHTML = "Cold as if we were in Antarctica";
					answer.style.color = "blue";
					if(sound){
						antarctica.play();
					}
				} else if(Math.abs(num-number)>=1000&&Math.abs(num-number)<3000){
					answer.innerHTML = "Very cold";
					answer.style.color = "blue";
					if(sound){
						veryCold.play();
					}
				} else if(Math.abs(num-number)>=250&&Math.abs(num-number)<1000){
					answer.innerHTML = "Cold";
					answer.style.color = "#5454ff";
					if(sound){
						cold.play();
					}
				} else if(Math.abs(num-number)>=50&&Math.abs(num-number)<250){
					answer.innerHTML = "Hot";
					answer.style.color = "orange";
					if(sound){
						hot.play();
					}
				} else if(Math.abs(num-number)<50){
					answer.innerHTML = "Very HOT";
					answer.style.color = "red";
					if(sound){
						veryHot.play();
					}
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
			} else {
				if(sound){
					winSound.play();
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
				win();
			}
		} else if(levelNum == 5){
			if(num!=number){
				if(Math.abs(num-number)>=30000){
					answer.innerHTML = "Cold as if we were in Antarctica";
					answer.style.color = "blue";
					if(sound){
						antarctica.play();
					}
				} else if(Math.abs(num-number)>=10000&&Math.abs(num-number)<30000){
					answer.innerHTML = "Very cold";
					answer.style.color = "blue";
					if(sound){
						veryCold.play();
					}
				} else if(Math.abs(num-number)>=1000&&Math.abs(num-number)<10000){
					answer.innerHTML = "Cold";
					answer.style.color = "#5454ff";
					if(sound){
						cold.play();
					}
				} else if(Math.abs(num-number)>=100&&Math.abs(num-number)<500){
					answer.innerHTML = "Hot";
					answer.style.color = "orange";
					if(sound){
						hot.play();
					}
				} else if(Math.abs(num-number)<100){
					answer.innerHTML = "Very HOT";
					answer.style.color = "red";
					if(sound){
						veryHot.play();
					}
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
			} else {
				if(sound){
					winSound.play();
				}
				tryIt++;
				document.querySelector("#error").innerHTML = tryIt;
				win();
			}
		}
	}
}