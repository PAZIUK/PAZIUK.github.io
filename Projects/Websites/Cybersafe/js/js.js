"use strict"
let MARK = 0;

let letsGoBtn = document.querySelector("#letsGo"),
	helloBlock = document.querySelector(".hello-block");

let lesson1Btn = document.querySelector("#lesson1");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btn10 = document.querySelector("#btn10");
let btn11 = document.querySelector("#btn11");
let btn12 = document.querySelector("#btn12");
let btn13 = document.querySelector("#btn13");
let btn14 = document.querySelector("#btn14");
let btn15 = document.querySelector("#btn15");
let btn16 = document.querySelector("#btn16");
let btn17 = document.querySelector("#btn17");
let btn18 = document.querySelector("#btn18");
let btn19 = document.querySelector("#btn19");
let btn20 = document.querySelector("#btn20");
let btn21 = document.querySelector("#btn21");
let fakeDBtn = document.querySelector("#fakeDBtn");
let rightDBtn = document.querySelector("#rightDBtn");

let prevBtn1 = document.querySelector("#prevBtn1");
let prevBtn2 = document.querySelector("#prevBtn2");
let prevBtn3 = document.querySelector("#prevBtn3");
let prevBtn4 = document.querySelector("#prevBtn4");
let prevBtn5 = document.querySelector("#prevBtn5");
let prevBtn6 = document.querySelector("#prevBtn6");
let prevBtn7 = document.querySelector("#prevBtn7");
let prevBtn8 = document.querySelector("#prevBtn8");

let nextBtn1 = document.querySelector("#nextBtn1");
let nextBtn2 = document.querySelector("#nextBtn2");
let nextBtn3 = document.querySelector("#nextBtn3");
let nextBtn4 = document.querySelector("#nextBtn4");
let nextBtn5 = document.querySelector("#nextBtn5");
let nextBtn6 = document.querySelector("#nextBtn6");
let nextBtn7 = document.querySelector("#nextBtn7");
let nextBtn8 = document.querySelector("#nextBtn8");
// let nextBtn9 = document.querySelector("#nextBtn9");

let startGameBtn = document.querySelector("#startGame");

let isTestStart = false;
let clickTestBtn = true;
let checkBtn1 = document.querySelector("#checkBtn1"),
	test1Btns = document.querySelectorAll(".level3 .box.r3 .robot1 .text .test1 button");
let checkBtn2 = document.querySelector("#checkBtn2"),
	test2Btns = document.querySelectorAll(".level4 .box.r3 .robot1 .text .test1 button");
let checkBtn3 = document.querySelector("#checkBtn3"),
	test3Btns = document.querySelectorAll(".level5 .box.r3 .robot1 .text .test1 button");
let checkBtn4 = document.querySelector("#checkBtn4"),
	test4Btns = document.querySelectorAll(".level6 .box.r3 .robot1 .text .test1 button");
let checkBtn5 = document.querySelector("#checkBtn5"),
	test5Btns = document.querySelectorAll(".level7 .box.r3 .robot1 .text .test1 button");

