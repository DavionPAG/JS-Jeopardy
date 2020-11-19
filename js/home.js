'use strict';
//Global Variables

//Player Array for holding onto number of players
var playerArray = [];




// Selects amount of characters through event handler

var playersubmit = document.getElementById(* PLACEHOLDER *);

playersubmit.addEventListener('submit', Eventhandler);


function Eventhandler(event) {
  // function tester() {
  var players = event.target.* PLACEHOLDER *.value;
  // var players = 4
  for (var i = 1; i < players + 1; i++) {
    var name = prompt(`Please enter player ${i}'s name`);

    new Players(name);
  }

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
function whoGoesFirst() {
  var it = getRandomCharacter();

  alert(`player ${playerArray[it].name} goes first!`);
}
