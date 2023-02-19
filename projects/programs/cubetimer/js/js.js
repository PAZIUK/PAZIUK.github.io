"use strict"
const sides = ["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"]
const scrabmleBlock = document.querySelector(".container .sub-container .scramble .code")
const timerBlock = document.querySelector(".container .sub-container .timer")

window.addEventListener("DOMContentLoaded",init)

let isAct = false

function scrabmle(){
    let scrabmleCode = ""
    let scrabmleCodePreset = []
    for (let i = 0; i < 25; i++) {
        let n = Math.floor(Math.random() * (36 - 1) + 1);
        if(n>18){n-=18}
        n--;
        if(scrabmleCodePreset.length>0){
            if(sides[n][0]!=scrabmleCodePreset[scrabmleCodePreset.length-1][0]){
                scrabmleCode += sides[n]+"  "
                scrabmleCodePreset.push(sides[n])
            } else {i--}
        } else {
            scrabmleCode += sides[n]+" "
            scrabmleCodePreset.push(sides[n])
        }
    }
    scrabmleBlock.textContent = scrabmleCode
}

function start(cmd=true){
    if(cmd){
        if(isAct){
            isAct = !isAct
            scrabmle()
        } else {
            timer("start")
            isAct = !isAct
        } 
    } else {
        if(!isAct){
            timer("red")
        }
    }
}

function timer(cmd){
    if(cmd=="red"){
        timerBlock.classList.add("red")
    } else if(cmd=="start"){
        timerBlock.classList.remove("red")
        timerBlock.classList.add("green")
        setTimeout(()=>{timerBlock.classList.remove("green")},200)
        let timerCalc = 0;
        let ms;
        let sc;
        let mt;
        let timerWork = setInterval(()=>{
            timerCalc += 1
            timerCalc += ""
            if(timerCalc.substr(-4)=="6000"){
                timerCalc = +timerCalc - 6000 + 10000 +""
            }
            ms = timerCalc[timerCalc.length-2] ? timerCalc[timerCalc.length-2]+timerCalc[timerCalc.length-1] : "0"+timerCalc[timerCalc.length-1]
            if(timerCalc[timerCalc.length-3]){
                if(timerCalc[timerCalc.length-4]){
                    sc = timerCalc[timerCalc.length-4]+timerCalc[timerCalc.length-3]
                } else {
                    sc = "0"+timerCalc[timerCalc.length-3]
                }
            } else {
                sc = "00"
            }
            if(timerCalc[timerCalc.length-5]){
                if(timerCalc[timerCalc.length-6]){
                    if(timerCalc[timerCalc.length-7]){
                        mt = timerCalc[timerCalc.length-7]+timerCalc[timerCalc.length-6]+timerCalc[timerCalc.length-5]
                    } else {
                        mt = timerCalc[timerCalc.length-6]+timerCalc[timerCalc.length-5]
                    }
                } else {
                    mt = "0"+timerCalc[timerCalc.length-5]
                }
            } else {
                mt = "00"
            }
            timerBlock.querySelector(".miliseconds").textContent = ms
            timerBlock.querySelector(".seconds").textContent = sc
            timerBlock.querySelector(".minutes").textContent = mt
            timerCalc = +timerCalc
            if(timerCalc==1000000){
                isAct = false
                scrabmle()
            }
            if(!isAct){
                saveResult(timerCalc,`${mt}:${sc}.${ms}`)
                clearInterval(timerWork);
            }
        },10)
    }
}

function displayResults(){
    let [bestResults, otherResults] = getResults()

    for (let i = 0; i < 3; i++) {
        let parentBlock = document.querySelector(`#place-${i+1}`),
            dateTime = parentBlock.querySelector(".resultBlock_datetime"),
            resultTime = parentBlock.querySelector(".resultBlock_resulttime"),
            removeBtn = parentBlock.querySelector(".resultBlock_remove")
        if(bestResults[i]){
            dateTime.textContent = bestResults[i][2]
            resultTime.textContent = bestResults[i][3]
            removeBtn.classList.add("resultBlock_remove_allowed")
            removeBtn.addEventListener("click",()=>{
                removeResult(bestResults[i][0])
            })
        } else {
            dateTime.textContent = "There is no data"
            resultTime.textContent = "----------"
        }
    }

    let parentBlockOfOtherResults = document.querySelector(".result_other .resultsBlock_body")
    let allChildsOfParentBlock = parentBlockOfOtherResults.getElementsByClassName("resultBlock_datetime")
    if(otherResults.length>=1){
        parentBlockOfOtherResults.innerHTML = ""   
    } else {
        parentBlockOfOtherResults.innerHTML = ""
        parentBlockOfOtherResults.appendChild(getOtherResultsHTML("There is no data", "----------"))
    }

    for (let i = 0; i < otherResults.length; i++) {
        parentBlockOfOtherResults.appendChild(getOtherResultsHTML(otherResults[i][2],otherResults[i][3],otherResults[i][0]))
        if(i+1==otherResults.length){
            checkOtherResultsBlockHeight()
        }
    }
}

