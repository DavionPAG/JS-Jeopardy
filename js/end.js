'use strict';

// var firstPlace = document.createElement('p'); NOT NECCESSARY
// firstPlace.setAttribute('id', 'Winner'); NOT NECCESARY


// Function used to create each Players position on the score board!
function playerGenerator() {
  // Some sort of Filter for highest number
  for (var i = 0; i <= playerArray.length; i++) {
    var placements = document.createElement('p');
    placements.setAttribute('id', `Player${i}`); // Remember it is 0-3 for the array CSS Purposes
    placements.textContent = `${playersArray[i].name} your score was ${playersArray[i].score}!`;
  }
}

