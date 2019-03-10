// const title = document.getElementById("title");
const title = document.querySelector("#title");

console.dir(title);
console.log(title);

title.innerHTML = "Hello, from JS";
title.innerText = "Hello, from JS";

const BASE_COLOR = 'gold';
const OTHER_COLOR = 'silver';

function resizeHandler(event){
    console.log(event)
    // console.log("I have benn resized");
}

function clickHandler(evnet){
    const currentColor = title.style.color;

    if (currentColor === BASE_COLOR)
    {
        title.style.color = OTHER_COLOR;
    }
    else
    {
        title.style.color = BASE_COLOR;
    }
}

function offlineHandler(){
    console.log("Bye Bye");
}

function onlineHandler(){
    console.log("Welcome Back");
}


function init(){
    title.style.color = BASE_COLOR;
    
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("offline", offlineHandler);
    window.addEventListener("online", onlineHandler);
    // title.addEventListener("click", clickHandler);
    title.addEventListener("mouseenter", clickHandler);
}

init();

