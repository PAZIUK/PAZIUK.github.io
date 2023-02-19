let gHours,gMinutes,gSeconds;
function setTime(){
	let hours = document.querySelector("#hoursInput").value,
		minutes = document.querySelector("#minutesInput").value,
		seconds = document.querySelector("#secondsInput").value;

	let out = document.querySelector(".timer_block"),
		outHours = out.querySelector(".hours"),
		outMinutes = out.querySelector(".minutes"),
		outSeconds = out.querySelector(".seconds");

	if (hours == 0) hours = "00";
	if (minutes == 0) minutes = "00";

	if (String(hours).length < 2) hours = "0" + hours;
	if (String(minutes).length < 2) minutes = "0" + minutes;
	if (String(seconds).length < 2) seconds = "0" + seconds;

	outHours.textContent = hours;
	outMinutes.textContent = minutes;
	outSeconds.textContent = seconds;

	return {
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	}
}

function timer(){
	let hours = setTime().hours,
		minutes = setTime().minutes,
		seconds = setTime().seconds;

	let out = document.querySelector(".timer_block"),
		outHours = out.querySelector(".hours"),
		outMinutes = out.querySelector(".minutes"),
		outSeconds = out.querySelector(".seconds");

	let timer = setInterval(()=>{
		document.querySelector("button.pause").addEventListener("click",()=>{
			let start = window.getComputedStyle(document.querySelector("button.start")).getPropertyValue("display"),
				pause = window.getComputedStyle(document.querySelector("button.pause")).getPropertyValue("display");

			if (start == "flex") {
				document.querySelector("button.start").style.display = "none";
				document.querySelector("button.pause").style.display = "flex";
				document.querySelector(".reset").style.cursor = "pointer";
			}
			if (pause == "flex") {
				document.querySelector("button.pause").style.display = "none";
				document.querySelector("button.start").style.display = "flex";
				document.querySelector(".reset").style.cursor = "not-allowed";
			}
			let out = document.querySelector(".timer_block"),
				outHours = out.querySelector(".hours").textContent,
				outMinutes = out.querySelector(".minutes").textContent,
				outSeconds = out.querySelector(".seconds").textContent;

			document.querySelector("#hoursInput").value = +outHours;
			document.querySelector("#minutesInput").value = +outMinutes
			document.querySelector("#secondsInput").value = +outSeconds
			let hours = document.querySelector("#hoursInput").value,
		minutes = document.querySelector("#minutesInput").value,
		seconds = document.querySelector("#secondsInput").value;

	let out = document.querySelector(".timer_block"),
		outHours = out.querySelector(".hours"),
		outMinutes = out.querySelector(".minutes"),
		outSeconds = out.querySelector(".seconds");

	if (hours == 0) hours = "00";
	if (minutes == 0) minutes = "00";

	if (String(hours).length < 2) hours = "0" + hours;
	if (String(minutes).length < 2) minutes = "0" + minutes;
	if (String(seconds).length < 2) seconds = "0" + seconds;

	outHours.textContent = hours;
	outMinutes.textContent = minutes;
	outSeconds.textContent = seconds;

	return {
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	}
			clearInterval(timer);
		})
		document.querySelector("button.reset").addEventListener("click",()=>{
			let start = window.getComputedStyle(document.querySelector("button.start")).getPropertyValue("display"),
		pause = window.getComputedStyle(document.querySelector("button.pause")).getPropertyValue("display");

	if (start == "flex") {
		document.querySelector("button.start").style.display = "none";
		document.querySelector("button.pause").style.display = "flex";
		document.querySelector(".reset").style.cursor = "pointer";
	}
	if (pause == "flex") {
		document.querySelector("button.pause").style.display = "none";
		document.querySelector("button.start").style.display = "flex";
		document.querySelector(".reset").style.cursor = "not-allowed";
	}
			timerReset();
			setTimeout(()=>{clearInterval(timer)},100);
		})

		if (hours.length < 1) hours = "00";
		if (minutes.length < 1) minutes = "00";
		if (seconds.length < 1) seconds = "00";

		+seconds--;
		if (+seconds < 0) {
			+minutes--;
			seconds = 59;
			if (+minutes < 0) {
				+hours--;
				minutes = 59;
				if (+hours < 0) {
					changeButton();
					hours = "00";
					minutes = "00";
					seconds = "00";
					outHours.textContent = hours;
					outMinutes.textContent = minutes;
					outSeconds.textContent = seconds;
					setTimeout(()=>{clearInterval(timer)},100);
				}
			}
		}

		if (hours == 0) hours = "00";
		if (minutes == 0) minutes = "00";

		if (String(hours).length < 2) hours = "0" + hours;
		if (String(minutes).length < 2) minutes = "0" + minutes;
		if (String(seconds).length < 2) seconds = "0" + seconds;

		outHours.textContent = hours;
		outMinutes.textContent = minutes;
		outSeconds.textContent = seconds;
		// console.log(`Days ${days}, hours ${hours}, minutes ${minutes}, seconds ${seconds}`);
	},1000)
}
function timerStart(){
	timer();
}
function timerPause(){
	let out = document.querySelector(".timer_block"),
		outHours = out.querySelector(".hours").textContent,
		outMinutes = out.querySelector(".minutes").textContent,
		outSeconds = out.querySelector(".seconds").textContent;

	document.querySelector("#hoursInput").value = +outHours;
	document.querySelector("#minutesInput").value = +outMinutes
	document.querySelector("#secondsInput").value = +outSeconds
	setTime();

}
function timerReset(){

	document.querySelector("#hoursInput").value = +gHours;
	document.querySelector("#minutesInput").value = +gMinutes;
	document.querySelector("#secondsInput").value = +gSeconds;

	setTime();
}
function changeButton(){
	let start = window.getComputedStyle(document.querySelector("button.start")).getPropertyValue("display"),
		pause = window.getComputedStyle(document.querySelector("button.pause")).getPropertyValue("display");

	if (start == "flex") {
		document.querySelector("button.start").style.display = "none";
		document.querySelector("button.pause").style.display = "flex";
		document.querySelector(".reset").style.cursor = "pointer";
	}
	if (pause == "flex") {
		document.querySelector("button.pause").style.display = "none";
		document.querySelector("button.start").style.display = "flex";
		document.querySelector(".reset").style.cursor = "not-allowed";
	}
}





















