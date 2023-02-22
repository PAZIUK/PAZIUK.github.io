function magic(){
 let n = document.querySelectorAll(`div.tasks-numbers#tasks-numbers span.number`).length
 for(let i=0;i<n;i++){
   let value = Math.ceil(Math.random() * 10)
   let number = i+1
   if(value>1){
      document.querySelector(`span.q${number}.number`).className = `q${number} number super`
    } else {
      document.querySelector(`span.q${number}.number`).className = `q${number} number bad`
    }
 }
  
  let num = document.querySelectorAll(`span.number.super`).length * 2;
  let rtime;
  if(num>60){
   let hours = (num / 60);
   let rhours = Math.floor(hours);
   let minutes = (hours - rhours) * 60;
   let rminutes = Math.round(minutes);
   if(String(rminutes).length==1){
     rminutes = "0" + rminutes
   }
   rtime = rhours + " год. " + rminutes + " хв.";
  } else {
   rtime = num + " хв.";
  }
 
  let percents = Math.ceil(document.querySelectorAll(`span.number.super`).length / (n/100))
 
  let blocksResult = document.querySelectorAll(".blue-block-test-results div")
  blocksResult[1].querySelector("strong").textContent = Math.floor(+blocksResult[0].querySelector("strong").textContent * (percents/100))
  blocksResult[2].querySelector("strong").textContent = percents+"%"
  blocksResult[3].querySelector("strong").textContent = rtime
  return false
}
