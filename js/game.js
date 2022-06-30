function names() {
    const namePlayer1 = prompt("Welcome. I am DiceBot. What is the name of Player 1?");
    const namePlayer2 = prompt("Thank you, human. What is the name of Player 2?");
    document.getElementById("namePlayer1").textContent = namePlayer1;
    document.getElementById("namePlayer2").textContent = namePlayer2;
    document.getElementById("button").value = "ROLL";
    document.getElementById("button").setAttribute("onclick", "dieGame()");
}

function dieGame() {

    document.getElementById("status").classList.remove("tie");

    const audio = new Audio('audio/dice.mp3');

        audio.play();

    function playerOneDieRoll() {
            var firstRoll = Math.random();
            firstRoll = firstRoll * 6;
            firstRoll = Math.floor(firstRoll) + 1;
            return firstRoll;
        }


    function playerTwoDieRoll() {
            var secondRoll = Math.random();
            secondRoll = secondRoll * 6;
            secondRoll = Math.floor(secondRoll) + 1;
            return secondRoll;
        }

        var namePlayer1 = document.getElementById("namePlayer1").textContent;
        var namePlayer2 = document.getElementById("namePlayer2").textContent;

        var playerOneScore = playerOneDieRoll();
        var playerTwoScore = playerTwoDieRoll();

        document.getElementById("die1").setAttribute("src", "img/dice" + playerOneScore + ".png");
        document.getElementById("die2").setAttribute("src", "img/dice" + playerTwoScore + ".png");

        if (playerOneScore > playerTwoScore) {
            document.getElementById("status").textContent = "Bloop. " + namePlayer1 + " Wins!";
        }
            else if (playerOneScore === playerTwoScore){
                document.getElementById("status").textContent = "It is a tie.";
                document.getElementById("status").classList.add("tie");

            }
            else {
                document.getElementById("status").textContent = "Beep. " + namePlayer2 + " Wins!";
            }
}
