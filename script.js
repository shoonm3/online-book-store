let signup=document.querySelector(".signup");
let login=document.querySelector(".login");
let slider=document.querySelector(".slider");
let formsection=document.querySelector(".form-section");

signup && signup.addEventListener("click",()=>{
    slider.classList.add("moveslider");
    formsection.classList.add("form-section-move");
})

login && login.addEventListener("click",()=>{
    slider.classList.remove("moveslider");
    formsection.classList.remove("form-section-move");
})

// var dropdown = document.querySelector(".login-logo");
// var loginForm = document.querySelector(".container");
// dropdown.addEventListener("click",display=()=>{
// if(loginForm.style.display==='none'){
//          loginForm.style.display='block';
//      }else{
//          loginForm.style.display='none';
//     }
//  }) 


//var dropDown = document.querySelector(".hbg-bar");
// var usrInfo = document.querySelector(".bodyLeft");
// dropDown.addEventListener("click",display=()=>{
//     if(usrInfo.style.display==='block'){
//         usrInfo.style.display='none';
//     }else{
//         usrInfo.style.display='none';
//     }
// })


let subMenu=document.querySelector(".sub-menu-wrap");
let usrImg=document.querySelector(".userImg");
usrImg && usrImg.addEventListener("click",display=()=>{
    if(subMenu.style.display==='none'){
        subMenu.style.display='block';
    }else{
        subMenu.style.display='none';
    }
})
display();