"use strict"
let PASSWORDS = {
  "05041": "5-А КЛАС",
  "05042": "5-Б КЛАС",
  "06041": "6-А КЛАС",
  "06042": "6-Б КЛАС",
  "06043": "6-В КЛАС",
  "07031": "7-А КЛАС",
  "07032": "7-Б КЛАС",
  "07033": "7-В КЛАС",
  "08031": "8-А КЛАС",
  // "08032": "8-Б КЛАС",
  "08203": "8-Б КЛАС",
  "09031": "9-А КЛАС",
  "09042": "9-Б КЛАС",
  "10031": "11-А КЛАС",
  "10042": "11-Б КЛАС",
  // "48523": "12-Г КЛАС",
}


let PASSWORDKeys = Object.keys(PASSWORDS);
let PASSWORDValues = Object.values(PASSWORDS);

function checkPassword(btn) {
  let PASSWORD = btn.parentElement.parentElement.querySelector("input").value;
  let nameOfClass = Object.values(PASSWORDS)[PASSWORDKeys.indexOf(PASSWORD)]
  localStorage.setItem("nameOfClass",nameOfClass)
  if (PASSWORDKeys.includes(PASSWORD)) {
    localStorage.setItem('classCode', PASSWORD);
    window.location.href = `classes/${PASSWORD}/nav.html`;
  } else {
    btn.parentElement.parentElement.querySelector(".errorText").classList.add("active")
    setTimeout(() => {
      btn.parentElement.parentElement.querySelector(".errorText").classList.remove("active");
    }, 2000);
  }
}

function login() {
  let checkPasswordBtn = document.querySelector("#checkPassword");
  checkPasswordBtn.addEventListener("click", () => checkPassword(checkPasswordBtn));
  document.addEventListener('keydown', function (e) {
    if (e.key == "Enter") checkPassword(checkPasswordBtn);
  })
}

function settings() {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.querySelector(".PASSWORD input").classList.add("active")
      document.querySelector(".PASSWORD button").classList.add("active")
      document.querySelector(".PASSWORD a").classList.add("active")
    }, 200)
    let input = document.querySelector(".PASSWORD input");
    if(input.value.length>0){
      if (PASSWORDKeys.includes(input.value)) {
        let ind = PASSWORDKeys.indexOf(input.value);
        let nameOfClass = Object.values(PASSWORDS)[ind]
        document.querySelector(".PASSWORD .className").textContent = nameOfClass;
        setTimeout(() => {
          document.querySelector(".PASSWORD .className").classList.add("active")
        }, 200)
      } else {
        document.querySelector(".PASSWORD .className").classList.remove("active");
      }
    }
  })
  document.querySelector(".PASSWORD input").addEventListener("input", function () {
    if (PASSWORDKeys.includes(this.value)) {
      let ind = PASSWORDKeys.indexOf(this.value);
      document.querySelector(".PASSWORD .className").textContent = Object.values(PASSWORDS)[ind];
      setTimeout(() => {
        document.querySelector(".PASSWORD .className").classList.add("active")
      }, 200)
    } else {
      document.querySelector(".PASSWORD .className").classList.remove("active");
    }
    if (this.value.length > 5) {
      let value = this.value.substr(0, 5);
      this.value = value;
    }
  })
}

let classId = localStorage.getItem('classCodeNow');
if (localStorage.getItem('classCode')) {
  let classCode = localStorage.getItem('classCode');
  document.querySelector(".PASSWORD input").value = classCode;
  setTimeout(() => {
    document.querySelector(".PASSWORD .className").classList.add("active")
  }, 200)
  settings();
  login();
  
} else {
  settings();
  login();
  
}