function noActiveBtn(btn){
	btn.style.transform = "translate(0) scale(.7)";
	btn.classList.add("noactive1");
	btn.classList.remove("active");
	setTimeout(()=>{
		btn.style.transform = "translate(0) scale(1)";
		btn.setAttribute("disabled","disabled");
	},401)
}
function addActiveBox(){
	let add = [];
	for (let i = 0; i < arguments.length; i++) {
		add.push(arguments[i])
	}
	for (let i = 0; i < add.length; i++) {
		if (typeof add[i] == "string") {
			document.querySelector(add[i]).classList.add("active");
		} else if(typeof add[i] == "object"){
			add[i].classList.add("active");
		}
	}
}
function removeActiveBox(){
	let remove = [];
	for (let i = 0; i < arguments.length; i++) {
		remove.push(arguments[i])
	}
	for (let i = 0; i < remove.length; i++) {
		if (typeof remove[i] == "string") {
			document.querySelector(remove[i]).classList.remove("active");
		} else if(typeof remove[i] == "object"){
			remove[i].classList.remove("active");
		}
	}
}
function scroll(...args){
	if(document.body.clientWidth>320){
		let allBoxes = [];
		let scrollHigh = 0;
		for (let i = 0; i < arguments.length; i++) {
			allBoxes.push(arguments[i])
		}
		for (let i = 0; i < allBoxes.length; i++) {
			scrollHigh += document.querySelector(allBoxes[i]).offsetHeight;
		}
		scrollHigh+=32;
		let tosc = window.scrollY;
	  	let intsc = setInterval(()=>{
	  		if(scrollHigh>tosc){
				tosc+=50;
				window.scrollTo(0,tosc)
			} else {
				clearInterval(intsc);
			}
		},50)
	}
}
function test(checkBtn,nextBtn,testBtns){
	let testActiveBtn = "";
	for (let i=0; i<testBtns.length;i++){
		if (testBtns[i].classList.contains("active")) {
			for (var ind = 0; ind < testBtns[i].classList.length; ind++) {
				testActiveBtn += ("."+testBtns[i].classList[ind]+" ");
			}
		}
	}
	let nullBtn = testBtns[0].parentElement.querySelector("button"+testActiveBtn);
	if (testActiveBtn.length!=0) {
		if (isTestStart) {
			removeActiveBox(checkBtn);
			checkBtn.style.display = "none";
			addActiveBox(nextBtn);
			nullBtn.classList.add("right");
			setTimeout(()=>{
				removeActiveBox(nullBtn);
			},1000);
			for (let i=0; i<testBtns.length;i++){
				if (!testBtns[i].classList.contains("right")) {
					testBtns[i].classList.add("noRight");
				}
			}
			isTestStart = false;
			mark("give",5);
			noActiveBtn(checkBtn);
			return true;
		} else {
			nullBtn.classList.add("noRight");
			setTimeout(()=>{
				removeActiveBox(nullBtn)
				nullBtn.classList.remove("noRight");
			},500);
			mark("take",1);
			if (mark<0) mark = 0;
		}
	} 
}
function testBtnsAction(btns){
	btns.forEach((item)=>{
		item.onclick = ()=>{
			if (clickTestBtn) {
				for (let i = 0; i < btns.length; i++) {
					btns[i].classList.remove("active");
				}
				addActiveBox(item);

				item.getAttribute("isRight")=="YES" ? isTestStart = true : isTestStart = false;
			}
		}
	})
}
function mark(doing,number) {
	if (doing=="give") MARK += number;
	if (doing=="take") {
		MARK -= number
		if (MARK < 0) MARK = 0;
	}
	document.querySelector("#mark .markNum").textContent = MARK;
}
function load(){
	let i = 0;
	let int = setInterval(()=>{
		document.querySelector(".level9 .load .line").style.width = i+"%";
		i++;
		if (i==101) {
			addActiveBox("#startGameAD")
			clearInterval(int)
		}
	},50)
}

function level1() {
	window.scrollTo(0,0);
	addActiveBox(".level1",".level1 .robot1")
	setTimeout(()=>{
		addActiveBox(".level1 .robot1 .text",btn1)
	},200)
	helloBlock.style.display = 'none';
	window.scrollTo(0,0);
}



document.addEventListener("DOMContentLoaded",()=>{
	setTimeout(()=>{
		addActiveBox(
			helloBlock.querySelector("header"),
			helloBlock.querySelector(".box.hello"),
			helloBlock.querySelector(".box.hello .btns button"),
			helloBlock.querySelector(".hellononv")
		);
		addActiveBox(helloBlock.querySelector("footer"));
	},100)
})

