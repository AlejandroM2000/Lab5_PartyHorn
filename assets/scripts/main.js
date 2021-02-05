const lvlThree = 67;
const lvlTwo = 34;
const lvlOne = 1;

let text = document.getElementById('volume-number');
let slider = document.getElementById('volume-slider');
var audioImg = document.getElementById('volume-image');
 
let airHorn = document.getElementById('radio-air-horn');
let carHorn = document.getElementById('radio-car-horn');
let partyHorn = document.getElementById('radio-party-horn');

let audio = document.getElementById('horn-sound');
let hornImg = document.getElementById('sound-image');


let inputText = document.querySelector('input');
let inputSlider = document.querySelector("input[name='volume-slider']");

inputSlider.addEventListener('input', updateValueSlider);
inputText.addEventListener('input', updateValueText);

airHorn.addEventListener('input', updateAir);
carHorn.addEventListener('input', updateCar);
partyHorn.addEventListener('input', updateParty);

let button = document.getElementById('honk-btn');
button.addEventListener('click', playAudio);

function enableDisable(){
    
}

function playAudio(e){
    audio.volume = parseInt(inputText.value)/100;
    audio.play();
    e.preventDefault();
}

function updateAir(e){
    if(e.target.value){
        hornImg.src = 'assets/media/images/air-horn.svg';
        audio.src = 'assets/media/audio/air-horn.mp3';
    }
}
function updateCar(e){
    if(e.target.value){
        hornImg.src = 'assets/media/images/car.svg';
        audio.src = 'assets/media/audio/car-horn.mp3';
    }
}

function updateParty(e){
    if(e.target.value){
        hornImg.src = 'assets/media/images/party-horn.svg';
        audio.src = 'assets/media/audio/party-horn.mp3';
    }
}


function updateValueSlider(e){
    text.value = e.target.value;
    if(parseInt(e.target.value) === 0) button.disabled = true;
    else button.disabled = false;
    if(e.target.value >= lvlThree){
        audioImg.src = 'assets/media/icons/volume-level-3.svg';
    } else if(e.target.value < lvlThree && e.target.value >= lvlTwo){
        audioImg.src = 'assets/media/icons/volume-level-2.svg';
    } else if(e.target.value < lvlTwo && e.target.value >= lvlOne){
        audioImg.src = 'assets/media/icons/volume-level-1.svg';
    } else {
        audioImg.src = 'assets/media/icons/volume-level-0.svg';
    }
}

function updateValueText(e){
    slider.value = e.target.value;
    if(parseInt(e.target.value) === 0) button.disabled = true;
    else button.disabled = false;
    if(e.target.value >= lvlThree){
        audioImg.src = 'assets/media/icons/volume-level-3.svg';
    } else if(e.target.value < lvlThree && e.target.value >= lvlTwo){
        audioImg.src = 'assets/media/icons/volume-level-2.svg';
    } else if(e.target.value < lvlTwo && e.target.value >= lvlOne){
        audioImg.src = 'assets/media/icons/volume-level-1.svg';
    } else {
        audioImg.src = 'assets/media/icons/volume-level-0.svg';
    }
}



    





