"use strict"

document.querySelector("#submit").addEventListener("click",()=>{
  let result = document.querySelector('#result');
  let items = document.querySelector("#input").value;
  let checkbox = document.querySelector("#checkbox");
  if (items.length == 0) {
    result.innerHTML = "Enter a list!";
  } else {
    items = items.split(",");
    let random = Math.floor(Math.random() * items.length);
    result.innerHTML = items[random];
    if(checkbox.checked){
      [items[random],items[items.length-1]] = [items[items.length-1],items[random]]
      items.pop()
      document.querySelector("#input").value = items.join()
    }
    items = items;
  }
})