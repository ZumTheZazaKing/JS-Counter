let countNumber = document.getElementById("number");

let number = 0;

countNumber.innerText = number;

function addCount(){
    number++;
    countNumber.innerText = number;
}

function lowerCount(){
    number--;
    countNumber.innerText = number;
}