letsGoBtn.addEventListener("click",function(){
	noActiveBtn(this);
	removeActiveBox(
			helloBlock.querySelector("header"),
			helloBlock.querySelector(".box.hello"),
			helloBlock.querySelector(".hellononv"),
			helloBlock.querySelector("footer")
	);
	setTimeout(()=>{
		level1();
		addActiveBox(prevBtn1);
	},500)
})

btn1.addEventListener("click",function(){
	noActiveBtn(this);
	addActiveBox(".level1 .box.start",".level1 h2",lesson1Btn)
})

lesson1Btn.addEventListener("click",function(){
	noActiveBtn(this);
	removeActiveBox(".level1")
	addActiveBox(".level2",".level2 .robot1")
	setTimeout(()=>{
		removeActiveBox(prevBtn1);
		addActiveBox(".level2 .robot1 .text",btn2,prevBtn2)
	},200)
	window.scrollTo(0,0);
})

btn2.addEventListener("click",function(){
	noActiveBtn(this);
	addActiveBox(".level2 .box.r2",".level2 .box.r2 .robot2",".level2 .box.r2 .robot2 .text")
	setTimeout(()=>{
		addActiveBox(btn3)
	},1000)
	scroll(".level2 .box.r1");
})

btn3.addEventListener("click",function(){
	noActiveBtn(this);
	addActiveBox(".level2 .box.r3",".level2 .box.r3 .robot1",".level2 .box.r3 .robot1 .text")
	setTimeout(()=>{
		addActiveBox(btn4)
	},1000)
	scroll(".level2 .box.r1",".level2 .box.r2");
})

btn4.addEventListener("click",function(){
	noActiveBtn(this);
	removeActiveBox(".level2")
	addActiveBox(".level3",".level3 .robot1")
	setTimeout(()=>{
		removeActiveBox(prevBtn2);
		addActiveBox(".level3 .robot1 .text",btn5,prevBtn3)
	},200)
	window.scrollTo(0,0);
})

btn5.addEventListener("click",function(){
	noActiveBtn(this);
	addActiveBox(".level3 .box.r2",".level3 .box.r2 .robot1",".level3 .box.r2 .robot1 .text")
	setTimeout(()=>{
		addActiveBox(btn6)
	},1000)
	scroll(".level3 .box.r1");
})

btn6.addEventListener("click",function(){
	noActiveBtn(this);
	testBtnsAction(test1Btns);
	addActiveBox(".level3 .box.r3",".level3 .box.r3 .robot1",".level3 .box.r3 .robot1 .text")
	setTimeout(()=>{
		addActiveBox(checkBtn1)
		removeActiveBox(btn7)
	},1000)
	scroll(".level3 .box.r1",".level3 .box.r2");
})

checkBtn1.addEventListener("click",function(){
	if (test(this,btn7,test1Btns)) {
		clickTestBtn = false;
	}
})

btn7.addEventListener("click",function(){
	addActiveBox("#mark");
	noActiveBtn(this);
	removeActiveBox(".level3");
	addActiveBox(".level4",".level4 .robot1")
	setTimeout(()=>{
		removeActiveBox(prevBtn3);
		addActiveBox(".level4 .robot1 .text",btn8,prevBtn4)
	},200)
	window.scrollTo(0,0);
})

btn8.addEventListener("click",function(){
	noActiveBtn(this);
	addActiveBox(".level4 .box.r2",".level4 .box.r2 .robot1",".level4 .box.r2 .robot1 .text");
	setTimeout(()=>{
		addActiveBox(btn9)
	},1000)
	scroll(".level4 .box.r1");
})

btn9.addEventListener("click",function(){
	testBtnsAction(test2Btns);
	noActiveBtn(this);
	addActiveBox(".level4 .box.r3",".level4 .box.r3 .robot1",".level4 .box.r3 .robot1 .text")
	setTimeout(()=>{
		addActiveBox(checkBtn2);
		removeActiveBox(btn10);
	},1000)
	scroll(".level4 .box.r1",".level4 .box.r2");
	clickTestBtn = true;
})

