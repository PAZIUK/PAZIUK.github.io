//add liked projects
let hearths = document.querySelectorAll("section.projects .container .projectsBlock .project .heart");
if(hearths){
	hearths.forEach(item=>{
		item.addEventListener("click",function(){
			item.querySelectorAll("img").forEach(img=>{
				img.classList.toggle("active")
			})
		})
	})
	function addProjectToSaved(id){
		let saved;
		if (localStorage.getItem("saved")) {
			saved = localStorage.getItem("saved").split(",").map( s => +s );
		} else {
			saved = [];
		}
		if (!saved.includes(+id)) {
			saved.push(+id);
		}
		localStorage.setItem("saved",saved);
	}
	function removeProjectToSaved(id){
		let saved = localStorage.getItem("saved").split(",").map( s => +s );
		let index = saved.indexOf(+id);
		if (index > -1) {
		saved.splice(index, 1);
		}
		localStorage.setItem("saved",saved);
	}
}