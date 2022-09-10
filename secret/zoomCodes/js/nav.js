"use strict"

let aIG = 0;
let whatTimeBlock = document.querySelector(".time")

document.head.innerHTML += "<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>"

window.onload = ()=>{
  aDayOrNot();
  localStorage.setItem("linkNow",window.location.href);
  if(localStorage.getItem("nameOfClass")){
    document.head.querySelector("title").textContent += ` - ${localStorage.getItem("nameOfClass")}`
  }
}
function addBackBtn() {
  let div = document.createElement("div")
  let img = document.createElement("img")

  div.classList.add("back","active")

  img.setAttribute("src","https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png")

  div.appendChild(img)
  document.body.appendChild(div)
}
addBackBtn()

function addBackground() {
  let div = document.createElement("div")

  div.classList.add("background")

  document.body.appendChild(div)
}
addBackground()

document.querySelector(".back").addEventListener("click",function(){
  window.location.href = "../../index.html"
})

let daysBtns = document.querySelectorAll(".days button");
daysBtns.forEach(item => {
  item.addEventListener("click", function () {
    let href = item.getAttribute("id");
    window.location.href = `#${href}`;
    showDay(href);
    localStorage.setItem("linkNow",window.location.href);
  })
})
function timeFormatter(date){
  const daysNames = {"Monday":"ПОНЕДІЛОК","Tuesday":"ВІВТОРОК","Wednesday":"СЕРЕДА","Thursday":"ЧЕТВЕР","Friday":"П'ЯТНИЦЯ","Saturday":"СУБОТА","Sunday":"НЕДІЛЯ"}
  const nowTime = date.toLocaleString('en-UK', {timeZone: 'Europe/Kiev', dateStyle: 'full', timeStyle: 'full'})
  let enDay = nowTime.split(",")[0]
  if(Object.keys(daysNames).includes(enDay)){
    whatTimeBlock.querySelector(".whatDay").textContent = Object.values(daysNames)[Object.keys(daysNames).indexOf(enDay)]
  }
  whatTimeBlock.querySelector(".whatTime p.h").textContent = nowTime.split(",")[1].split(" ")[5].split(":")[0]
  whatTimeBlock.querySelector(".whatTime p.m").textContent = nowTime.split(",")[1].split(" ")[5].split(":")[1]
  whatTimeBlock.querySelector(".whatTime p.s").textContent = nowTime.split(",")[1].split(" ")[5].split(":")[2]
}
setInterval(()=>{
  const date = new Date();
  timeFormatter(date)
},1000)

function showDay(day) {
  document.querySelector(".days").classList.remove("active")
  document.querySelector(".back").classList.remove("active")
  document.body.classList.add("active");
  let btnsBlocks = document.querySelectorAll(".btns");

  btnsBlocks.forEach(item => {
    if (item.classList.contains(day)) {
      item.classList.add("active");
      let allLessonBloks = item.querySelectorAll(".lesson");
      let ind = 0;
      setInterval(()=>{
        if(ind<allLessonBloks.length){
          allLessonBloks[ind].classList.add("active")
          ind++
        }
      },200)
      let header = document.querySelector("header.classInfo");
      document.querySelectorAll(".days button").forEach(i => {
        if (i.getAttribute("id") == day) {
          header.querySelector(".name").textContent = i.textContent.toUpperCase();
          header.classList.add("active");
          header.querySelector("img").classList.add("active");
          setInterval(()=>{header.style.transform = "translate(0)"},100)
        }
      })
      let inc = 1;
      item.querySelectorAll(".btns .lesson").forEach(it=>{
        it.querySelector(".lessonBtn .lessonNumber").textContent = inc+".";
        inc++;      
      })
    }
  })

}

