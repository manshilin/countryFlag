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
    "Испания", "Хорватия", "Дания", "Финляндия",
    "Бельгия",  "Швейцария", "Британия", "Польша",
    "Германия", "Италия", "Швеция", "Франция", "Нидерланды",
    "Австрия", "Норвегия", "Чехия", "Румыния", "Венгрия",
    "Молдова", "Мальта", "Болгария", "Литва", "Кипр",
    "Эстония", "Монако", "Босния", "Андора"
]
// массив перемешанных случайным образом номеров картинок
let imagesRandom = [];
imagesRandom = images.sort(()=>Math.random()-0.5);
console.log(imagesRandom);

//Выводим 4 случайных флага на экран
let cardsField = document.querySelector("#flag");
    
for(let i = 0; i < 4; i++){
    
    let li = document.createElement("li");
    li.id = "flag" + i;
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

// Создаем блок выводящий 4 варианта названия страны 
let answer = document.querySelector(".answer");
// записываем страны флаги которых вывели на экран
for(var i=0; i < 4; i++){
    
    choosedCountry[i] = country[imagesRandom[i]];
}


console.log(choosedCountry);
// перемещываем случайным образом названия стран, флаги которых выведены на экран 
shuffle(choosedCountry);
console.log(choosedCountry);

// создаем четыре div со случайными названиями стран, выведенных флагов
for(var i=0; i < 4; i++){
    let divAnswer = document.createElement("div");
    divAnswer.className = "ans" + i;
    answer.appendChild(divAnswer);
    divAnswer.innerText = choosedCountry[i];

}
// функция перемешивания элементов массива случайным образом
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

  let ans0 = document.querySelector(".ans0");
  let ans1 = document.querySelector(".ans1");
  let ans2 = document.querySelector(".ans2");
  let ans3 = document.querySelector(".ans3");

  ans0.onclick = function(){
    ansCountry = ans0.innerText;
    console.log(ansCountry);
  }

  ans1.onclick = function(){
    ansCountry = ans1.innerText;
    console.log(ansCountry);
  }

  ans2.onclick = function(){
    ansCountry = ans2.innerText;
    console.log(ansCountry);
  }

  ans3.onclick = function(){
    ansCountry = ans3.innerText;
    console.log(ansCountry);
  }

  let flag0 = document.querySelector("#flag0");
  let flag1 = document.querySelector("#flag1");
  let flag2 = document.querySelector("#flag2");
  let flag3 = document.querySelector("#flag3");

  flag0.onclick = function(){
    console.log(ansCountry);
    console.log(imagesRandom);

    if(ansCountry == country[imagesRandom[0]]) {
        alert('You win');
    }
    else {
        alert("You are looser")
    }
    
  }

  flag1.onclick = function(){
    console.log(ansCountry);
    console.log(imagesRandom);

    if(ansCountry == country[imagesRandom[1]]) {
        alert('You win');
    }
    else {
        alert("You are looser")
    }
    
  }

  flag2.onclick = function(){
    console.log(ansCountry);
    console.log(imagesRandom);

    if(ansCountry == country[imagesRandom[2]]) {
        alert('You win');
    }
    else {
        alert("You are looser")
    }
    
  }

  flag3.onclick = function(){
    console.log(ansCountry);
    console.log(imagesRandom);

    if(ansCountry == country[imagesRandom[3]]) {
        alert('You win');
    }
    else {
        alert("You are looser")
    }
    
  }

let startBtn = document.querySelector("#startBtn");
let gameField = document.querySelector(".game_field");
let startBlock = document.querySelector("#startBlock");
startBtn.onclick = function (){
    startBlock.style.display = "none";
    gameField.style.display = "block";
}