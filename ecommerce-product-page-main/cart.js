
const container=document.getElementById("container")
/*Initializes the cart with the items already in localStorage or as an empty array*/

let cart=JSON.parse(localStorage.getItem("products")) || []


/*Product information*/

let purchase_info=[{
     Name:"Fall Limited edition sneakers",
     price:125,
     
    id:"fall",
    desc:`These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    img:"./images/image-product-1-thumbnail.jpg"
},
{
Name:"Stylish men sneakers",
price:125,
 id:"stylish",
 desc: `These Casual Lightweight Men’s Sneakers are suitable to be worn during outdoor events.  
        The shoes a made of rubber sole and canvas knit upper surface.`,
  img:"./images/image-product-2-thumbnail.jpg"
},

{
  Name:"Rock climbing shoes",
  price:125,
   id:"rock",
   desc: `These  sneakers are durable and slip resistant  high quality materials for long lasting life
      and the anti-slip synthetic sole offer balance and stability, let you feel safe and confident no matter the task.`,
   img:"./images/image-product-3-thumbnail.jpg"
      
  },

  {
    Name:"Athletic sneakers",
    price:125,
     id:"athletic",
     desc: ` The upper material of this trail running  shoes are mesh-designed,
      the space between mesh fibers forms an air passage for excellent air permeability, 
      allowing comfort and dryness during exercise.`,
     img:"./images/image-product-4-thumbnail.jpg"
     
    },
]




/*Mapping function for all the products tabs in the container*/
let products=()=>{

 return( container.innerHTML=purchase_info.map((x)=> {
  let {Name,price,desc,id}=x
  let search=cart.find((x)=>x.id===id)||[]
  return `<div hidden id="${id}"tabindex="0" role="tabpanel" >
  
      <div class="content">
     <p class=" uppercase company-header" style="font-weight:700;">Sneaker Company</p>
     
      <h2 class="title">${Name}</h2>
      
      <p class="desc">${desc}</p>
       <div class="offer">
       <p class="discount-price">$${price} <span class="discount">50%</span></p>
       <p class="original-price">$250.00</p>
       </div>
        
      </div>
      <div class="product-buttons">
      <div class="quantity">
       <button class="button decrement-btn" onclick="sub(${id})"><img src="./images/icon-minus.svg"></button>
       <span id="qty${id}" class="qty">${search.item=== undefined ? 0:search.item }</span>
       <button class="button increment-btn" onclick="add(${id})"><img src="./images/icon-plus.svg"></button>
       </div>
       <button class="txt-white  cart-btn"><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>Add to cart</button>
       </div>
        
         </div>
        
   `
 }).join(""));

};

products()

/*Makes sure checkout is re-rendered when the page re-loads*/

  

  
   /*Increment function*/
  function add(id){
  let product=id
  /*Search function for an already existing item,if it exists add it to the tally of the individual 
  item else it's a new item with a new id*/
  let search=cart.find((x)=>x.id===product.id)

  if(search=== undefined){
    cart.push({
    id: product.id,
    item:1,
  })
  

}

  else  {
     search.item++
  }/*Saves items in local storage*/
  localStorage.setItem("products",JSON.stringify(cart))
  update(product.id)
  generateCheckout()
  }

  function sub(id){
    let product=id
    let search=cart.find((x)=>x.id===product.id)

  if(search.item === 0) return;
  else{
    search.item--
  }
 
  /*Selects objects with non-zero items only*/
  update(product.id)
  cart=cart.filter((x)=>x.item !==0)
  localStorage.setItem("products",JSON.stringify(cart))
  generateCheckout()
 
}

  /*An update function for the quantity of products selected*/ 
function update(id){
  let search=cart.find((x)=>x.id===id)
  let qty=document.getElementById(`qty${id}`)
  
  qty.innerHTML=search.item
  calculate()
 
}
/*Adds up all the selcted products and displays the number on the cart icon*/
function calculate(){
  let amount=document.getElementById("cartAmount")
  amount.innerHTML=cart.map((x)=> x.item).reduce((x,y)=>x+y,0)

}
/*Invoking the function so that the amount renders when the page re-loads*/
calculate();



/*Checkout menu*/

let generateCheckout=()=>{
 const checkout=document.getElementById("checkout")
  if(cart.length !==0)
  {  /*Place holder*/
 return(checkout.innerHTML=cart.map((x)=>{
  let {id,item,img}=x
  let search=purchase_info.find((y)=>y.id === id) || []
  return `
  <div class="product-info sans">
  <div class="product-container">
  
  <img class="thumbnail" src=${search.img}>
  <div class="p-text">
   <p>${search.Name}</p>
   <p>$${search.price}X${item}<span class="bill">$${(search.price*item).toFixed(2)}</span></p>
   </div>
   </div>
   </div>
   <picture class="delete">
   <img onclick="removeitem(${id})" src="./images/icon-delete.svg">
   </picture>
   
   
   
  `
 }).join(""))
  }

  else{
   checkout.innerHTML=`
   <p class="empty">Your cart is empty</p>`

  }
}
/*Runs during re-load*/
generateCheckout()




let removeitem=(id)=>{
  let selecteditem=id;
  cart=cart.filter((z)=>z.id !==selecteditem.id)
  localStorage.setItem("products",JSON.stringify(cart))
  generateCheckout()
  calculate()
  

}