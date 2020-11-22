'use strict';

// var firstPlace = document.createElement('p'); NOT NECCESSARY
// firstPlace.setAttribute('id', 'Winner'); NOT NECCESARY


var playersArray = [];

// Get player data from local storage

var playerArray = localStorage.getItem('players');
playerArray = JSON.parse(playerArray);


function Players(name) {
  this.name = name;
  this.score = 0;
  playersArray.push(this);
}

new Players ('a');
new Players ('b');
new Players ('c');
new Players ('d');

// GLOBAL VARIABLES
// var playersArray = [];

// Placements Variable for the sake of showing Scores

// Variable for linking Elements to page
var results = document.getElementById('results');
// Function used to create each Players position on the score board!
function playerGenerator() {
  // Some sort of Filter for highest number
  for (var i = 0; i < playersArray.length; i++) {
    var playerid = `Player${i}`;
    var placements = document.createElement('p');
    
    placements.setAttribute('id', playerid); // Remember it is 0-3 for the array CSS Purposes
    placements.textContent = `${playersArray[i].name} your score was ${playersArray[i].score}!`;
    results.appendChild(placements);
  }
}