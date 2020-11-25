'use strict';
// TESTER

var stringPlayers = localStorage.getItem('players');
var playerArray = JSON.parse(stringPlayers);

var stringFirst = localStorage.getItem('firstPlayer');
var firstPlayer = JSON.parse(stringFirst);

playerArray.push(firstPlayer);

var catagoryTable = document.getElementById('catagories');

var questionSection = document.getElementById('questions');

var tr = document.createElement('tr');

var random;

var answer = document.createElement('input');



var tries = 0;

var question = document.createElement('p');

var answerLabel = document.createElement('label');

var submitButton = document.createElement('button');

var td = document.createElement('td');

var td2 = document.createElement('td');

var td3 = document.createElement('td');

// Spread used to make a copy of an array
var copyplayerArray = [...playerArray];


// var firstPlayer = playerArray[0];
// var firstPlayer = copyplayerArray.shift();

var currentPlayer = firstPlayer;

var ourAnswer = '';

var rounds = 0;

// var players = localStorage.getItem('players');
// JSON.parse(players);

// var firstPlayer = localStorage.getItem('firstPlayer');
// JSON.parse(firstPlayer);

//question 1: alert a box with multible catagories, choose a catagory and answer the following question!



// var catagories = [];
// function catgories(questions) {
// this.question = questions;
// catagoryTable.appendChild();
// }

function randomQuestionArray500() {
  return Math.floor(Math.random() * points500Array.length);
}

function randomQuestionArray1000() {
  return Math.floor(Math.random() * points1000Array.length);
}

function randomQuestionArray2000() {
  return Math.floor(Math.random() * points2000Array.length);
}

function renderGame() {
  if (rounds < 7) {
    td = document.createElement('td');
    td.setAttribute('id', 'td1');
    td2 = document.createElement('td');
    td2.setAttribute('id', 'td2');
    td3 = document.createElement('td');
    td3.setAttribute('id', 'td3');

    // var tr = document.createElement('tr');
    catagoryTable.appendChild(tr);
    tr.appendChild(td);
    td.textContent = '500';
    tr.appendChild(td2);
    td2.textContent = '1000';
    tr.appendChild(td3);
    td3.textContent = '2000';

    setTimeout(() => {alert(`${currentPlayer.name} is up! Go ahead and choose a point amount`);}, 200);
    rounds++;
  }
  else {
    sendToScoreboard();
    alert('Game Over, Lets see your scores!');
  }
}


function gameScript(event) {
  console.log(event.target);
  if (event.target.id === 'td1') {
    random = randomQuestionArray500();
    catagoryTable.removeChild(tr);
    td.innerHTML = '';
    td2.innerHTML = '';
    td3.innerHTML = '';
    question = document.createElement('p');
    question.textContent = points500Array[random].question;
    answerLabel = document.createElement('label');
    answerLabel.setAttribute('for', 'answer');
    answerLabel.textContent = 'Please enter an answer';
    answerLabel.setAttribute('id', 'answerLabel');
    answer = document.createElement('input');
    answer.setAttribute('type', 'text');
    answer.setAttribute('name', 'Answer');
    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submitButton');


    questionSection.appendChild(question);
    questionSection.appendChild(answerLabel);
    questionSection.appendChild(answer);
    questionSection.appendChild(submitButton);


  }
  else if (event.target.id === 'td2') {
    random = randomQuestionArray1000();
    catagoryTable.removeChild(tr);
    td.innerHTML = '';
    td2.innerHTML = '';
    td3.innerHTML = '';
    question = document.createElement('p');
    question.textContent = points1000Array[random].question;
    answerLabel = document.createElement('label');
    answerLabel.setAttribute('for', 'answer');
    answerLabel.textContent = 'Please enter an answer';
    answerLabel.setAttribute('id', 'answerLabel');
    answer = document.createElement('input');
    answer.setAttribute('type', 'text');
    answer.setAttribute('name', 'Answer');
    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submitButton');


    questionSection.appendChild(question);
    questionSection.appendChild(answerLabel);
    questionSection.appendChild(answer);
    questionSection.appendChild(submitButton);


  }
  else if (event.target.id === 'td3') {
    random = randomQuestionArray2000();
    catagoryTable.removeChild(tr);
    td.innerHTML = '';
    td2.innerHTML = '';
    td3.innerHTML = '';
    question = document.createElement('p');
    question.textContent = points2000Array[random].question;
    answerLabel = document.createElement('label');
    answerLabel.setAttribute('for', 'answer');
    answerLabel.textContent = 'Please enter an answer';
    answerLabel.setAttribute('id', 'answerLabel');
    answer = document.createElement('input');
    answer.setAttribute('type', 'text');
    answer.setAttribute('name', 'Answer');

    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submitButton');


    questionSection.appendChild(question);
    questionSection.appendChild(answerLabel);
    questionSection.appendChild(answer);
    questionSection.appendChild(submitButton);


  }
}


function pointCheck(event) {
  event.preventDefault();
  ourAnswer = event.target.Answer.value;
  console.log(ourAnswer);
  var qanswer = false;
  if (ourAnswer === points500Array[random].answer.toLowerCase()) {
    alert('Correct Answer!!!');
    currentPlayer.score += points500Array[random].points;
    points500Array.splice(random, 1);
    qanswer = true;
  }
  else if (ourAnswer === points1000Array[random].answer.toLowerCase()) {
    alert('Correct Answer!!!');
    currentPlayer.score += points1000Array[random].points;
    points1000Array.splice(random, 1);
    qanswer = true;
  }
  else if (ourAnswer === points2000Array[random].answer.toLowerCase()) {
    alert('Correct Answer!!!');
    currentPlayer.score += points2000Array[random].points;
    points2000Array.splice(random, 1);
    qanswer = true;
  }
  else {
    console.log(ourAnswer);
    alert('Incorrect answer');
    // rerunTurn();
  }


  if (!qanswer) {
    alert('Sorry nice try, try again');
    nextTurn();
  }
  else if (qanswer) {
    alert('Nice Job!');
    nextTurn();
  }
  // Next players turn
}

// function currentPlayerFunction() {
//   var i = firstPlayer;


// }


function nextTurn() {
  questionSection.removeChild(question);
  questionSection.removeChild(answerLabel);
  questionSection.removeChild(answer);
  answer.innerHTML = null;
  questionSection.removeChild(submitButton);
  removeEventListener('submit', pointCheck);
  currentPlayerFunction();
  renderGame();

}

function sendToScoreboard() {
  localStorage.setItem('players',JSON.stringify(playerArray));
  location.replace('endgame.html');
}

function currentPlayerFunction() {
  currentPlayer;
}

renderGame();

catagoryTable.addEventListener('click', gameScript);

questionSection.addEventListener('submit', pointCheck);

localStorage.setItem('players', JSON.stringify(playerArray));

// var td = document.createElement('tr');
// catagoryTable.appendChild(tr);
// td.textContent = '1000';
// td.appendChild(tr);
// form.addEventListener

// for (var i = 0; i < pointsArray.length; i++); {
//   th.textContent = pointsArray[i];
//   tr.appendChild(th);
// console.log(pointsArray[i]);
// }
