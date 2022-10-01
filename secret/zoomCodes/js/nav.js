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