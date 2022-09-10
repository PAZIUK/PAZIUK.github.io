function submit() {
  let items = document.querySelector("#input").value;
  if (items.length == 0) {
    result.innerHTML = "error";
  } else {
    let result = document.querySelector('#result');
    let checkbox = document.querySelector("#checkbox");
    items = items.split(",");
    let random;
    if (items.length<=10) {
      random = Math.floor(Math.random()*10);
    } else if(items.length<=100){
      random = Math.floor(Math.random()*100);
    } else if(items.length<=1000){
      random = Math.floor(Math.random()*1000);
    } else if(items.length>1000){
      random = Math.floor(Math.random()*10000);
    } 
    for (let i = 0; i < items.length; i++) {
      if(typeof(items[random]) == "undefined"){
        while(typeof(items[random]) == "undefined"){
          if (items.length<=10) {
            random = Math.floor(Math.random()*10);
          } else if(items.length<=100){
            random = Math.floor(Math.random()*100);
          } else if(items.length<=1000){
            random = Math.floor(Math.random()*1000);
          } else if(items.length>1000){
            random = Math.floor(Math.random()*10000);
          } 
        }
      } 
    }
    result.innerHTML = items[random];
    if(checkbox.checked){
      items.splice(random, 1);
      for (let i = 0; i < items.length; i++) {
        document.querySelector("#input").value = "";
        document.querySelector("#input").value += items;
      }
      if (items.length == 0) {
        document.querySelector("#input").value = "";
      }
      console.log(items)
    }
    items = items;
  }
  
}