function aDayOrNot(){
  let link = window.location.href.split("#")
  if (link.length > 1) {
    document.querySelector(".days").classList.remove("active")
    document.querySelector(".background").classList.remove("active")
    let whatADay = link[1];
    showDay(whatADay);
    whatTimeBlock.classList.add("noactive")
  } else {
    document.querySelector("header.classInfo").classList.remove("active");
    document.querySelector(".background").classList.add("active")
    // toLeft();
    document.querySelectorAll(".btns").forEach(item => {
      item.classList.remove("active")
    })
    document.querySelector(".days").classList.add("active")
    let daysBtns = document.querySelectorAll(".days button");
    setTimeout(
      daysBtns.forEach(item => {
        item.classList.add("active");
        item.addEventListener("click", function () {
          showDay(this.getAttribute('id'));
          window.location.reload();
        })
      })
      , 100)
    document.body.style.overflowY = "hidden"
    setTimeout(()=>{
      whatTimeBlock.classList.add("active")
      setTimeout(()=>{
        document.body.style.overflowY = "unset"
      },1000)
    },1000)
  }
}
// let backPos = 9000;
// let background = document.querySelector(".background");
// function toRight(){
//   let endInterval = setInterval(()=>{
//     if(!background.classList.contains("active")){
//       clearInterval(endInterval)
//     } else {
//       backPos+=1
//       let value = backPos/100;
//       background.style.backgroundPosition = `${value}% 50%`
//       if((backPos/100)>=80){
//         toLeft()
//         clearInterval(endInterval)
//       }
//     }
//   },10)
// }
// function toLeft(){
//   let endInterval = setInterval(()=>{
//     if(!background.classList.contains("active")){
//       clearInterval(endInterval)
//     } else {
//       backPos-=1
//       let value = backPos/100;
//       background.style.backgroundPosition = `${value}% 50%`
//       if((backPos/100)<=20){
//         toRight()
//         clearInterval(endInterval)
//       }
//     }
//   },10)
// }

// const schedule = {
//   1: [["09:00:00"],["09:30:00"]],
//   2: [["09:45:00"],["10:15:00"]],
//   3: [["10:30:00"],["11:00:00"]],
//   4: [["11:15:00"],["11:45:00"]],
//   5: [["12:00:00"],["12:30:00"]],
//   6: [["12:45:00"],["13:15:00"]],
//   7: [["13:30:00"],["14:00:00"]],
// }

// let scheduleLessonsNumbers = Object.keys(schedule);
// let scheduleLessonsTime = Object.values(schedule);

// window.addEventListener("load",startTimer)
// function startTimer(){
//   let nowTime = new Date(),
//       day = nowTime.getDate(),
//       hours = nowTime.getHours()-13;
//   if(hours<14&&hours>=9){
//     if ((day>0)) {
//       document.querySelector(".nowLesson").classList.add("active");
//       let nowMinutes = nowTime.getMinutes();
//       let nowSeconds = nowTime.getSeconds();
//       for (let i = 0; i < scheduleLessonsNumbers.length; i++) {
//         let lessonStart = scheduleLessonsTime[i][0][0];
//         let lessonEnd = scheduleLessonsTime[i][1][0];
//         let nextLessonStart;
//         if(scheduleLessonsTime[i+1]) {
//           nextLessonStart = scheduleLessonsTime[i+1][0][0];
//         }
//         let isLesson = checkTime(lessonStart, lessonEnd, hours, nowMinutes, nowSeconds);
//         let isBreak;
//         if(nextLessonStart) isBreak = checkTime(lessonEnd, nextLessonStart, hours, nowMinutes, nowSeconds);
//         // console.log(isLesson)
//         // console.log(isBreak)
//         if(isLesson == true) {
//           changeTimer("lesson",lessonEnd);
//         } 
//         if(isBreak&&isBreak == true){
//           changeTimer("break",nextLessonStart);
//         }
//       }
//     }
//   }
// }
// function changeTimer(whatTime,toTime){

//   if (whatTimer=="lesson") {
    
//     console.log("lesson")
//   } else if(whatTimer=="break"){
//     console.log("break")
//   }

// }
// function checkTime (start, end, hours, minutes, seconds){
//   let s = 60,
//       d = ':',
//       b = start.split (d);
//       b = b[0]* s * s + b [1] * s + +b[2];
//   let e = end.split (d);
//       e = e[0]* s * s + e [1] * s + +e[2];
//   let t = new Date;
//       t = hours * s * s + minutes * s + seconds;
//       t = t.getHours() * s * s + t.getMinutes() * s + t.getSeconds();

//   return (t >= b && t <= e);
// }

// document.querySelector(".nowLesson .cross").addEventListener("click",function(){
//   this.parentElement.classList.remove("active");
// })
