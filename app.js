"use strict";

console.log("proof of life");
let username = "antonio";
let username1 = prompt("What's your name?");
alert(`Welcome to my site ${username1} ! Let's play a game`);

let questionOneGuess = prompt(
  `Is my favorite drink a chai latte? Answer y/n or yes/no`
).toLowerCase();

console.log(questionOneGuess);

if (questionOneGuess === "y" || questionOneGuess === "yes") {
  alert("You are correct!");
} else if (questionOneGuess === "n" || questionOneGuess === "no") {
  alert("Sorry that's incorrect");
}

let questionTwoGuess = prompt(`Are you a forex trader ?`).toLowerCase();

console.log(questionTwoGuess);

if (questionTwoGuess === "Y" || questionTwoGuess === "yes") {
  alert("You are correct! Go make some money !");
} else if (questionTwoGuess === "N" || questionTwoGuess === "no") {
  alert("Sorry. Take your time and learn.");
}

let questionThreeGuess = prompt(`Are you a future millionaire? `).toLowerCase();

console.log(questionThreeGuess);

if (questionThreeGuess === "Y" || questionThreeGuess === "yes") {
  alert("Yes I am. Cha-Ching!");
} else if (questionThreeGuess === "N" || questionThreeGuess === "no") {
  alert("Yes I am. I'm going to keep striving. ");
}

let questionFourGuess = prompt(
  `Did you win yesterday a game of Madden?`
).toLowerCase();

console.log(questionFourGuess);

if (questionFourGuess === "Y" || questionFourGuess === "yes") {
  alert("Great job! Now go get a ring!");
} else if (questionFourGuess === "N" || questionFourGuess === "no") {
  alert("It is ok you will do better next time ! ");
}

let questionFiveGuess = prompt(
  `Did you practive self care today?`
).toLowerCase();

console.log(questionFiveGuess);

if (questionFiveGuess === "Y" || questionFiveGuess === `yes`) {
  alert("Great job! You are getting closer to being healthy");
} else if (questionFiveGuess === "N" || questionFiveGuess === "no") {
  alert("It is ok you will get there. Keep trying! ");
}

let questionSixGuess = null;

var correctAnswer = 12;
var attempts = 4;
while (questionSixGuess != correctAnswer) {
  if (attempts === 0) {
    alert("You're out of attempts. Correct answer is " + correctAnswer);
    break;
  }
  questionSixGuess = parseInt(prompt(`Guess the number I am thinking?`));
  if (questionSixGuess === correctAnswer) {
    alert("You are correct! Great job!");
  } else if (questionSixGuess > correctAnswer) {
    alert("You're too high!");
  } else if (questionSixGuess < correctAnswer) {
    alert("You're too low!");
  }
  attempts--;
}

let array = [
  "nashville",
  "tampa",
  "miami",
  "new orleans",
  "houston",
  "los angelos",
  "phoenix",
  "seattle",
];
let questionSevenGuess = null;
var attemptsCity = 6;
questionsevenWhileloop: while (attemptsCity != 0) {
  attemptsCity--
  questionSevenGuess = prompt(
    `Guess the city I am thinking about?`
  ).toLowerCase();
  for (let i = 0; i < array.length; i++) {
    if (questionSevenGuess === array[i]) {
      alert("You are correct! Good job!")
      break questionsevenWhileloop
    }
  
  }
 alert("Nope You're wrong!");
 if (attemptsCity = 0){
  alert("You are out of attempts");
 } 
}
