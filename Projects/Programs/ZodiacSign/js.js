"use strict"

let langauge = "ENG"
let langauges = {
	"ENG":{
		"Question": "What your zodiac sign?",
		"Tip": "Enter your date of birth, for example 17-09",
		"Button Text": "CHECK",
		"Answer beginning": "You are a"
	},
	"UA":{
		"Question": "Який у тебе знак зодіаку?",
		"Tip": "Bведіть дату вашого народження,<br/> наприклад 17-09",
		"Button Text": "ПЕРЕВІРИТИ",
		"Answer beginning": "Ти"
	}
}

let zodiacs = {
	"ENG": [" Capricorn", "n Aquarius", " Pisces", "n Aries", " Taurus", " Gemini", " Cancer", " Leo", " Virgo", " Libra", " Scorpio", " Sagittarius", "n ALIEN"],
	"UA": [" Козеріг"," Водолій"," Риби"," Овен"," Телець"," Близнюки"," Рак"," Лев"," Діва"," Терези"," Скорпіон"," Стрілець"," ПРИБУЛЕЦЬ"]
}

function init(){
	document.querySelector(".header h1").innerHTML = langauges[langauge]["Question"];
	document.querySelector(".footer input").value = langauges[langauge]["Button Text"];
	document.querySelector(".preout").innerHTML = langauges[langauge]["Tip"];
	document.querySelector(".footer input").onclick = ()=>{
		let date = document.querySelector(".body input").value,
			month = +date.split("-")[1],
			day = +date.split("-")[0]
		console.log(month,day)
		document.querySelector(".out").textContent = langauges[langauge]["Answer beginning"]+zodiacs[langauge][checkZodiacSign(month, day)]
	}
}

function checkZodiacSign(month, day){
	let zodiac = 12
	if ((month == 12 && day >= 23)||(month == 1 && day <= 20)) zodiac = 0 
	if ((month == 1 && day >= 21)||(month == 2 && day <= 19)) zodiac = 1
	if ((month == 2 && day >= 20)||(month == 3 && day <= 20)) zodiac = 2
	if ((month == 3 && day >= 21)||(month == 4 && day <= 20)) zodiac = 3
	if ((month == 4 && day >= 21)||(month == 5 && day <= 22)) zodiac = 4
	if ((month == 5 && day >= 23)||(month == 6 && day <= 21)) zodiac = 5
	if ((month == 6 && day >= 22)||(month == 7 && day <= 22)) zodiac = 6
	if ((month == 7 && day >= 23)||(month == 8 && day <= 22)) zodiac = 7
	if ((month == 8 && day >= 23)||(month == 9 && day <= 22)) zodiac = 8
	if ((month == 9 && day >= 23)||(month == 10 && day <= 22)) zodiac = 9
	if ((month == 10 && day >= 23)||(month == 11 && day <= 21)) zodiac = 10
	if ((month == 11 && day >= 22)||(month == 12 && day <= 22)) zodiac = 11
	if (month > 12||month<1||day>31||day<1) zodiac = 12
	if (month==NaN||day==NaN||String(day).length==0||String(month).length==0) zodiac = 12
	return zodiac
}

document.addEventListener("DOMContentLoaded", ()=>{
	init()
	document.querySelector("select.lang").onchange=()=>{
		if(document.querySelector("select.lang").selectedIndex==0) langauge = "ENG"
		if(document.querySelector("select.lang").selectedIndex==1) langauge = "UA"
		if(document.querySelector("select.lang").selectedIndex==2) langauge = "RU"
		document.querySelector(".out").textContent = "";
		init()
	}
	document.querySelector(".body input").addEventListener("keydown", function(e){
		if(!isNaN(+e.key)||e.key=="Backspace"){
			if(this.value.length==2&&e.key!="Backspace"){
				this.value = `${this.value.substr(0, 2)}-${this.value.substr(2)}`
			} else if(this.value.length>2){
				this.value = `${this.value.substr(0, 2)}-${this.value.substr(3)}`
			}
		} else {
			e.preventDefault()
		}
	})
})
