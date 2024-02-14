//Model
const myInterval = setInterval(startTimer, 3000);
let app = document.getElementById('app');
// let shnek = document.getElementById('shnek');
// let timer;
let shnekPic = 'img/snek_standard.png'
let hunger = 0;
let happy = 0;
let hygiene = 0;

//View
updateView();
function updateView() {
    app.innerHTML = /*html*/`
        <div class="container">
            <div class="innerContainer"> 
                <div id="shnek"><img src="${shnekPic}" alt="shnek"></div>
                <div>
                    <div class="bars" style="width: ${getWidth()}; background-color: ${getHunger()}">hunger: ${hunger} </div>
                    <div class="bars" style="width: ${getWidthPlay()}; background-color: ${getPlay()}">happy: ${happy} </div>
                    <div class="bars" style="width: ${washWidth()}; background-color: ${washColor()}">wash: ${hygiene} </div>
                </div>
            </div>
            <div class="buttons">
                <button onclick="feed()" >Feed</button>
                <button onclick="play()" >Play</button>
                <button onclick="wash()" >Wash</button>
            </div>
            <button id="music">Music</button>
                    
            <div id="notifications">
                hunger: ${hunger}/5
                happy: ${happy}/5
                hygiene: ${hygiene}/5
            </div>
            
                
            
        </div>


    `;
}

//Controller

function getWidth() {
    if (hunger >= 0) {
        return hunger + 'rem';
    }
}

function getHunger() {
    if (hunger >= 0) {
        return 'red';
    }
}

function getPlay() {
    if (happy >= 0) {
        return 'blue';
    }

}

function getWidthPlay() {
    if (happy >= 0) {
        return happy + 'rem';
    }
}

function washColor() {
    if (hygiene >= 0) {
        return 'green';
    }
}


function washWidth() {
    if (hygiene >= 0) {
        return hygiene + 'rem';
    }
}
function feed() {
    hunger = Math.max(0, hunger - 1);
    updatePet()
}

function play() {
    happy = Math.max(0, happy - 1);
    updatePet()
}

function wash() {
    hygiene = Math.max(0, hygiene - 1);
    updatePet()
}

function updatePet() {
    const petElement = document.getElementById('shnek');
    if (hunger >= 5 || happy >= 5 || hygiene >= 5) {
        shnekPic = 'img/snek_on_the_go.png';
        clearInterval(myInterval)
        alert("Your pet left to get milk.");
    }
    else if (hunger >= 3 || happy >= 3 || hygiene >= 3) {
        shnekPic = 'img/snek_hungry.png';
    } 
    else {
    shnekPic = 'img/snek_standard.png';
    }
    updateView();
}


function startTimer() {
    hunger += 1;
    happy += 1;
    hygiene += 1;
    updatePet()
}



const audio = new Audio("tune/snek_tune.mp3");
const button = document.querySelector("music");

music.addEventListener('click', () => {
    audio.play();
    
})
audio.volume = 0.2;
audio.loop = true;