checkBtn2.addEventListener("click",function(){
	if (test(this,btn10,test2Btns)) {
		clickTestBtn = false;
	}
})

btn10.addEventListener("click",function(){
	noActiveBtn(this);
	removeActiveBox(".level4")
	addActiveBox(".level5",".level5 .robot1")
	setTimeout(()=>{
		removeActiveBox(prevBtn4);
		addActiveBox(".level5 .robot1 .text",btn11,prevBtn5)
	},200)
	window.scrollTo(0,0);
})

btn11.addEventListener("click",function(){
	noActiveBtn(this);
	document.querySelector(".level5 .box.r2").classList.add("active");
	document.querySelector(".level5 .box.r2 .robot1").classList.add("active");
	document.querySelector(".level5 .box.r2 .robot1 .text").classList.add("active");
	setTimeout(()=>{
		btn12.classList.add("active")
	},1000)
	scroll(".level5 .box.r1");
})

btn12.addEventListener("click",function(){
	testBtnsAction(test3Btns);
	noActiveBtn(this);
	addActiveBox(".level5 .box.r3",".level5 .box.r3 .robot1",".level5 .box.r3 .robot1 .text");
	setTimeout(()=>{
		addActiveBox(checkBtn3);
		removeActiveBox(btn13);
	},1000)
	scroll(".level5 .box.r1",".level5 .box.r2");
	clickTestBtn = true;
})

checkBtn3.addEventListener("click",function(){
	if (test(this,btn13,test3Btns)) {
		clickTestBtn = false;
	}
})

btn13.addEventListener("click",function(){
	noActiveBtn(this);	
	removeActiveBox(".level5");
	addActiveBox(".level6",".level6 .robot1");
	setTimeout(()=>{
		removeActiveBox(prevBtn5);
		addActiveBox(".level6 .robot1 .text",btn14,prevBtn6)
	},200)
	window.scrollTo(0,0);
})

btn14.addEventListener("click",function(){
	noActiveBtn(this);
	addActiveBox(".level6 .box.r2",".level6 .box.r2 .robot1",".level6 .box.r2 .robot1 .text");
	setTimeout(()=>{
		addActiveBox(btn15);
	},1000)
	scroll(".level6 .box.r1");
})

btn15.addEventListener("click",function(){
	noActiveBtn(this);
	testBtnsAction(test4Btns);
	addActiveBox(".level6 .box.r3",".level6 .box.r3 .robot1",".level6 .box.r3 .robot1 .text")
	setTimeout(()=>{
		addActiveBox(checkBtn4);
		removeActiveBox(btn16);
	},1000)
	scroll(".level6 .box.r1",".level6 .box.r2");
	clickTestBtn = true;
})

checkBtn4.addEventListener("click",function(){
	if (test(this,btn16,test4Btns)) {
		clickTestBtn = false;
	}
})

btn16.addEventListener("click",function(){
	noActiveBtn(this);
	removeActiveBox(".level6");
	addActiveBox(".level7",".level7 .robot1");
	setTimeout(()=>{
		removeActiveBox(prevBtn6);
		addActiveBox(".level7 .robot1 .text",btn17,prevBtn7)
	},200)
	window.scrollTo(0,0);
})

btn17.addEventListener("click",function(){
	noActiveBtn(this);
	addActiveBox(".level7 .box.r2",".level7 .box.r2 .robot1",".level7 .box.r2 .robot1 .text");
	setTimeout(()=>{
		addActiveBox(btn18);
	},1000)
	scroll(".level7 .box.r1");
})

btn18.addEventListener("click",function(){
	noActiveBtn(this);
	testBtnsAction(test5Btns);
	addActiveBox(".level7 .box.r3",".level7 .box.r3 .robot1",".level7 .box.r3 .robot1 .text");
	setTimeout(()=>{
		addActiveBox(checkBtn5);
		removeActiveBox(btn19);
	},1000)
	scroll(".level7 .box.r1",".level7 .box.r2");
	clickTestBtn = true;
})

