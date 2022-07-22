const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1El= document.getElementById("pass1-el")
let pass2El= document.getElementById("pass2-el")
let list1=""
let list2=""
let pressed=false//prevents generation of more than two passwords


function passwordgen()
{
 let i=0
 while(i<15 && pressed!=true ){ 
     
     list1= characters[Math.floor(Math.random()*characters.length)]//Randomly generates password
     list2= characters[Math.floor(Math.random()*characters.length)]
     //Rendering the passwords
    pass1El.textContent+=list1
    pass2El.textContent+=list2
     i++
     
     }
pressed=true
}
 