function getResults(){
    if(!localStorage.getItem("Results")){
        return [[], []]
    }

    let results = JSON.parse(localStorage.getItem("Results"))

    results = sortResults(results,1)
    
    let bestResults = results.slice(0,3)
    results = results.slice(3)

    results = sortResults(results,0).reverse()
    
    return [bestResults, results]
}

function saveResult(timing,time){
    let results = JSON.parse(localStorage.getItem("Results")) || []
    let [date, uniqueTime] = formatDate(new Date())
    let newResult = [uniqueTime, timing, date, time]

    results.push(newResult)
    
    results = sortResults(results,0)

    localStorage.setItem("Results",JSON.stringify(results))
    displayResults()
}

function removeResult(uniqueTime){
    if(confirm("Are you really want to delete the result?")){
        let results = JSON.parse(localStorage.getItem("Results"))
        for (let i = 0; i < results.length; i++) {
            if(results[i][0]==uniqueTime){
                [results[i],results[results.length-1]] = [results[results.length-1],results[i]]
                results.pop()
                localStorage.setItem("Results",JSON.stringify(results))
            }
        }
        location.reload()
    }
}

function sortResults(arr,id){
    for (let run = 0; run < arr.length - 1; run++) {
        for (let i = 0; i < arr.length - run - 1; i++) {
            if(arr[i][id] > arr[i+1][id]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            }
        }
    }
    return arr
}

function formatDate(date){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const dayNamesEndings = ["th","st","nd","rd"]

    let dayInt = date.getDate()
    let dayStr = dayInt <=3 ? `${dayInt}${dayNamesEndings[dayInt]}` : `${dayInt}${dayNamesEndings[0]}`

    return [`${dayStr} of ${months[date.getMonth()]}, ${date.getFullYear()} - ${String(date).split(" ")[4].slice(0,5)}`,date.getTime()]
}

function getOtherResultsHTML(datetime, resulttime, uniqueTime=null){
    let resultBlock = document.createElement("div"),
        resultBlock_photo = document.createElement("div"),
        resultBlock_photo_img = document.createElement("img"),
        resultBlock_time = document.createElement("div"),
        resultBlock_datetime = document.createElement("div"),
        resultBlock_resulttime = document.createElement("div"),
        resultBlock_remove = document.createElement("div"),
        resultBlock_remove_img = document.createElement("img")

    resultBlock.classList.add("resultsBlock_resultBlock", "resultBlock")
    resultBlock_photo.classList.add("resultBlock_photo")
    resultBlock_time.classList.add("resultBlock_time")
    resultBlock_datetime.classList.add("resultBlock_datetime")
    resultBlock_resulttime.classList.add("resultBlock_resulttime")
    resultBlock_remove.classList.add("resultBlock_remove")

    resultBlock_photo_img.setAttribute("src", "img/assets/timer.png")
    resultBlock_remove_img.setAttribute("src", "img/assets/close.png")

    resultBlock_datetime.innerText = datetime
    resultBlock_resulttime.innerText = resulttime

    if(uniqueTime){
        resultBlock_remove.classList.add("resultBlock_remove_allowed")
        resultBlock_remove_img.addEventListener("click",()=>{
            removeResult(uniqueTime)
        })
    }

    resultBlock_photo.appendChild(resultBlock_photo_img)
    resultBlock_time.appendChild(resultBlock_datetime)
    resultBlock_time.appendChild(resultBlock_resulttime)
    resultBlock_remove.appendChild(resultBlock_remove_img)

    resultBlock.appendChild(resultBlock_photo)
    resultBlock.appendChild(resultBlock_time)
    resultBlock.appendChild(resultBlock_remove)

    return resultBlock
}

function checkOtherResultsBlockHeight(){
    let otherResultsBlock = document.querySelector(".result_other .resultsBlock_body")
    let heightOfBlocks = otherResultsBlock.querySelectorAll(".resultBlock")
    let heightOfBlockChild = heightOfBlocks[0].offsetHeight+8

    if(heightOfBlockChild*heightOfBlocks.length>otherResultsBlock.offsetHeight){
        otherResultsBlock.classList.add("resultsBlock_body_scroll")
    } else {
        otherResultsBlock.classList.remove("resultsBlock_body_scroll")
    }
}

function init(){
    document.addEventListener("keydown",e=>{
        if(e.code == 'Space'){
            start(false)
        }
    })
    document.addEventListener("keyup",e=>{
        if(e.code == 'Space'){
            start(true)
        }   
    })
    timerBlock.addEventListener("touchstart",()=>{
        start(false)
    })
    timerBlock.addEventListener("touchend",start)
    scrabmle()
    displayResults()
}