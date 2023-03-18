'use strict'

window.addEventListener("scroll",function(){
	if(window.scrollY>0){
		window.location.href = window.location.href
	}
})

// Toggle Btn
const toggleBtn = document.querySelector(".toggle-button")
const toggleContainer = document.querySelector(".main-container")
const header = document.querySelector(".main-container__header")
const navbarCircle = document.querySelector(".navbar-circle")
const mainNavBtns = document.querySelectorAll(".main-navbar ul li")

toggleBtn.addEventListener("click",function(){toggle("toggle")})
document.addEventListener('keydown', function(e){
	if(e.code=="Escape"){toggle("remove")}
});
mainNavBtns.forEach(item=>{
	item.addEventListener("click",function(){
		toggle("remove")
		setTimeout(()=>{
			window.location.href = item.querySelector('a').getAttribute("link")
		},800)
	})
})

function toggle(action) {
	if(action=="toggle"){
		toggleBtn.classList.toggle('toggle-button_active');
		toggleContainer.classList.toggle('main-container_active');
		navbarCircle.classList.toggle('navbar-circle_active');
		if(toggleContainer.classList.contains("main-container_active")){
			header.style.width = "100%"
		} else {
			headerWidth()
		}
	} else if(action=="remove"){
		toggleBtn.classList.remove('toggle-button_active');
		toggleContainer.classList.remove('main-container_active');
		navbarCircle.classList.remove('navbar-circle_active');
		headerWidth();
	}
}

// Header animation
const helloBlock = document.querySelector("section.hello-section")
if(helloBlock){
	function headerOpacity(){	
		let opacityValue = (((100*toggleContainer.querySelector(".main-container__block").scrollTop)/helloBlock.offsetHeight)/100).toFixed(2)
		if(+opacityValue<=1){
			header.style.backgroundColor = `rgba(10, 9, 25, ${opacityValue})`
		} else {
			header.style.backgroundColor = `rgba(10, 9, 25, 1)`
		}
		headerWidth()
	}
	window.addEventListener("DOMContentLoaded",headerOpacity)
	window.addEventListener("resize",headerWidth)
	toggleContainer.querySelector(".main-container__block").addEventListener("scroll",headerOpacity)
} else {
	function headerOpacity(){	
		header.style.backgroundColor = `rgba(10, 9, 25, 1)`
		headerWidth()
	}
	window.addEventListener("DOMContentLoaded",headerOpacity)
	window.addEventListener("resize",headerWidth)
	toggleContainer.querySelector(".main-container__block").addEventListener("scroll",headerOpacity)
}
function headerWidth(){
	header.style.width = document.querySelector("main").offsetWidth+"px"
}

const projectsBlockProjects = document.querySelectorAll(".projects-section .projects .projects__project")
if(projectsBlockProjects){
	setTimeout(()=>checkProjectsWidth(),100)
	window.addEventListener("resize",checkProjectsWidth)
	function checkProjectsWidth() {
		projectsBlockProjects.forEach(item=>{
			item.style.height = item.offsetWidth+"px";
		})
	}
}

document.addEventListener("DOMContentLoaded",function(){
	document.querySelector("#year").textContent = new Date().getFullYear()
})