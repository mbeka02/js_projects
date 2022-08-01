document.addEventListener("click", e=> {
    const isDropdown=e.target.matches("[data-dropdown-button]")

    if( !isDropdown && e.target.closest("[data-dropdown]")!=null) return


    let currentDropdown
    if(isDropdown)
    {
        currentDropdown=e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active')

    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown ===currentDropdown) return
        dropdown.classList.remove('active')
    })
   /*
    const img=document.querySelector(".image")
    
    const visibility= img.getAttribute("data-visible")
   
    if(visibility==="true" ){
        img.setAttribute("data-visible",false)
       
    }
    else 
    {
    img.setAttribute("data-visible",true)
    
    }*/
  
  
})

