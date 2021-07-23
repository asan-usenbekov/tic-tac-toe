let origBoard;

const huPlayer = "o"
const aiPlayer = "x"
const winCombos = [
    [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
]
const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
    document.querySelector(".endgame").getElementsByClassName.display
    origBoard = Array.from(Array(9).keys())
    for (let i=0; i < cells.length; i++){
        cells[i].innerText = "";
        cells[i].style.removeProperty("background");
        cells[i].addEventListener("click", turnClick);
    }
}
function turnCLick(square) {
    if (typeof origBoard[square.target.id]==="number"){
        turn(square.target.id, huPlayer);
        if (!checkTie()) turn(bestSpot(), aiPlayer)
    }
}