checkBtn5.addEventListener("click",function(){
	if (test(this,btn19,test5Btns)) {
		clickTestBtn = false;
	}
})

btn19.addEventListener("click",function(){
	noActiveBtn(this);
	removeActiveBox(".level7")
	addActiveBox(".level8",".level8 .robot2");
	setTimeout(()=>{
		removeActiveBox(prevBtn7);
		addActiveBox(".level8 .robot2 .text",btn20,prevBtn8);
	},200)
	window.scrollTo(0,0);
})

btn20.addEventListener("click",function(){
	noActiveBtn(this);
	addActiveBox(".startBtn");
	setTimeout(()=>{
		addActiveBox(startGameBtn);
	},100)
	scroll(".level8 .box.r1");
})

startGameBtn.addEventListener("click",()=>{
	removeActiveBox(".level8",prevBtn8,startGameBtn,".startBtn");
	addActiveBox(".level9",".level9 .robot2");
	setTimeout(()=>{
		addActiveBox(".level9 .robot2 .text",btn21);
	},100)
	window.scrollTo(0,0);
})

btn21.addEventListener("click",function(){
	noActiveBtn(this);
	addActiveBox(".level9 .box.r2");
	scroll(".level9 .box.r1");
	let badGameDate = document.querySelector("#badGameDate");
	let DATE = new Date();
	let year = DATE.getFullYear();
	let month = DATE.getMonth()+1;
	let day = DATE.getDate();
	let hour = DATE.getHours();
	let minute = DATE.getMinutes();
	let seconds = DATE.getSeconds();
	if (hour.length==1) {
		hour = "0"+hour;
	}
	if (minute.length==1) {
		minute = "0"+minute;
	}
	if (seconds.length==1) {
		seconds = "0"+seconds;
	}
	let date = day+"."+month+"."+year+" "+hour+":"+minute+":"+seconds;
	badGameDate.textContent = date;
})

rightDBtn.addEventListener("click",function(){
	addActiveBox(".level9 .load");
	load();
})
document.querySelector("#startGameAD").addEventListener("click",function(){
	removeActiveBox(".level9");
	addActiveBox(".level10",".level10 .robot2");
	setTimeout(addActiveBox(".level10 .robot2 .text","#lastBtn"),1000)
})
document.querySelector("#lastBtn").addEventListener("click",function(){
	noActiveBtn(this);
	removeActiveBox(".level10");
	addActiveBox("#titles");
	document.querySelectorAll(".wrapper")[0].style.display = "flex"
	document.querySelectorAll(".wrapper")[0].style.alignItems = "center"
	document.querySelectorAll(".wrapper")[0].style.justifyContent = "center"
	addActiveBox("#titles h1");
	setTimeout(()=>{
		document.querySelectorAll("#titles .pupil")[0].classList.add("active")
	},500);
	setTimeout(()=>{
		document.querySelectorAll("#titles .pupil")[1].classList.add("active")
	},1000);
	removeActiveBox("#mark")
})

prevBtn1.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	helloBlock.style.display = 'flex';
	removeActiveBox(".level1",prevBtn1,nextBtn2);
	addActiveBox(
			helloBlock.querySelector("header"),
			helloBlock.querySelector(".box.hello"),
			helloBlock.querySelector("footer"),
			helloBlock.querySelector(".hellononv"),
			nextBtn1
		);
})

prevBtn2.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	removeActiveBox(".level2",prevBtn2,nextBtn3)
	addActiveBox(nextBtn2,'.level1',prevBtn1);
})

prevBtn3.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	removeActiveBox(".level3",prevBtn3,nextBtn4)
	addActiveBox(nextBtn3,'.level2',prevBtn2);
})

