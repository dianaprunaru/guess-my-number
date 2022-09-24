const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
  // When the player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😍 Correct number!';
    document.querySelector('body').style.backgroundColor = '#008080';
    document.querySelector('.number').style.width = '30rem';
  }
  //   When the number is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🛫 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😓 You lost.';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   When the number is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('message').textContent = '🛬 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😓 You lost.';
    }
  }
});
