


let count=0;
//camelCase
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

function increment()
{
    count++
    countEl.textContent=count
}

function save()
{
  
    let res=count+"-"
    saveEl.textContent+=res
    countEl.textContent=0
    count=0
    
}
 