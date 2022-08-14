const pictures=document.querySelectorAll(".product-picture")
 previewBox=document.querySelector(".preview-box")
  previewImg=previewBox.querySelector("img")
 closeIcon=previewBox.querySelector(".icon")
 currentImg = previewBox.querySelector(".current-img")
  totalImg = previewBox.querySelector(".total-img")
 shadow=document.querySelector(".shadow")
 const aria=document.querySelector("[aria-expanded]")

 /*
 window.addEventListener('DOMContentLoaded',()=>{
   
 
  })*/

window.onload=()=>{

     /*(Work in progress) loads first tab when the page loads*/
     const fall=document.getElementById("fall")
     fall.removeAttribute("hidden")
   
   /*Displays total number of images in the gallery*/
    for(let i=0;i<pictures.length;i++){
        totalImg.innerHTML=pictures.length

    let newIndex=i
    let clickedImg
     pictures[i].onclick=()=>{
         clickedImg=i
         function preview(){
            currentImg.textContent=newIndex+1
            let imgURL=pictures[newIndex].querySelector("img").src
            previewImg.src=imgURL

         }
        /*Function call*/
        preview()
        const prevbtn=document.querySelector(".prev")
        const nextbtn=document.querySelector(".next")

        if (newIndex==0){
            prevbtn.style.display="none"
        }

        else if(newIndex>=pictures.length-1){
            nextbtn.style.display="none"
        }

        prevbtn.addEventListener("click",()=>{
            newIndex--
            if(newIndex==0){
                preview()
                prevbtn.style.display="none"
            }
            else{
                preview()
                nextbtn.style.display="block"
            }
        })

        nextbtn.onclick=()=>{
            newIndex++
            if(newIndex>=pictures.length-1){
                preview()
                nextbtn.style.display="none"
            }
            else{
                preview()
                prevbtn.style.display="block"
            }
        }
        previewBox.classList.add("show")
        shadow.style.display="block"
        
       



        closeIcon.onclick=()=>{
            newIndex=clickedImg
            prevbtn.style.display="block"
            nextbtn.style.display="block"
            previewBox.classList.remove("show")
            shadow.style.display="none"
           document.querySelector("body").style.overflow="scroll"
           
            
        }
     }
      


    }

}