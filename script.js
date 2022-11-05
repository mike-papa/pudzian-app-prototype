

/// pop up
function toggle () {
    var popup = document.getElementById('popup');
            popup.classList.toggle('active')
}
function toggleOff () {
    var popup = document.getElementById('popup');
    popup.classList.remove('active')

}


let playPositive1 = document.getElementById("photoshop"); // dodac id buttonow
let playPositive2 = document.getElementById("anki");
let playPositive3 = document.getElementById("vsc");

let playNegative1 = document.getElementById("youtube"); // dodac id buttonow
let playNegative2 = document.getElementById("facebook");
//let playNegative3 = document.getElementById();



// Pudzilla
let showPudzian = document.getElementById("pudzian");

const mapNegative = new Map();
mapNegative.set(1,2050);
mapNegative.set(2,4050);
mapNegative.set(3,3050);
mapNegative.set(4,4050);
mapNegative.set(5,5050);
mapNegative.set(6,4050);
mapNegative.set(7,5050);
mapNegative.set(8,2050);

const mapPositive = new Map();
mapPositive.set(1,12050);
mapPositive.set(2,6050);
mapPositive.set(3,4050);
mapPositive.set(4,4050);
mapPositive.set(5,3050);
mapPositive.set(6,3050);
mapPositive.set(7,3050);
mapPositive.set(8,3050);
mapPositive.set(9,4050);
mapPositive.set(10,4050);
mapPositive.set(11,3050);
mapPositive.set(12,6050);



// positive 1-3
// negative 4-6
let rockCounter = 0;

function hidePudzian(){
  showPudzian.style.display="none";
}
function playPositive(){
  let number = Math.floor((Math.random() * 12) + 1);
  number.toString();
  let audio = new Audio("p_"+number.toString()+".mp3"); // dodac sciezke dzwieku
  showPudzian.style.display="block";
  setTimeout(hidePudzian,mapPositive.get(number));
//   toggleOff();
setTimeout(toggleOff,mapPositive.get(number));

  audio.play();
  if(rockCounter >= 0 && rockCounter <= 9){
    rockCounter = rockCounter + 1;
  }
  if (rockCounter == 10){
    let winningAudio = new Audio () // Zasluzone piwo
    winningAudio.play();
  }
}


function playNegative(){
  let number = Math.floor((Math.random() * 8) + 1);
  let audio = new Audio("n_"+number.toString()+".mp3");
  showPudzian.style.display="block";
  setTimeout(hidePudzian,mapNegative.get(number));
  //
  setTimeout(toggleOff,mapNegative.get(number));
  audio.play();
  if(rockCounter >= 1 && rockCounter <= 9){
    rockCounter = rockCounter - 1;
  }
}


playPositive1.addEventListener("click",playPositive);
playPositive2.addEventListener("click",playPositive);
playPositive3.addEventListener("click",playPositive);

playNegative1.addEventListener("click",playNegative);
playNegative2.addEventListener("click",playNegative);
//playNegative3.addEventListener("click",playNegative);