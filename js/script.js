'use strict'

window.addEventListener("scroll",function(){
    if(window.scrollY>0){
        window.location.href = window.location.href
    }
})

// toggle Btn
const toggleBtn = document.querySelector(".toggle")
const toggleContainer = document.querySelector(".mainContainer")
const header = document.querySelector("header")
const navbarCircle = document.querySelector(".navbarCircle")
const mainNavBtns = document.querySelectorAll("nav.mainNav ul li a")

toggleBtn.addEventListener("click",function(){toggle("toggle")})
document.addEventListener('keydown', function(e){
	if(e.code=="Escape"){toggle("remove")}
});
mainNavBtns.forEach(item=>{
	item.addEventListener("click",function(){
		toggle("remove")
		setTimeout(()=>{
			window.location.href = item.getAttribute("link")
		},800)
	})
})

function toggle(action) {
	if(action=="toggle"){
		toggleBtn.classList.toggle('active');
		toggleContainer.classList.toggle('active');
		navbarCircle.classList.toggle('active');
		if(toggleContainer.classList.contains("active")){
			header.style.width = "100%"
		} else {
			headerWidth()
		}
	} else if(action=="remove"){
		toggleBtn.classList.remove('active');
		toggleContainer.classList.remove('active');
		navbarCircle.classList.remove('active');
		headerWidth();
	}
}

// header animation
const helloBlock = document.querySelector("section.hello")
if(helloBlock){
	function headerOpacity(){	
		let opacityValue = (((100*toggleContainer.querySelector(".mainContainerBlock").scrollTop)/helloBlock.offsetHeight)/100).toFixed(2)
		if(+opacityValue<=1){
			header.style.backgroundColor = `rgba(10, 9, 25, ${opacityValue})`
		} else {
			header.style.backgroundColor = `rgba(10, 9, 25, 1)`
		}
		headerWidth()
	}
	window.addEventListener("DOMContentLoaded",headerOpacity)
	window.addEventListener("resize",headerWidth)
	toggleContainer.querySelector(".mainContainerBlock").addEventListener("scroll",headerOpacity)
} else {
	function headerOpacity(){	
		header.style.backgroundColor = `rgba(10, 9, 25, 1)`
		headerWidth()
	}
	window.addEventListener("DOMContentLoaded",headerOpacity)
	window.addEventListener("resize",headerWidth)
	toggleContainer.querySelector(".mainContainerBlock").addEventListener("scroll",headerOpacity)
}
function headerWidth(){
	header.style.width = document.querySelector("main").offsetWidth+"px"
}

const projectsBlockProjects = document.querySelectorAll("section.projects .container .projectsBlock .project")
if(projectsBlockProjects){
	setTimeout(()=>checkProjectsWidth(),100)
	window.addEventListener("resize",checkProjectsWidth)
	function checkProjectsWidth() {
		projectsBlockProjects.forEach(item=>{
			item.style.height = item.offsetWidth+"px";
		})
	}
}

const skillsBlocks = document.querySelectorAll("section.abilities .container .skillsBlock .skill")
if(skillsBlocks){
	skillsBlocks.forEach(item=>{
		let width = item.querySelector(".head .percent").textContent+"%"
		item.querySelector(".head .percent").textContent = width
		item.querySelector(".body .line").style.width = width
	})
}

const technologies = document.querySelectorAll("section.abilities .container .technologies .technology")
if(technologies){
	technologies.forEach(item=>{
		item.querySelector(".body button").addEventListener("click",function(){
			if(!item.querySelector(".body button").classList.contains("active")){
				for (let i = 0; i < technologies.length; i++) {
					if(technologies[i].querySelector(".moreBlock").classList.contains("active")){
						technologies[i].querySelector(".body button").classList.remove("active")
						technologies[i].querySelector(".body button").textContent = "More Info"
						technologies[i].querySelector(".moreBlock").classList.remove("active")
						technologies[i].querySelector(".body .moreBlock").style.top = "-"+item.querySelector(".body .moreBlock").offsetHeight+"px"
					}
					technologies[i].style.marginBottom = 0;
				}
				this.classList.add("active")
				this.textContent = "Less Info"
				item.querySelector(".moreBlock").classList.add("active")
				item.querySelector(".moreBlock").style.top = "3rem"
				let startMarginFrom = technologies.length-(window.getComputedStyle(item.parentElement).getPropertyValue('grid-template-columns').split(" ").length)
				if(startMarginFrom==6){startMarginFrom=7}
				if(+item.getAttribute("tech")>startMarginFrom){
					for (let i = 0; i < technologies.length; i++) {
						if(+technologies[i].getAttribute("tech")>startMarginFrom){
							technologies[i].style.marginBottom = item.querySelector(".moreBlock").offsetHeight+"px"
						}
					}
				}
			} else {
				this.classList.remove("active")
				this.textContent = "More Info"
				item.querySelector(".moreBlock").classList.remove("active")
				item.querySelector(".body .moreBlock").style.top = "-"+item.querySelector(".body .moreBlock").offsetHeight+"px"
				for (let i = 0; i < technologies.length; i++) {
					technologies[i].style.marginBottom = 0;
				}
			} 
		})
		item.querySelector(".body .moreBlock").style.top = "-"+item.querySelector(".body .moreBlock").offsetHeight+"px"
	})
}