const clientname=document.getElementById("name")
const cardnumber=document.getElementById("cardnumber")
const month=document.getElementById("month")
const year=document.getElementById("year")
const cvc=document.getElementById("CVC")
const form=document.getElementById("form")
const frontname=document.querySelector(".front-name")
const frontnumber=document.querySelector(".front-number")
const expirydate=document.querySelector(".date")
const error=document.getElementById("error")
const container=document.querySelector(".container")
let isValid=true;




form.addEventListener("submit", (e)=>{
   

       /*Prevents form submission incase of an error*/
       validation();
       console.log(isValid)
       if(isValid===false)
       {
        e.preventDefault();
        return
       }
       else if(isValid===true){
       
         rendercomplete()
        console.log("true")
       }
       
    
        
    
       

})

function rendercomplete(){
    
     //Renders your details on the card
     frontname.innerHTML=clientname.value
     frontnumber.innerHTML=cardnumber.value
     expirydate.innerHTML=`${month.value}/${year.value}`
 
     return container.innerHTML=`
     <div class="complete-state">
     <img src="./images/icon-complete.svg"alt="complete"class="icon">
     <h1 class="confirm">Thank you!</h1>
     <p class="confirm-text"> We've added your card details</p>
     <button class="confirm-btn">Continue</button>
     </div>
     `
    }


//Sets the error and highlights the specific field(s)
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
   
    
    
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    isValid=false
    }
    
        
        
    
   
    
    

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
     isValid=true
   
      
   
}

//Validates inputs
function validation(){
   if(clientname.value===''||null){
    setError(clientname,"Can't be blank")
   }
   else{
    setSuccess(clientname)
   
   }
   if(cardnumber.value===''||null){
    setError(cardnumber,"Can't be blank")
   }
   else{
    setSuccess(cardnumber)
 
   }

   if(month.value===''||null){
    setError(month,"Can't be blank")
   }
   else{
    setSuccess(month)

   }

   if(year.value===''||null){
    setError(year,"Can't be blank")
   }
   else{
    setSuccess(year)
   
   }
   if(cvc.value===''||null){
    setError(cvc,"Can't be blank")
   }
   else{
    setSuccess(cvc)
   
   }

}


   