document.querySelector("button.start").addEventListener("click",()=>{
	if (setTime().hours != 0||setTime().minutes != 0||setTime().seconds != 0) {
		timerStart();
		let start = window.getComputedStyle(document.querySelector("button.start")).getPropertyValue("display"),
		pause = window.getComputedStyle(document.querySelector("button.pause")).getPropertyValue("display");

	if (start == "flex") {
		document.querySelector("button.start").style.display = "none";
		document.querySelector("button.pause").style.display = "flex";
		document.querySelector(".reset").style.cursor = "pointer";
	}
	if (pause == "flex") {
		document.querySelector("button.pause").style.display = "none";
		document.querySelector("button.start").style.display = "flex";
		document.querySelector(".reset").style.cursor = "not-allowed";
	}
	}
})
//addEventListener("click",(e)=>{
// 		console.log(e)
// 		let line = document.querySelectorAll(".timer_line .line");

// 		lines.forEach((item)=>{

// 		})
// 			let lineWidth = window.getComputedStyle(lines[0]).getPropertyValue("width");

// 			let Width = 100;
// 			let int = setInterval(()=>{
// 			Width--;
// 			if (Width < 100) lines[0].style.backgroundColor = "red";
// 			lines[0].style.width = Width+"%";
// 			if (Width <=0) {
// 				clearInterval(int);
// 			}
// 			},100);
// 	})





let editWindow = document.querySelector(".edit_window");
function timerEdit(){
	editWindow.style.display = "flex";
}

document.querySelectorAll(".timer-settings input").forEach((item)=>{
	item.oninput = ()=>{
		gHours = document.querySelector("#hoursInput").value;
		gMinutes = document.querySelector("#minutesInput").value;
		gSeconds = document.querySelector("#secondsInput").value;
		setTime()
	}
})
document.querySelector(".footer input").onclick = ()=>{
	editWindow.style.display = "none";
	setTime();
}
document.querySelector(".header .header_cross").onclick = ()=>{
	editWindow.style.display = "none";
}








document.querySelectorAll(".timer_block div").forEach((item)=>{
	item.addEventListener("mouseenter",()=>{
		document.querySelectorAll(".timer_block div").forEach((div)=>{
			div.style.color = "red";
			div.style.cursor = "pointer";
		})
		document.querySelectorAll(".timer_block span").forEach((span)=>{
			span.style.color = "red";
			span.style.cursor = "pointer";
		})
	})
	item.addEventListener("mouseleave",()=>{
		document.querySelectorAll(".timer_block div").forEach((div)=>{
			div.style.color = "black";
			div.style.cursor = "default";
		})
		document.querySelectorAll(".timer_block span").forEach((span)=>{
			span.style.color = "black";
			span.style.cursor = "default";
		})
	})
	item.addEventListener("click",timerEdit);
})

document.querySelectorAll(".timer_block span").forEach((item)=>{
	item.addEventListener("mouseenter",()=>{
		document.querySelectorAll(".timer_block div").forEach((div)=>{
			div.style.color = "red";
			div.style.cursor = "pointer";
		})
		document.querySelectorAll(".timer_block span").forEach((span)=>{
			span.style.color = "red";
			span.style.cursor = "pointer";
		})
	})
	item.addEventListener("mouseleave",()=>{
		document.querySelectorAll(".timer_block div").forEach((div)=>{
			div.style.color = "black";
			div.style.cursor = "default";
		})
		document.querySelectorAll(".timer_block span").forEach((span)=>{
			span.style.color = "black";
			span.style.cursor = "default";
		})
	})
	item.addEventListener("click",timerEdit);
})

document.querySelector(".edit").onclick = ()=> timerEdit();