"use strict";
const hello = document.querySelector("section.hello");
const loading = document.querySelector("section.loading");
const pushUpsBlock = document.querySelector("section.pushUps");
const startBtn = document.querySelector("section.hello .container .hello__block .inside button");
const startInputRA = document.querySelector("section.hello .container .hello__block .inside input#RA");
const startInputDT = document.querySelector("section.hello .container .hello__block .inside input#DT");
const startInputAT = document.querySelector("section.hello .container .hello__block .inside input#AT");
const loadingNum = document.querySelector("section.loading .container .circle .inner #loadingNumber");
const loadingCircle = document.querySelector("section.loading .container .circle circle");
const repetionsBlock = document.querySelector("section.pushUps .container .repetition");
const startPushUpsBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

if(localStorage.getItem("PushUpSession")){
    let question = confirm("Do you want to continue last session?")
    if(question){
        let PushUpSession = JSON.parse(localStorage.getItem("PushUpSession"))
        start(PushUpSession.amount,PushUpSession.desc,PushUpSession.asc)
    } else {
        localStorage.removeItem("PushUpSession")
        hello.classList.add("active")
    }
} else {
    hello.classList.add("active")
}

if(startBtn){
    startBtn.addEventListener("click",()=>{
        let amount = +startInputRA.value;
        let desc = +startInputDT.value;
        let asc = +startInputAT.value;
        start(amount,desc,asc)
    })
}
if(startPushUpsBtn){
    startPushUpsBtn.addEventListener("click",()=>{
        if(!startPushUpsBtn.classList.contains("noactive")){
            startPushUpsBtn.classList.add("noactive")
            stopBtn.classList.remove("noactive")
            resetBtn.classList.add("noactive")
        }
    })
}
if(stopBtn){
    stopBtn.addEventListener("click",()=>{
        if(!stopBtn.classList.contains("noactive")){
            startPushUpsBtn.classList.remove("noactive")
            stopBtn.classList.add("noactive")
            resetBtn.classList.remove("noactive")
        }
    })
}
if(resetBtn){
    resetBtn.addEventListener("click",()=>{
        if(!resetBtn.classList.contains("noactive")){
            let question = confirm("Do you want to reset session?");
            if(question){
                localStorage.removeItem("PushUpSession");
                window.location.href = window.location.href
            }
        }
    })
}
window.addEventListener('keydown', (e)=>{
    if(e.key=="Enter"){
        let amount = +startInputRA.value;
        let desc = +startInputDT.value;
        let asc = +startInputAT.value;
        start(amount,desc,asc)
    }
})
function start(amount,desc,asc){
    if(validatorStart()){
        hello.classList.remove("active")
        loading.classList.add("active")
        setTimeout(()=>{
            let i = 0;
            let int = setInterval(()=>{
                i++;
                loadingNum.textContent = `${i}%`
                loadingCircle.style.strokeDasharray = i*6.25
                if(i == 100){
                    clearInterval(int);
                    setTimeout(()=>{
                        loading.classList.remove("active")
                        pushUpsBlock.classList.add("active")
                        localStorage.setItem("PushUpSession",JSON.stringify({amount:amount,desc:desc,asc:asc}))
                        pushUpSession(amount,desc,asc)
                    },500)
                }
            },20)
        },200)
        repetionsBlock.style.gridTemplateColumns = `repeat(${amount},1fr)`
        for (let i = 0; i < amount; i++) {
            let rep = document.createElement("div")
            rep.className = "rep opacity"
            repetionsBlock.appendChild(rep)
        }
    }
}
function validatorStart(){
    let errors = []
    if(+startInputRA.value<0||+startInputRA.value>100){
        startInputRA.classList.add("error")
        errors.push(1)
    } else {
        startInputRA.classList.remove("error")
    }
    if(+startInputDT.value<0||+startInputDT.value>60){
        startInputDT.classList.add("error")
        errors.push(1)
    } else {
        startInputDT.classList.remove("error")
    }
    if(+startInputAT.value<0||+startInputAT.value>60){
        startInputAT.classList.add("error")
        errors.push(1)
    } else {
        startInputAT.classList.remove("error")
    }
    if(errors.length==0){
        return true
    } else {
        return false
    }   
}
function pushUpSession(amount,desc,asc){
    console.log(amount,desc,asc)
}