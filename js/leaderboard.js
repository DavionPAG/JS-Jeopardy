'use strict';

var leaderboard = document.getElementById('scoreboard');
// var scores = [];
// var highScoreLimit = 10;

// This is render the Leaderboard header
function renderLeaderborad() {
  var tr = document.createElement('tr');
  leaderboard.appendChild(tr);

  var th = document.createElement('th');
  th.textContent = 'Player';
  tr.appendChild(th);

  var th = document.createElement('th');
  th.textContent = 'Score';
  tr.appendChild(th);
}

// This is to instanttiate each new high score row

function renderHighScore() {
  var tr = document.createElement('tr');
  leaderboard.appendChild(tr);

  var td = document.createElement(td);
  td.textContent = 'get this from game.js';
  tr.appendChild(td);
}


renderLeaderborad();
renderHighScore();


