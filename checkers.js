//this arrat will help us structure the board //i=ivory(color) b=black(color)
var board = [
    [null, 'i', null, 'i', null, 'i', null, 'i',],
    ['i', null, 'i', null, 'i', null, 'i', null],
    [null, 'i', null, 'i', null, 'i', null, 'i',],
    [null, null, null, null, null, null, null, null,],
    [null, null, null, null, null, null, null, null,],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b',],
    ['b', null, 'b', null, 'b', null, 'b', null]
]

var selValueElem = document.querySelector('#selectedSquare');

function createBoard(){
    var theBoard = document.createElement('section');
    theBoard.id = 'checkersBoard';
    document.body.appendChild(theBoard);

    for (var i=0; i < board.length; i++){
        for (var j=0; j < board.length; j++){
            var square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute("id", "div" + i + j);

            if ((i+j) % 2 == 1){
                square.classList.add('bg');
                square.addEventListener("click", movePiece);
            }
            
            theBoard.appendChild(square);

            if (board[i][j]){
                createPiece("piece" + i + j, 'checker-' + board[i][j], square);
            }
        }
    }
}

function createPiece(id, pieceClass, theSquare){
    var newPiece = document.createElement('div');
    newPiece.setAttribute("id", id );
    newPiece.classList.add("checker");
    newPiece.classList.add(pieceClass);
    newPiece.addEventListener("click", getPlayerPieces);
    theSquare.appendChild(newPiece);
}

function movePiece(event){
    console.log("target square selected=" + event.target.id);

    var newSquareId = event.target.id;
    newSquareId = newSquareId.replace("piece", "")
    newSquareId = newSquareId.replace("div", "")

    var selectedPieceId = selValueElem.dataset.value;

    if (selectedPieceId != newSquareId){
        var oldSquare = document.getElementById("div" + selectedPieceId);
        var oldPiece = document.getElementById("piece" + selectedPieceId);
        var pieceClass = oldPiece.classList[1];

        oldSquare.removeChild(oldPiece);

        var newSquare = document.getElementById("div" + newSquareId);

        createPiece("piece" + newSquareId, pieceClass, newSquare);
    }
}

function getPlayerPieces(event){
    console.log("square selected=" + event.target.id);

    var selectedPieceId = event.target.id;
    selectedPieceId = selectedPieceId.replace("piece", "")
    selectedPieceId = selectedPieceId.replace("div", "")

    selValueElem.dataset.value = selectedPieceId;
}