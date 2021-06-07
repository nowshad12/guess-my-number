'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currScore = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When no input
  if (!guess) {
    displayMessage('⛔ No Number');
  }

  // When guess is correct
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (currScore > highscore) {
      highscore = currScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (currScore > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      currScore--;
      document.querySelector('.score').textContent = currScore;
    } else {
      displayMessage('💥 You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  currScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = currScore;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
