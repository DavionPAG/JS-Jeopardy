'use strict';

// TESTER

var playerArray = [];

function Players(name) {
  this.name = name;
  this.score = 0;
  playerArray.push(this);
}

var a = new Players('a');
var b = new Players('b');
var c = new Players('c');

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

var firstPlayer = playerArray[0];

var currentPlayer = firstPlayer;

var ourAnswer = 0;

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
  ourAnswer = 0;
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

  alert(`${currentPlayer.name} is up! Go ahead and choose a point amount`);
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
    answer = document.createElement('input');
    answer.setAttribute('type', 'text');
    answer.setAttribute('name', 'Answer');
    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submitButton');


    questionSection.appendChild(question);
    questionSection.appendChild(answerLabel);
    questionSection.appendChild(answer);
    questionSection.appendChild(submitButton);

    questionSection.addEventListener('submit', pointCheck);
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
    answer = document.createElement('input');
    answer.setAttribute('type', 'text');
    answer.setAttribute('name', 'Answer');

    submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submitButton');


    questionSection.appendChild(question);
    questionSection.appendChild(answerLabel);
    questionSection.appendChild(answer);
    questionSection.appendChild(submitButton);

    // questionSection.addEventListener('submit', pointCheck);
  }
  pointCheck();
}


function pointCheck(event) {
  event.preventDefault();
  ourAnswer = event.target.Answer.value;
  console.log(ourAnswer);

  while (tries < 3 && ourAnswer !== points500Array[random].answer || ourAnswer !== points1000Array[random].answer || ourAnswer !== points2000Array[random].answer) {
    if (ourAnswer === points500Array[random].answer.toLowerCase()) {
      alert('Correct Answer!!!');
      currentPlayer.score += points500Array[random].points;
      points500Array.splice(random, 1);
    }
    else if (ourAnswer === points1000Array[random].answer.toLowerCase()) {
      alert('Correct Answer!!!');
      currentPlayer.score += points1000Array[random].points;
      points1000Array.splice(random, 1);
    }
    else if (ourAnswer === points2000Array[random].answer.toLowerCase()) {
      alert('Correct Answer!!!');
      currentPlayer.score += points2000Array[random].points;
      points2000Array.splice(random, 1);
    }
    else {
      console.log(ourAnswer);
      tries++;
      alert('Incorrect answer');
      rerunTurn();
    }
  }

  if (tries === 3) {
    alert('Sorry nice try but its the next players turn!');
    nextTurn();
  }
  else if (tries !== 3) {
    alert('Nice Job!');
    nextTurn();
  }
}

function currentPlayerFunction() {
  var i = firstPlayer;


}

function rerunTurn() {
  questionSection.removeChild(question);
  questionSection.removeChild(answerLabel);
  questionSection.removeChild(answer);
  questionSection.removeChild(submitButton);

  renderGame();

}

function nextTurn() {
  questionSection.removeChild(question);
  questionSection.removeChild(answerLabel);
  questionSection.removeChild(answer);
  questionSection.removeChild(submitButton);

  currentPlayerFunction();
  renderGame();

}

// currentPlayerFunction();
// renderGame();

catagoryTable.addEventListener('click', gameScript);

questionSection.addEventListener('submit', pointCheck);

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
