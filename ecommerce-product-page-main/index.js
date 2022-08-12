/*Mobile navigation*/

const nav=document.querySelector(".primary-navigation")
const toggle=document.querySelector(".mobile-nav-toggle")

toggle.addEventListener("click", ()=>{
    const visibility=nav.getAttribute("data-visible")

    if(visibility==="false"){
        nav.setAttribute("data-visible" ,true)
        toggle.setAttribute("aria-expanded",true)
    }

    else{
        nav.setAttribute("data-visible" ,false)
        toggle.setAttribute("aria-expanded",false)
    }
})


/* Dropdown checkout menu*/

document.addEventListener("click",e=>{

    const isdropdown=e.target.matches("[data-dropdown-button]")

    if(!isdropdown && e.target.closest("[data-dropdown]")!=null) return

    let activedropdown

    if(isdropdown)
{
    activedropdown=e.target.closest("[data-dropdown]")
    activedropdown.classList.toggle('active')
}

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown=>{
     if(dropdown===activedropdown)return
     dropdown.classList.remove('active')
  })
})
/*Tabs system*/
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }
    
    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }
    
    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }
    
    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}


function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    
    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
        
    targetTab.setAttribute("aria-selected", true);
    
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);
    
    hideContent(mainContainer, 'picture');
    showContent(mainContainer, [`#${targetImage}`]);
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
     parent.querySelector(content).removeAttribute('hidden');
}

/*
const tabs=document.querySelectorAll('[data-tab-target]')
const images=document.querySelectorAll('[data-image]')
const tabcontents=document.querySelectorAll('[data-tab-content]')
const tabimages=document.querySelectorAll('[data-image]')


tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
     const target=document.querySelector(tab.dataset.tabTarget)
     tabcontents.forEach(tabcontent=>{ tabcontent.classList.remove('active')
    })
   target.classList.add('active')
    
 })
  

})
*/

/*WIP reference from: https://github.com/coding-in-public/fem-e-commerce-product-page/blob/main/index.html   */

//Slider
const btns = document.querySelectorAll('.btn');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slide = [...document.querySelectorAll('.slide')];
let currentIndex = 0; 

function moveSlider(dir){
 dir === 'next' ? currentIndex++ : currentIndex --;
  slider.style.transform = `translateX(-${103.3* currentIndex}%)`;
  switch (currentIndex){
    case 0: 
      document.querySelector('#prev').classList.add('hidden');
      break;
    case slide.length - 3:
      document.querySelector('#next').classList.add('hidden');
      break;
    default: 
      btns.forEach(b => b.classList.remove('hidden'));
    break;
  }
}

function handleBtnClick(e){
  e.currentTarget.id === "next" ? moveSlider('next') : moveSlider('prev');
  
}


btns.forEach(b => {
  b.addEventListener('click', handleBtnClick)
  

})