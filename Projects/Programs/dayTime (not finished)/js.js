let addItem;
let body = document.body;
let block = document.querySelector(".block");
let addTimeBtn = document.querySelector("#addTimeBtn");
let deleteTime;
let addTimeBlock = document.querySelector("#addTimeBlock");
let schedule = document.querySelector("#schedule");
let start = document.querySelector("#start");
let end = document.querySelector("#end");
let startHour;
let startHourDone;
let startMinute;
let startMinuteDone;
let endHour;
let endHourDone;
let endMinute;
let endMinuteDone;
let desc;

function onTimeBlock(){
	setTimeout(()=> addTimeBlock.style.display = "flex",100)
	setTimeout(()=> schedule.style.display = "none",100)
	setTimeout(()=> document.querySelectorAll(".addTimeBtn")[0].style.display = "none",1)
	block.style.backgroundColor = "#f0f0f0";
	block.style.width = "200px";
	block.style.padding = "1rem";
	block.style.margin = "1rem auto";
	block.style.alignItems = "center";
	body.style.justifyContent = "center";
}
function onSchedule(){
		if(document.querySelector("#start").value.length==0||
		document.querySelector("#end").value.length==0||
		document.querySelector("#desc").value.length==0||
		document.querySelector("#start").value == "error"||
		document.querySelector("#end").value == "error"||
		document.querySelector("#desc").value == "error"||
		isNaN(Number(startHourDone))||isNaN(Number(endHourDone))||
		isNaN(Number(startMinuteDone))||isNaN(Number(endMinuteDone))){
			document.querySelector("#start").value = "error";
			document.querySelector("#end").value = "error";
			document.querySelector("#desc").value = "error";
		} else {
			block.style.backgroundColor = "transparent";
			block.style.width = "100%";
			block.style.padding = "unset";
			block.style.margin = "unset";
			block.style.alignItems = "unset";
			body.style.justifyContent = "flex-start";
			setTimeout(()=> addTimeBtn.style.display = "flex",1)
			setTimeout(()=> addTimeBlock.style.display = "none",100)
			setTimeout(()=> schedule.style.display = "flex",100)
		}
	}
onTimeBlock();

function addTime(){
	start = startHourDone+":"+startMinuteDone;
	end = endHourDone+":"+endMinuteDone;
	desc = document.querySelector("#desc").value;
	schedule.innerHTML += `<div class="item">
							<div class="item__time">${start} - ${end}</div>
							<div class="item__desc">${desc}</div>
							</div>`;
	schedule.lastElementChild.classList.toggle("add");
	setTimeout(()=>schedule.lastElementChild.classList.toggle("add"),1500);
	onSchedule();
}
function startChange(){
	startHour = String(document.querySelector("#start").value);
	if(startHour.length == 2){
		start.value += ":";
		startHourDone = String(document.querySelector("#start").value).substr(0, 2);
		console.log(startHourDone)
		//Number(startHour);
	}
	startMinute = String(document.querySelector("#start").value).substr(3,5);
	if(startMinute.length == 2){
		startMinuteDone = Number(startMinute);
	}
}
function endChange(){
	endHour = String(document.querySelector("#end").value).substr(0, 2);
	if(endHour.length == 2){
		end.value += ":";
		endHourDone = Number(endHour);
	}
	endMinute = String(document.querySelector("#end").value).substr(3,5);
	if(endMinute.length == 2){
		endMinuteDone = Number(endMinute);
	}
}
block.addEventListener('click',function(e){
	if(e.target.value == "error"){
		e.target.value = "";
	}
})

function removeItem(){
	deleteTime = true;
	document.querySelectorAll(".item").forEach((item) => item.addEventListener('click',()=>{
		if(deleteTime){
			item.remove();
			deleteTime = false;
			if(document.querySelectorAll(".item").length == 0){
				onTimeBlock();
			}
		}	
	}))
}