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
/* вывод 4 случайных флага на экран*/
/*вношу картинки в массив 
function getImages(n){
    for( var imgFlag, array = [], i = 1; i <= n; i++ ){
        imgFlag = new Array();
        imgFlag.src = "/images/flags/" + i + ".jpg";
        array.push( imgFlag );
    };
          return array;
};

let imgFlag = getImages(11);*/

//добавляю картинки с флагами  в игровое поле


let images = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11 

]

let imagesRandom = [];
imagesRandom = images.sort(()=>Math.random()-0.5);



let cardsField = document.querySelector("#flag");
    
for(let i = 0; i < 4; i++){
    
    let li = document.createElement("li");
    li.id = i;
    cardsField.appendChild(li);

    li.style.background = "url(images/flags/" + imagesRandom[i] + ".jpg) no-repeat";
       
    
    
}