"use strict"
let code = localStorage.getItem("classCode")
if(code){
  window.location.href = `http://zozrozklad.zzz.com.ua/view/class/${code}/navigation`
} else {
  window.location.href = `http://zozrozklad.zzz.com.ua`
}