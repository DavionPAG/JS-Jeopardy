'use strict';

var leaderboard = document.getElementById('scoreboard');
// var scores = [];
// var highScoreLimit = 10;

// This is to render the Leaderboard header
function renderLeaderboard() {
  var tr = document.createElement('tr');
  leaderboard.appendChild(tr);

  var th = document.createElement('th');
  th.textContent = 'Player';
  tr.appendChild(th);

  var th2 = document.createElement('th');
  th2.textContent = 'Score';
  tr.appendChild(th2);
}

// This is to instantiate each new high score row

function renderHighScore() {
  var tr = document.createElement('tr');
  leaderboard.appendChild(tr);

  var td = document.createElement(td);
  td.textContent = 'get this from game.js';
  tr.appendChild(td);
}


renderLeaderboard();
renderHighScore();