prevBtn4.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	removeActiveBox(".level4",prevBtn4,nextBtn5)
	addActiveBox(nextBtn4,'.level3',prevBtn3);
})

prevBtn5.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	removeActiveBox(".level5",prevBtn5,nextBtn6)
	addActiveBox(nextBtn5,'.level4',prevBtn4);
})

prevBtn6.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	removeActiveBox(".level6",prevBtn6,nextBtn7)
	addActiveBox(nextBtn6,'.level5',prevBtn5);
})

prevBtn7.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	removeActiveBox(".level7",prevBtn7,nextBtn8)
	addActiveBox(nextBtn7,'.level6',prevBtn6);
})

prevBtn8.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	removeActiveBox(".level8",prevBtn8,startGameBtn,".startBtn")
	addActiveBox(nextBtn8,'.level7',prevBtn7);
})




nextBtn1.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	window.scrollTo(0,0);
	addActiveBox(".level1",prevBtn1);
	removeActiveBox(nextBtn1)
	helloBlock.style.display = 'none';
	if (prevBtn2.getAttribute("isClicked") == 1) {
		addActiveBox(nextBtn2)
	}
	removeActiveBox(helloBlock.querySelector("footer"));
})

nextBtn2.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	window.scrollTo(0,0);
	addActiveBox(".level2",prevBtn2);
	removeActiveBox(nextBtn2,'.level1')
	if (prevBtn3.getAttribute("isClicked") == 1) {
		addActiveBox(nextBtn3)
	}	
})

nextBtn3.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	window.scrollTo(0,0);
	addActiveBox(".level3",prevBtn3);
	removeActiveBox(nextBtn3,'.level2')
	if (prevBtn4.getAttribute("isClicked") == 1) {
		addActiveBox(nextBtn4)
	}
})

nextBtn4.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	window.scrollTo(0,0);
	addActiveBox(".level4",prevBtn4);
	removeActiveBox(nextBtn4,'.level3')
	if (prevBtn5.getAttribute("isClicked") == 1) {
		addActiveBox(nextBtn5)
	}
})

nextBtn5.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	window.scrollTo(0,0);
	addActiveBox(".level5",prevBtn5);
	removeActiveBox(nextBtn5,'.level4')
	if (prevBtn6.getAttribute("isClicked") == 1) {
		addActiveBox(nextBtn6)
	}
})

nextBtn6.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	window.scrollTo(0,0);
	addActiveBox(".level6",prevBtn6);
	removeActiveBox(nextBtn6,'.level5')
	if (prevBtn7.getAttribute("isClicked") == 1) {
		addActiveBox(nextBtn7)
	}
})

nextBtn7.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	window.scrollTo(0,0);
	addActiveBox(".level7",prevBtn7);
	removeActiveBox(nextBtn7,'.level6')
	if (prevBtn8.getAttribute("isClicked") == 1) {
		addActiveBox(nextBtn8)
	}
})

nextBtn8.addEventListener("click",function(){
	this.setAttribute("isClicked","1")
	window.scrollTo(0,0);
	addActiveBox(".level8",prevBtn8);
	removeActiveBox(nextBtn8,'.level7')
})

window.onscroll = ()=>{
	document.querySelectorAll(".pnBtn.nBtn").forEach(item=>{
		item.style.top = (window.scrollY+8)+"px";
	})
	document.querySelectorAll(".pnBtn.pBtn").forEach(item=>{
		item.style.top = (window.scrollY+8)+"px"
	})
}

// meanwhile button
// nextBtn9.addEventListener("click",function(){
// 	window.scrollTo(0,0);
// 	helloBlock.style.display = "none";
// 	helloBlock.style.height = 0+"px";
// 	addActiveBox(".level8",".level8 .robot2");
// 	setTimeout(()=>{
// 		addActiveBox(".level8 .robot2 .text",btn20);
// 	},200)
// 	removeActiveBox(helloBlock.querySelector("footer"));
// })