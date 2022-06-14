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
    0, 1, 2, 3,
    4,5, 6, 7, 
    8,9, 10, 11,
    12,13, 14, 15,
    16,17, 18, 19,
    20,21, 22, 23,
    24, 25, 26, 26
]

let country = [
    "Австрия", "Андорра", "Бельгия", "Болгария",
    "Босния",  "Герцеговина", "Британия", "Венгрия",
    "Германия", "Дания", "Испания", "Италия", "Кипр",
    "Литва", "Мальта", "Молдова", "Монако", "Нидерланды",
    "Норвегия", "Польша", "Румыния", "Финляндия", "Франция",
    "Хорватия", "Чехия", "Швейцария", "Швеция"
]

let imagesRandom = [];
imagesRandom = images.sort(()=>Math.random()-0.5);
console.log(imagesRandom);






let cardsField = document.querySelector("#flag");
    
for(let i = 0; i < 4; i++){
    
    let li = document.createElement("li");
    li.id = i;
    cardsField.appendChild(li);

    li.style.background = "url(images/flags/" + imagesRandom[i] + ".jpg) no-repeat";
    
    // удаляем из массива выведенные на экран флаги 
    /*for(let j=0; j<images.length; j++){
        if(imagesRandom[i] == images[j]) {
            images.splice(j,1);
        }

    }*/
    
}

// блок ответов - список стран
let choosedCountry = [];
let choosedCountryRandom = [];
let answer = document.querySelector(".answer");
for(var i=0; i < 4; i++){
    
    choosedCountry[i] = country[imagesRandom[i]];
}
console.log(choosedCountry);
shuffle(choosedCountry);
console.log(choosedCountry);

for(var i=0; i < 4; i++){
    let divAnswer = document.createElement("div");
    divAnswer.className = "ans" + i;
    answer.appendChild(divAnswer);
    divAnswer.innerText = choosedCountry[i];

}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
