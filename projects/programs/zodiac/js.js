"use strict"

let lang = "ENG";

function languages(){
	if (lang == "ENG") {
		document.querySelector(".header h1").textContent = "What your zodiac sign?";
		document.querySelector(".footer input").value = "CHECK";
		document.querySelector(".preout").textContent = `Enter your date of birth, for example 17-09`;
		document.querySelector(".footer input").onclick = ()=>{
			let date = document.querySelector(".body input").value,
				month = date.split("-")[1],
				day = date.split("-")[0],
				zodiac = "???";

			if (!isNaN(+month)) {
				if ((month == 12 && day >= 23)||(month == 1 && day <= 20)) zodiac = "Capricorn"
				if ((month == 1 && day >= 21)||(month == 2 && day <= 19)) zodiac = "Aquarius"
				if ((month == 2 && day >= 20)||(month == 3 && day <= 20)) zodiac = "Pisces"
				if ((month == 3 && day >= 21)||(month == 4 && day <= 20)) zodiac = "Aries"
				if ((month == 4 && day >= 21)||(month == 5 && day <= 22)) zodiac = "Taurus"
				if ((month == 5 && day >= 23)||(month == 6 && day <= 21)) zodiac = "Gemini"
				if ((month == 6 && day >= 22)||(month == 7 && day <= 22)) zodiac = "Cancer"
				if ((month == 7 && day >= 23)||(month == 8 && day <= 22)) zodiac = "Leo"
				if ((month == 8 && day >= 23)||(month == 9 && day <= 22)) zodiac = "Virgo"
				if ((month == 9 && day >= 23)||(month == 10 && day <= 22)) zodiac = "Libra"
				if ((month == 10 && day >= 23)||(month == 11 && day <= 21)) zodiac = "Scorpio"
				if ((month == 11 && day >= 22)||(month == 12 && day <= 22)) zodiac = "Sagittarius"
				if (month > 12||month<1||day>31||day<1) zodiac = "ALIEN"
				if (+(month)==NaN||+(day)==NaN||String(day).length==0||String(month).length) zodiac = "ALIEN"
			}

			document.querySelector(".out").textContent = `You are a ${zodiac}`
		}
	} else if (lang == "UA"){
		document.querySelector(".header h1").textContent = "Який у тебе знак зодіаку?";
		document.querySelector(".footer input").value = "ПЕРЕВІРИТИ";
		document.querySelector(".preout").textContent = `Bведіть дату вашого народження, наприклад 17-09`;
		document.querySelector(".footer input").onclick = ()=>{
			let date = document.querySelector(".body input").value,
				month = date.split("-")[1],
				day = date.split("-")[0],
				zodiac;

			if (!isNaN(+month)) {
				if ((month == 12 && day >= 23)||(month == 1 && day <= 20)) zodiac = "Козеріг"
				if ((month == 1 && day >= 21)||(month == 2 && day <= 19)) zodiac = "Водолій"
				if ((month == 2 && day >= 20)||(month == 3 && day <= 20)) zodiac = "Риби"
				if ((month == 3 && day >= 21)||(month == 4 && day <= 20)) zodiac = "Овен"
				if ((month == 4 && day >= 21)||(month == 5 && day <= 22)) zodiac = "Телець"
				if ((month == 5 && day >= 23)||(month == 6 && day <= 21)) zodiac = "Близнюки"
				if ((month == 6 && day >= 22)||(month == 7 && day <= 22)) zodiac = "Рак"
				if ((month == 7 && day >= 23)||(month == 8 && day <= 22)) zodiac = "Лев"
				if ((month == 8 && day >= 23)||(month == 9 && day <= 22)) zodiac = "Діва"
				if ((month == 9 && day >= 23)||(month == 10 && day <= 22)) zodiac = "Терези"
				if ((month == 10 && day >= 23)||(month == 11 && day <= 21)) zodiac = "Скорпіон"
				if ((month == 11 && day >= 22)||(month == 12 && day <= 22)) zodiac = "Стрілець"
				if (month > 12||month<1||day>31||day<1) zodiac = "ПРИБУЛЕЦЬ"
				if (+(month)==NaN||+(day)==NaN||String(day).length==0||String(month).length) zodiac = "ПРИБУЛЕЦЬ"
			}

			document.querySelector(".out").textContent = `Ти ${zodiac}`
		}
	} else if (lang == "RU"){
		document.querySelector(".header h1").textContent = "Какой у тебя знак зодиака?";
		document.querySelector(".footer input").value = "ПРОВЕРИТЬ";
		document.querySelector(".preout").textContent = `Bведите дату вашего рождения, например 17-09`;
		document.querySelector(".footer input").onclick = ()=>{
			let date = document.querySelector(".body input").value,
				month = date.split("-")[1],
				day = date.split("-")[0],
				zodiac;

			if (!isNaN(+month)) {
				if ((month == 12 && day >= 23)||(month == 1 && day <= 20)) zodiac = "Козерог"
				if ((month == 1 && day >= 21)||(month == 2 && day <= 19)) zodiac = "Водолей"
				if ((month == 2 && day >= 20)||(month == 3 && day <= 20)) zodiac = "Рыбы"
				if ((month == 3 && day >= 21)||(month == 4 && day <= 20)) zodiac = "Овен"
				if ((month == 4 && day >= 21)||(month == 5 && day <= 22)) zodiac = "Телец"
				if ((month == 5 && day >= 23)||(month == 6 && day <= 21)) zodiac = "Близнецы"
				if ((month == 6 && day >= 22)||(month == 7 && day <= 22)) zodiac = "Рак"
				if ((month == 7 && day >= 23)||(month == 8 && day <= 22)) zodiac = "Лев"
				if ((month == 8 && day >= 23)||(month == 9 && day <= 22)) zodiac = "Дева"
				if ((month == 9 && day >= 23)||(month == 10 && day <= 22)) zodiac = "Весы"
				if ((month == 10 && day >= 23)||(month == 11 && day <= 21)) zodiac = "Скорпион"
				if ((month == 11 && day >= 22)||(month == 12 && day <= 22)) zodiac = "Стрелецы"
				if (month > 12||month<1||day>31||day<1) zodiac = "ПРИШЕЛЕЦ"
				if (+(month)==NaN||+(day)==NaN||String(day).length==0||String(month).length) zodiac = "ПРИШЕЛЕЦ"
			}	

			document.querySelector(".out").textContent = `Ты ${zodiac}`
		}
	}
}	
languages();



document.querySelector("select.lang").onchange=()=>{
	if(document.querySelector("select.lang").selectedIndex==0) lang = "ENG"
	if(document.querySelector("select.lang").selectedIndex==1) lang = "UA"
	if(document.querySelector("select.lang").selectedIndex==2) lang = "RU"
	document.querySelector(".out").textContent = "";

	languages();
}