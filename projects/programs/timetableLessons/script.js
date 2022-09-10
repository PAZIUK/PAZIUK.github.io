let lessonsLength = +prompt("How many lessons do you have each day?");
let start = prompt("When does the first lesson begin?");
let howMuch = +prompt("How long do the lessons last?");
let timeout = +prompt("How long are the breaks between lessons?");
let end = document.querySelectorAll(".endLesson");

let table = document.querySelector("table").querySelector("tbody");

for (let i = 0; i < lessonsLength; i++) {
	table.innerHTML += '<tr class="lesson"></tr>';	
}

start = start.toString().replace(/(^:)|(:$)/g, '').split(":");

let lesson = document.querySelectorAll(".lesson");
let hour = Number(start[0]);
let minute = Number(start[1]);

for (let i = 0; i < lesson.length; i++) {
	if(String(hour).length == 1){
		hour = "0"+String(hour);
	}
	if(Number(hour) == 24){
		hour = "00";
	}
	if(String(minute).length == 1){
		minute = "0"+String(minute);
	}
	lesson[i].innerHTML += '<td class="lessonNumber">'+ (i+1) +"</td>";
	lesson[i].innerHTML += '<td class="startLesson">'+ hour +":"+ minute+"</td>";
	let end = Number(minute)+howMuch;
	end = Number(end);
	let endHour = Number(hour);
	if(end == 60){
		end = '00';
		endHour++;
	} else if(end > 60){
		end = end - 60;
		endHour++;
	}
	if(String(endHour).length == 1){
		endHour = "0"+String(endHour);
	}
	if(Number(endHour) == 24){
		endHour = "00";
	}
	if(String(end).length == 1){
		end = "0"+String(end);
	}
	minute = Number(minute);

	lesson[i].innerHTML += '<td class="endLesson">'+ endHour +":"+ end +"</td>";
	lesson[i].innerHTML += '<td class="timeout">'+ timeout + "m." +"</td>";
	
	minute += howMuch+timeout;
	end = timeout+howMuch;	

	if(minute == 60){
		minute = '00';
		hour++;
	} else if(minute > 60){
		minute = minute-60;
		hour++;
	}

}