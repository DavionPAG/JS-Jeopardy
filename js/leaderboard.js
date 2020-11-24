'use strict';

// var playerData = localStorage.getItem('players');
//JSON.parse(playerData);


var playerData = [];//this is only for testing!!!

var leaderboard = document.getElementById('scoreboard');


// This is render the Leaderboard header
function renderLeaderboard() {
  var tr = document.createElement('tr');
  leaderboard.appendChild(tr);

  var th = document.createElement('th');
  th.textContent = 'Player';
  tr.appendChild(th);

  th = document.createElement('th');
  th.textContent = 'Score';
  tr.appendChild(th);
}

function TestPlayers(name, score) {
  this.name = name;
  this.score = score;
  playerData.push(this);
}

new TestPlayers('Colton', 10000);
new TestPlayers('Davion', 11000);
new TestPlayers('Jaque', 12000);
new TestPlayers('Terrence', 13000);


console.log(playerData);
// This is to instanttiate each new high score row

playerData.sort(function (a, b) {
  return b.score - a.score;
});

function renderHighScore() {

  for (var i = 0; i < playerData.length; i++) {

    var tr = document.createElement('tr');
    leaderboard.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = (playerData[i].name);
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = (playerData[i].score);
    tr.appendChild(td);
  }
}

//localStorage.setItem('highScores', JSON.stringify(playerData)); //How to add to/not rewrite current data??


renderLeaderboard();
renderHighScore();


