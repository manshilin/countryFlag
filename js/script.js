// Событие "нажатие на иконку звука" 
let audioPlayer = document.querySelector("audio");
let sound = "off"; // "on"
let soundButton = document.querySelector("#sound img");
soundButton.onclick = function() {
    
    if(sound == "off") {
        soundButton.src = "images/sound_on black.png";
        sound = "on";
        audioPlayer.play();       
    }
    else{
        soundButton.src = "images/mute_sound_black.gif";
        sound = "off";
        audioPlayer.pause();
    }    
}
