const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(){
    event.preventDefault();
    const currentInput = input.value;
    saveName(currentInput);
    loadName();
    // paintGreeting(currentInput);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    // console.log(form.classList);
    form.classList.remove(SHOWING_CN);
    // console.log(form.classList);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
        // console.log(form.classList);
    } else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();