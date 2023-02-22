//ANIMATION
function animation() {
  setTimeout(() => document.querySelector('.config-wrapper').classList.add('active'), 1);
  setTimeout(() => document.querySelector("#game").style.display = "none", 1);
}
document.addEventListener("DOMContentLoaded", animation);


//SNAKE STYLE 
let snakeHead = document.querySelector('#resultHead');
let berryStyle = document.querySelector('#berryStyle');
let snakeTail = document.querySelector('#snake-parts .tail');
function snakeStyleHead() {
  let head = document.querySelector('#head').value;
  snakeHead.style.backgroundColor = head;
}
function snakeStyleTail() {
  let tail = document.querySelector('#tail').value;
  snakeTail.style.backgroundColor = tail;
}
function snakeStyleBerry() {
  let berry = document.querySelector('#berry').value;
  berryStyle.style.backgroundColor = berry;
};
document.querySelector("#refresh").addEventListener("click",function(){
  let head = document.querySelector('#head');
  let berry = document.querySelector('#berry');
  let tail = document.querySelector('#tail');
  head.value = "#FA0556";
  tail.value = "#A00034";
  berry.value = "#ff0000";
  snakeStyleHead();
  snakeStyleTail();
  snakeStyleBerry();
})
function gameShow() {
  if(document.querySelector('#nickname').value.length == 0){
    document.querySelector('#nickname').placeholder = "You not writed your nickname";
    document.querySelector('#nickname').style.backgroundColor = "#ff0000";
  } else {
    document.querySelector('#nickname').style.backgroundColor = "#fff";
    setTimeout(() => document.querySelector('body').style.overflow = "hidden",1);
    setTimeout(() => document.querySelector(".config-wrapper").classList.toggle('active'), 2);
    setTimeout(() => document.querySelector('.config-wrapper').style.display = "none", 400);
    setTimeout(() => document.querySelector("#game").style.display = "flex", 2);
    setTimeout(() => document.querySelector("#game").classList.toggle('active'), 100);
  }
}
function gameHide() {
  setTimeout(() => document.querySelector(".config-wrapper").classList.toggle('active'), 700);
  setTimeout(() => document.querySelector("#game").classList.toggle('active'), 200);
  setTimeout(() => document.querySelector('.config-wrapper').style.display = "flex", 600);
  setTimeout(() => document.querySelector("#game").style.display = "none", 800);
  setTimeout(() => document.querySelector('body').style.overflow = "visible",1000);
}

document.querySelector("#backBTN").addEventListener("click",gameHide)

document.addEventListener("DOMContentLoaded",function(){
  //LOCAL STORAGE
  let nickname = document.querySelector('#nickname');
  let head = document.querySelector('#head');
  let tail = document.querySelector('#tail');
  let berry = document.querySelector('#berry');
  let snakeHead = document.querySelector('#resultHead');
  let snakeTail = document.querySelector('#snake-parts').querySelector('.tail');
  let berryStyle = document.querySelector('#berryStyle');
  let nicknameHtml = document.querySelector(".assets .nickname .name");
  if (localStorage.getItem("nickname")) {
    nickname.value = localStorage.getItem("nickname");
  }
  localStorage.nickname = nickname.value.trim();
  nicknameHtml.innerHTML = localStorage.nickname;
  nickname.oninput = function () {
    localStorage.setItem("nickname", nickname.value.trim());
  };

  if (localStorage.getItem("head")) {
    head.value = localStorage.getItem("head");
  }
  localStorage.head = head.value;
  snakeHead.style.backgroundColor = localStorage.head;
  head.oninput = function () {
    localStorage.setItem("head", head.value);
  };

  if (localStorage.getItem("tail")) {
    tail.value = localStorage.getItem("tail");
  }
  localStorage.tail = tail.value;
  snakeTail.style.backgroundColor = localStorage.tail;
  tail.oninput = function () {
    localStorage.setItem("tail", tail.value);
  };

  if (localStorage.getItem("berry")) {
    berry.value = localStorage.getItem("berry");
  }
  localStorage.berry = berry.value;
  berryStyle.style.backgroundColor = localStorage.berry;
  berry.oninput = function () {
    localStorage.setItem("berry", berry.value);
  };
})

function changeName(){
  let nickname = document.querySelector('#nickname');
  let nicknameHtml = document.querySelector(".assets .nickname .name");
  let doYouChangeName = confirm("Do you wan`t to change name?");
    if(doYouChangeName){
      if (localStorage.getItem("nickname")) {
        nickname.value = localStorage.getItem("nickname");
      }
    let changeName = prompt('CHANGE NAME', nickname.value);
    if(changeName){
      localStorage.setItem("nickname", changeName.trim());
      nicknameHtml.innerHTML = localStorage.nickname;
      nickname.value =  localStorage.nickname;
      hiNickname.innerHTML =  localStorage.nickname + " !";
    }
  }
}
let hiNickname = document.querySelector("#hiNickname");
if(localStorage.getItem("nickname").length == 0){
  hiNickname.innerHTML = "my friend!"
} else {
  hiNickname.innerHTML = localStorage.getItem("nickname") + " !";
}

document.querySelector('#nickname').onchange = function(){
  localStorage.setItem("nickname", this.value.trim());
  document.querySelector(".assets .nickname .name").innerHTML = this.value.trim();
  document.querySelector("#hiNickname").innerHTML = this.value.trim() + " !";
}

window.onload = ()=>{
  document.body.style.minHeight = window.innerHeight+"px"
}

window.addEventListener("resize", ()=>{
  document.body.style.minHeight = window.innerHeight+"px"
})