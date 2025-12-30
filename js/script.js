const menuBtn=document.querySelector(".menu-btn");

const navItem=document.querySelector(".nav-items");
menuBtn.addEventListener("click",function(){
    navItem.classList.toggle("show");
    if(navItem.classList.contains('show')){
        menuBtn.src="./icon/cross.svg" 
    }else{
         menuBtn.src="./icon/menu.svg" 
    }
})