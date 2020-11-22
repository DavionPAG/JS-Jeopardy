'use strict';
//Global Variables

//Player Array for holding onto number of players
var playerArray = [];
var numberForm = document.getElementById('numForm'); // For pulling in form for the number of players
var players; //Global variable for storing number of players



// Selects amount of characters through event handler
// var playbutton = document.getElementById(* PLACEHOLDER *) // Placeholder for play button


// function PlayEvent(event) {
//   playerSubmission();
// } // This will pipeline players from the play button into the form for number of players

numberForm.addEventListener('submit', submitEvent);

function submitEvent(event) {
  event.preventDefault();
  parseInt(players = event.target.numberOfPlayers.value);
  determinePlayers();
} // This will pipline players from the number of players to the player names form. All the way through the the redirect to the game



// Function for selecting amount of players.
function playerSubmission() {



  var field = document.createElement('fieldset');

  var label = document.createElement('label');
  label.setAttribute('for', 'Number of Players');
  label.textContent = 'Select number of Players ';

  var select = document.createElement('select');
  select.setAttribute('id', 'playerselection');
  select.setAttribute('name', 'numberOfPlayers');
  select.setAttribute('type', 'number');

  var option1 = document.createElement('option');
  option1.setAttribute('value', '1');
  option1.textContent = '1';

  var option2 = document.createElement('option');
  option2.setAttribute('value', '2');
  option2.textContent = '2';

  var option3 = document.createElement('option');
  option3.setAttribute('value', '3');
  option3.textContent = '3';

  var option4 = document.createElement('option');
  option4.setAttribute('value', '4');
  option4.textContent = '4';

  var button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('value', 'submit');
  button.textContent = 'Submit';

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);

  label.appendChild(select);
  field.appendChild(label);
  numberForm.appendChild(field);
  numberForm.appendChild(button);


}

// playersubmit.addEventListener('submit', SubmitEvent);

function determinePlayers() {

  for (var i = 0; i < players; i++) {
    var name = prompt(`Please enter player ${i + 1}'s name`);

    new Players(name);
    // playerArray.push(name);
    console.log(i);
  }
  whoGoesFirst();
}
// Player Constructor

function Players(name) {
  this.name = name;
  this.score = 0;
  playerArray.push(this);
}

// Random number generator to select who goes first
function getRandomCharacter() {
  return Math.floor(Math.random() * playerArray.length);
}



//Function to choose who goes first

var firstPlayer = '';
function whoGoesFirst() {
  var f = getRandomCharacter(); // You're it!!!

  firstPlayer = playerArray[f].name;

  alert(`player ${firstPlayer} goes first!`);

  changeLocation();

}




function changeLocation() {

  location.replace('play.html');

}

// export {playerArray,firstplayer,} to local storage

localStorage.setItem('players', JSON.stringify(playerArray));

localStorage.setItem('firstPlayer', JSON.stringify(firstPlayer));

