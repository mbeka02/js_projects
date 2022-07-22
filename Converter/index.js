/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl=document.getElementById("input-el")
const buttonEl=document.getElementById("convert-el")
const lengthEl=document.getElementById("length-el")
const volumeEl=document.getElementById("volume-el")
const massEl=document.getElementById("mass-el")




buttonEl.addEventListener("click",function(){
{  
  lengthEl.innerHTML=`${inputEl.value} metres=${(inputEl.value*3.281).toFixed(3)} feet|${inputEl.value} feet=${(inputEl.value/3.281).toFixed(3)} metres`
  
  volumeEl.innerHTML=`${inputEl.value} liters=${(inputEl.value*0.264).toFixed(3)} gallons|${inputEl.value} gallons=${(inputEl.value/0.264).toFixed(3)} liters`
  
  massEl.innerHTML=`${inputEl.value} kilos=${(inputEl.value*2.204).toFixed(3)} pounds|${inputEl.value} pounds=${(inputEl.value/2.204).toFixed(3)} kilos` 
  }
  
    
    
    
    
    
    
})
    
