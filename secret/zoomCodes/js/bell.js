"use strict"

import schedule from './schedule.js';

window.addEventListener("DOMContentLoaded",()=>{
    const lessonBlock = document.querySelector(".lesson_block")
    for (let i = 0; i < Object.keys(schedule).length; i++) {
        let lesson = document.createElement("div")
        let number = document.createElement("p")
        let time = document.createElement("p")

        lesson.classList.add('lesson')
        time.classList.add('time')

        number.textContent = `${Object.keys(schedule)[i]}.`
        time.textContent = `${Object.values(schedule)[i][0].join("").substring(0,5)} - ${Object.values(schedule)[i][1].join("").substring(0,5)}`

        lesson.appendChild(number)
        lesson.appendChild(time)

        lessonBlock.appendChild(lesson)
    }
})