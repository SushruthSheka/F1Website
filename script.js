let passcode = "sus";
let passcodeEntered ;
passcodeEntered = prompt("Enter passcode");
if (passcodeEntered == passcode){
    "You can view this website"
}
else{
    window.location="http://www.google.com"
}

console.log(marks)
let tester1 = 10;
let num3 = 20;
let main;
function myFunction(){
    dots = document.querySelector("#dots");
    moreText = document.querySelector("#more");
    btn = document.querySelector(".btn");

    if(dots.style.display === "none"){
          dots.style.display = "inline";
          moreText.style.display = "none";
          btn.innerHTML = "Read More";
    }else{
          dots.style.display = "none";
          moreText.style.display = "inline";
          btn.innerHTML = "Read Less";
    }
}
// -----------------------------------Second About Section---------------------------------------
function myFunction2(){
    dots = document.querySelector("#dots2");
    moreText = document.querySelector("#more2");
    btn2 = document.querySelector(".btn2");

    if(dots.style.display === "none"){
          dots.style.display = "inline";
          moreText.style.display = "none";
          btn2.innerHTML = "Read More";
    }else{
          dots.style.display = "none";
          moreText.style.display = "inline";
          btn2.innerHTML = "Read Less";
    }
}
function myFunction3(){
    dots = document.querySelector("#dots3");
    moreText = document.querySelector("#more3");
    btn3 = document.querySelector(".btn3");

    if(dots.style.display === "none"){
          dots.style.display = "inline";
          moreText.style.display = "none";
          btn3.innerHTML = "Read More";
    }else{
          dots.style.display = "none";
          moreText.style.display = "inline";
          btn3.innerHTML = "Read Less";
    }
}