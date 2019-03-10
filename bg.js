const body = document.querySelector("body");

const IMAGE_NUMBER = 5;

function paintImage(number){
    const image = new Image();
    image.src = `img/${number}.jpg`;
    image.classList.add('bgImg');
    body.prepend(image);
}

function generateRandom(){
    const number = parseInt(Math.random() * IMAGE_NUMBER) + 1;
    return number;
}

function init(){
    const randNum = generateRandom();
    paintImage(randNum);
}

init();