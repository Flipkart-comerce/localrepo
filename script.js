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

let pord=document.querySelectorAll(".pord")
let all=document.querySelector("all")


pord,addEventListener("click",()=> {
    window.open( "https://www.flipkart.com/ebiz-dry-fruits-premium-cashews-250g-almond-250g-kaju-badam-combo-pack-2-x-250g/p/itm484e8a056f1db?pid=FMCGFNC9GBAZKCPP&lid=LSTFMCGFNC9GBAZKCPPLDHXMS&marketplace=FLIPKART&fm=productRecommendation%2FcrossSelling&iid=R%3Ac%3Bp%3ANDFGUXQDEPD4K2AY%3Bl%3ALSTNDFGUXQDEPD4K2AYIKIH0J%3Bpt%3App%3Buid%3A47e34175-180a-11ef-bfef-bf6131019087%3B.EDSGBQM5UCHZ8A4H&ppt=pp&ppn=pp&ssid=j6msoev95s0000001716361784920&otracker=pp_reco_Bought%2BTogether_19_37.productCard.PMU_TAB_eBiz%2Bdry%2Bfruits%2BPremium%2BCashews%2B250g%252C%2BAlmond%2B250g%2BKaju%2BBadam%2BCombo%2Bpack%2B%25282%2Bx%2B250g%2529%2BCombo_EDSGBQM5UCHZ8A4H_productRecommendation%2FcrossSelling_0&otracker1=pp_reco_PINNED_productRecommendation%2FcrossSelling_Bought%2BTogether_GRID_productCard_cc_19_NA_view-all&cid=EDSGBQM5UCHZ8A4H")

})
all.addEventListener("click",()=> {
    window.open("https://www.flipkart.com/41-foods-dry-fruits-combo-pack-cashews-almonds-badam-kaju-500x2-1-kg-almonds/p/itm09e83d5314c08/specifications?pid=NDFGDYB5NYZDNKNN&marketplace=FLIPKART&lid=LSTNDFGDYB5NYZDNKNN4JJYAJ")
    
})