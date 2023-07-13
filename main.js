var intialValue = 100;
var randomNO = random(100);
var highscore = null;

function PlayAgain() {
    document.body.style.backgroundColor = "#003333"
    document.querySelector('.chances').textContent = 100
    document.querySelector('.box').textContent = '?'
    document.getElementById('selectNo').value = ''
    document.querySelector(".msg").textContent = 'Start Guessing...'
    randomNO = random(100);

}


function random(n) {
    return Math.floor(Math.random() * n) + 1

}
console.log(randomNO);

function check() {
    if (intialValue != 0) {
        let inputValue = document.getElementById('selectNo').value
        if (inputValue > randomNO) {
            document.querySelector(".msg").innerHTML = 'Your Guess Is High 😃😃'
            intialValue--
            document.querySelector('.chances').textContent = intialValue
        }
        else if (inputValue < randomNO) {
            document.querySelector(".msg").innerHTML = 'Your Guess Is Low 😥😥'
            intialValue--
            document.querySelector('.chances').textContent = intialValue
        }
        else {
            document.querySelector(".msg").innerHTML = 'You Won 🤩🤩'
            document.querySelector('.chances').textContent = --intialValue
            document.querySelector(".highscore1").innerHTML = intialValue;

            document.querySelector('.box').textContent = inputValue
            document.body.style.backgroundColor = "green"

        }
    }
    else {
        document.querySelector(".msg").innerHTML = 'game over'
    }
}
