let left=document.querySelector("#left")
let right=document.querySelector("#right")
let slider=document.querySelector(".slider");
let image=document.querySelectorAll(".image")
let arrow=document.querySelector(".arrow")

let length=image.length
let sliderNo=1;

right.addEventListener("click",()=> {
    if(sliderNo<length) {
    slider.style.transform=`translateX(-${sliderNo*380}px)`
    sliderNo++;
    }
})

left.addEventListener("click",()=> {
   if(sliderNo>1) {
    slider.style.transform=`translateX(-${(sliderNo-2)*380}px)`
    sliderNo--
   }
})

arrow.addEventListener("click",()=> {
    window.open("https://www.flipkart.com/")
})


