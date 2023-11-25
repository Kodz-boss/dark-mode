var button = document.querySelector(".in");
var links = document.querySelectorAll(".links");
var navv = document.querySelector("nav");
var body = document.querySelector("body");
var lor = document.querySelector(".lor");
var li = document.querySelector(".li");
var inn = document.querySelector(".in");
var out = document.querySelector(".out");
var co = document.querySelector(".co")
button.addEventListener("click", () => {
    button.classList.toggle("active")
    // var input = prompt("What color mode do you want?");
    // document.body.style.backgroundColor = input;
    // input = "";

    //for dark mode
    if(button.classList.contains("active")){
        li.innerHTML = "dark";
        links.forEach((changeColor) =>{
            changeColor.style.color = "white";
        })

        navv.style.backgroundColor ="grey";
        navv.style.color ="white"
        body.style.backgroundColor ="black";
        lor.style.color = "white";
        inn.style.backgroundColor ="white";
        out.style.backgroundColor ="black";
    }
    else{
        li.innerHTML ="light";
        links.forEach((changeColor) =>{
            changeColor.style.color = "black";
        })

        navv.style.backgroundColor ="white";
        navv.style.color ="black";
        body.style.backgroundColor ="white";
        lor.style.color ="black";
        inn.style.backgroundColor ="white";
        out.style.backgroundColor ="grey";
    }
})