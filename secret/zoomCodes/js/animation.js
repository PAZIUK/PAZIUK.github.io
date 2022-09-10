"use strict"
const loadingLines = document.querySelectorAll(".loading .lines .line")
if(loadingLines){
    let i = 0
    loading()
    let int = setInterval(loading,250)
    function loading(){
        if(loadingLines[i]){
            loadingLines[i].classList.add("active")
            i++
        } else {
            clearInterval(int)
        }
    }
}

const loading = document.querySelector("section.hello")
if(loading){
    setTimeout(()=>{
        let i = 100
        let int = setInterval(()=>{
            i--;
            loading.style.opacity = i/100
            if(i==10){
                document.querySelector(".background").classList.add("active")
            } else if(i==0){
                loading.style.display = "none"
                clearInterval(int);
            }
        },5)
    },3000)
}
