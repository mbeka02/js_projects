/*Stores the URL of the advice API in a variable*/
let URL="https://api.adviceslip.com/advice"

const content=document.getElementById("content")
const adviceEl=document.getElementById("adviceID")
const btn=document.getElementById("btn")

/*Fetches URL to get the slip object then stores it in variable. */
function request(){
  fetch(URL).then(response => {
    return response.json()
 }).then(advicequote => {
   const advicetext=advicequote.slip
  
   /*Renders the slip-id as well as the text(advice)*/
   adviceEl.innerHTML=`# advice ${advicetext.id}`
   content.innerHTML=`<p>${advicetext.advice}</p>`
   })

}


btn.addEventListener("click",()=>{
    request();
})

/*Calls function after loading*/
document.body.onload=request