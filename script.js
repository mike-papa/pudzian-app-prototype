

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
let showKufel = document.getElementById("kufel");
let showPudzianWin = document.getElementById("pudzian_win");
function showPudzianWinner(){
  showPudzianWin.style.display = "block";
}

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
let  kamien = document.getElementById("kamien")

function updateRock (rockCounter){
    let stringRockCounter = rockCounter.toString()
    kamien.src = "images/kamien"+stringRockCounter+".gif";
}
let rockCounter = 5;
updateRock(rockCounter);

function hidePudzian(){
  showPudzian.style.display="none";
}

function playPositive(){
  let number = Math.floor((Math.random() * 12) + 1);
  while(number == 9){
    number = Math.floor((Math.random() * 12) + 1);
  } 
  number.toString();
  let audio = new Audio("p_"+number.toString()+".mp3"); // dodac sciezke dzwieku
  showPudzian.style.display="block";
//   toggleOff();
setTimeout(toggleOff,mapPositive.get(number));

  if(rockCounter >= 0 && rockCounter <= 9){
    rockCounter = rockCounter + 1;
  }
  updateRock(rockCounter);
  if (rockCounter < 10){
    setTimeout(hidePudzian,mapPositive.get(number));
    audio.play();
  }

  if (rockCounter == 10){
    let winningAudio = new Audio ("browarek.mp3") // Zasluzone piwo
    showKufel.style.display="block";
    //showPudzian.src = "images/pudzian_0.png";
    showPudzian.style.display = "block"; 
    winningAudio.play();
    setTimeout(hidePudzian,6050);
    setTimeout(showPudzianWinner,6051);

  }

}


function playNegative(){
  let number = Math.floor((Math.random() * 8) + 1);
  while (number == 6){
    number = Math.floor((Math.random() * 8) + 1);
  }
  let audio = new Audio("n_"+number.toString()+".mp3");
  showPudzian.style.display="block";
  //
  setTimeout(toggleOff,mapNegative.get(number));

  if(rockCounter >= 1 && rockCounter <= 9){
    rockCounter = rockCounter - 1;
  }
  updateRock(rockCounter);
  if(rockCounter > 0){
    setTimeout(hidePudzian,mapNegative.get(number));
    audio.play();
  }
   if(rockCounter == 0){
    let losingAudio = new Audio ("menel.mp3");
    setTimeout(hidePudzian,6050);
    losingAudio.play();
   }
}


playPositive1.addEventListener("click",playPositive);
playPositive2.addEventListener("click",playPositive);
playPositive3.addEventListener("click",playPositive);

playNegative1.addEventListener("click",playNegative);
playNegative2.addEventListener("click",playNegative);
//playNegative3.addEventListener("click",playNegative);

