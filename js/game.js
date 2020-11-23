'use strict'

var catagoryTable = document.getElementById('catagories');



// var players = localStorage.getItem('players');
// JSON.parse(players);

// var firstPlayer = localStorage.getItem('firstPlayer');
// JSON.parse(firstPlayer);

//question 1: Prompt a box with multible catagories, choose a catagory and answer the following question!

var playSection = document.getElementById('play');
var instructionSection = document.getElementById('insturctions');

// var catagories = [];
// function catgories(questions) {
// this.question = questions;
// catagoryTable.appendChild();
// }
function renderTable() {
  catagoryTable.innerHtml = '';
  console.log(catagories);
  // form.addEventListener('submit', handleform);
  renderTable();
}



var td = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');

var tr = document.createElement('tr');
catagoryTable.appendChild(tr);
td.textContent = '500';
tr.appendChild(td);
catagoryTable.addEventListener('click', javaScript500);
 
function javaScript500(event){
  if(event.target.td.value) {}
 else if(event.target.td2.value){}
 else if(event.target.td3.value){}
}

td2.textContent = '1000';
tr.appendChild(td2);

td3.textContent = '2000'
tr.appendChild(td3);

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