'use strict';

console.log('proof of life');
let username = 'antonio'
let username1 = prompt('What\'s your name?'); 
alert(`Welcome to my site ${username1} ! Let's play a game`)


    let questionOneGuess = prompt(`Is my favorite drink a chai latte? Answer y/n or yes/no`).toLowerCase();
    
 console.log(questionOneGuess);

 if(questionOneGuess === 'y' ||
 questionOneGuess === 'yes') { alert('You are correct!');} else if (questionOneGuess === 'n' ||questionOneGuess === 'no' ) {
    alert('Sorry that\'s incorrect');
 }


 let questionTwoGuess = prompt(`Are you a forex trader ?` ).toLpperCase();

 console.log(questionTwoGuess);

 if(questionTwoGuess === 'Y' || questionTwoGuess === 'yes'); { alert('You are correct! Go make some money !');}; else  if(questionTwoGuess === 'N' || questionTwoGuess === 'no') 
   { alert('Sorry. Take your time and learn.');}



   let questionThreeGuess = prompt(`Are you healing from your trauma?`).toLowerCase();

   console.log(questionThreeGuess);

   if(questionThreeGuess === 'Y'|| questionThreeGuess === 'yes'); {alert('Good, Keep working!');} else if (questionThreeGuess === 'N'|| questionThreeGuess === 'no') {alert('I am sorry. Keep healing.');}


   let questionFourGuess = prompt(`Did you win yesterday a game of Madden?`).toLowerCase();

   console.log(questionFourGuess);

   if(questionFourGuess === 'Y' || questionFourGuess === 'yes'); {alert('Great job! Now go get a ring!');}; else if (questionFourGuess === 'N' || questionFourGuess === 'no') {alert('It is ok you will do better next time ! ')}


   let questionFiveGuess = prompt(`Did you practive self care today?`).toLowerCase();

   console.log(questionFiveGuess);

   if(questionFiveGuess === 'Y' || questionFiveGuess === `yes`); {alert('Great job! You are getting closer to being healthy');}; else if (questionFiveGuess === 'N'|| questionFiveGuess === 'no'){alert('It is ok you will get there. Keep trying! ')}; 
  
