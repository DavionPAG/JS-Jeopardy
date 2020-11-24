'use strict';

var points500Array = [];
var points1000Array = [];
var points2000Array = [];

function Points500(question, answer) {
  this.points = 500;
  this.question = question;
  this.answer = answer;
  points500Array.push(this);
}

function Points1000(question, answer) {
  this.points = 1000;
  this.question = question;
  this.answer = answer;
  points1000Array.push(this);
}

function Points2000(question, answer) {
  this.points = 2000;
  this.question = question;
  this.answer = answer;
  points2000Array.push(this);
}


new Points500('This operator compares two values (numbers, strings, or Booleans) to see if they are the same', '==');
new Points500('This operator compares two values (numbers, strings, or Booleans)  to see if they are not the same', '!=');
new Points500('This operator compares two values to check that both the data type and value are the same', '===');
new Points500('This operator compares two values to check that bothe the data type and value are not the same', '!==');
new Points500('A blank variable can only have a value of true or false', 'boolean');
new Points500('Blank CSS property can prevent content from trying to flow around or alongside a floated element', 'clear');
new Points500('If you do not know how many times the code would run, you can use a blank loop', 'while');



new Points1000('In computer programming, each physical thing in the world can be represented as an  ', 'object');
new Points1000(' A blank is the computer\'s way of sticking up its hand to say, Hay this just happend!', 'event');
new Points1000('A blank is a series of instructions that a computer can follow one-by-one. ', 'script');
new Points1000('Each individual instruction or step is know as a blank. ', 'statement');
new Points1000('Some statements are surrounded by curly braces; these are know as blank', 'code blocks');
new Points1000('Type a for condition counter that will iterate 9 times', '(var i = 0; i < 10; i++)');
new Points1000('A box that is held in the same location even if the page is scrolled best describes blank positioning?', 'fixed');



new Points2000('When an event has occured, it is often described as having fired or been blank', 'raised');
new Points2000('Events are said to blank a function or script.', 'trigger');
new Points2000('If you need to run code a specific number of times, use a blank loop.', 'for');
new Points2000('A function blank loads before any code is executed. ', 'declaration');
new Points2000('A function blank loads only when the interpreter reaches that line of code. ', 'expression');
new Points2000('What CSS property is used to change the text color of an element?', 'color');
new Points2000('The property blank returns number of characters in the string in most cases.', 'length');



function generateAnswers() {}