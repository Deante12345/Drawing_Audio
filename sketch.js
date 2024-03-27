
let redButton, orangeButton, yellowButton, greenButton,
lightBlueButton, blueButton, purpleButton, brownButton, whiteButton, blackButton;
let currentColor = 'black'; // Default color

let soundFx = new Tone.Players({
  magic: "Audios/Magic_sound.wav",
  Drum: "Audios/Drum.wav",
  Guitar: "Audios/Guitar.wav",
  Bass: "Audios/Bass.wav",
  Zip: "Audios/Zip.wav",
  Chickle: "Audios/Chickle.wav",
  Wooden: "Audios/Wooden.wav",
  water: "Audios/waterDrop.wav",


});

let slider;
let deylaySlider,fbSlider, distSlider;
let delAmt = new Tone.FeedbackDelay("6n", 0.3).toDestination();
let distAmt = new Tone.Distortion(0.5);

soundFx.connect(delAmt);
delAmt.connect(distAmt);
distAmt.toDestination();

function setup() {
  createCanvas(500, 500);
  background(211,211,211);
  strokeWeight(12);
   // Create red button
   redButton = createButton('');
   redButton.position(0,5);
   redButton.size(50,50);
   redButton.style('background-color', 'red');
   redButton.mousePressed(setRedColor);
   // Create orange button
   orangeButton = createButton('');
   orangeButton.position(0,50);
   orangeButton.size(50,50);
   orangeButton.mousePressed(setOrangeColor);
   orangeButton.style('background-color', 'Orange');
 // Create yellow button
   yellowButton = createButton('');
   yellowButton.position(0,100);
   yellowButton.size(50,50);
   yellowButton.mousePressed(setYellowColor);
   yellowButton.style('background-color', 'Yellow');
 //greenButton
   greenButton = createButton('');
   greenButton.position(0,150);
   greenButton.size(50,50);
   greenButton.mousePressed(setGreenColor);
   greenButton.style('background-color', 'green');
  
   lightBlueButton = createButton('');
   lightBlueButton.position(0,200);
   lightBlueButton.size(50,50);
   lightBlueButton.mousePressed(setlightBlueColor);
   lightBlueButton.style('background-color', color(100,200,300));
  
   blueButton = createButton('');
   blueButton.position(0,250);
   blueButton.size(50,50);
   blueButton.mousePressed(setBlueColor);
   blueButton.style('background-color', 'Blue');
  
   purpleButton = createButton('');
   purpleButton.position(0,300);
   purpleButton.size(50,50);
   purpleButton.mousePressed(setPurpleColor);
   purpleButton.style('background-color', 'purple');
  
   brownButton = createButton('');
   brownButton.position(0,350);
   brownButton.size(50,50);
   brownButton.mousePressed(setBrownColor);
   brownButton.style('background-color', color(119,66,21));
  
   whiteButton = createButton('');
   whiteButton.position(0,400);
   whiteButton.size(50,50);
   whiteButton.mousePressed(setWhiteColor);
   whiteButton.style('background-color', 'white');
  
   blackButton = createButton('');
   blackButton.position(0,450);
   blackButton.size(50,50);
   blackButton.mousePressed(setBlackColor);
   blackButton.style('background-color', 'black');
  
 
  //Sound buttons
 
  
}

function touchMoved() {
  stroke(currentColor);
  if(currentColor === 'red'){
  soundFx.player('Bass').start();
  }else if(currentColor === 'orange'){
    soundFx.player('Guitar').start();
  }else if(currentColor === 'yellow'){
    soundFx.player('Drum').start();
  }else if(currentColor === 'green'){
    soundFx.player('magic').start();
  }else if(currentColor === 'lightblue'){
    soundFx.player('zip').start();
  } else if(currentColor === 'blue'){
  soundFx.player('Chickle').start();
  }else if(currentColor === 'purple'){
    soundFx.player('Chickle').start();
   }else if(currentColor === 'brown'){
    soundFx.player('Guitar').start();
   }else if(currentColor === 'white'){
     soundFx.player('magic').start();
   }else if(currentColor === 'black'){
    soundFx.player('magic').start();
   }


  line(mouseX, mouseY, pmouseX, pmouseY);
  return false; // Prevent default
}
 
function setRedColor() {
  currentColor = 'red';
  
  
}
 
function setOrangeColor() {
  currentColor = 'orange';
}
 
function setYellowColor() {
  currentColor = 'yellow';
}
 
function setGreenColor() {
  currentColor = 'green';
}
function setlightBlueColor() {
  currentColor = color(100,200,300);
}
function setBlueColor() {
  currentColor = 'Blue';
}
 
function setPurpleColor(){
  currentColor = 'purple';
}
 
function setBrownColor(){
  currentColor = color(119,66,21);
}
 
function setWhiteColor(){
  currentColor = 'white';
}
 
function setBlackColor(){
  currentColor = 'black';
}