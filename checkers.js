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

//this variable is a pointer to the span on the HTML page that stores the
//value of the selected piece
var selValueElem = document.querySelector('#selectedSquare');

//this function creates a checkers board with 24 pieces
//a checkers board alternates 2 colors, this board happens to be 8 rows and 8 columns
//but could be any size
function createBoard(){
    //create a section tag in HTML to hold the board
    //squares will be added to this board
    var theBoard = document.createElement('section');
    theBoard.id = 'checkersBoard';
    document.body.appendChild(theBoard);

    //the outer loop builds rows
    for (var i=0; i < board.length; i++){
        //the inner loop builds the columns
        for (var j=0; j < board.length; j++){
            //create an HTML div that will become 1 square on the checkers board
            var square = document.createElement('div');
            square.classList.add('square');
            //the id is "div" + the string values of i and j
            //example: div00 div01 div02 div03 and so on
            square.setAttribute("id", "div" + i + j);

            //if i and j added together is an odd number, make the background of the square 
            //be gray and add an event listener so the piece can be moved
            // % is modulus or mod - its the remainder of the first number divded by the second number
            if ((i+j) % 2 == 1){
                //add the CSS class bg to the square
                square.classList.add('bg');
                //add the event listener for when the div is clicked
                square.addEventListener("click", movePiece);
            }
            
            //add the sqaure to the HTML board element
            theBoard.appendChild(square);

            //if this baord array element exists (in other words, is not null)
            //add a piece to the sqaure
            if (board[i][j]){
                //the array value was either i or b
                //the numbers of the piece id will match the square id
                //checker-i or checker-b will determine the color of the piece
                //square is which to add the piece to
                createPiece("piece" + i + j, 'checker-' + board[i][j], square);
            }
        }
    }
}

//this function builds the checker piece
//the piece will be black or ivory depending on which pieceClass is passed in 
function createPiece(id, pieceClass, theSquare){
    //create a div
    var newPiece = document.createElement('div');
    //set the id
    newPiece.setAttribute("id", id );
    //the checker CSS class makes the piece round
    newPiece.classList.add("checker");
    //the pieceClass determines the color of the piece
    newPiece.classList.add(pieceClass);
    //add an onclick event so the getPlayerPieces function is called when
    //the piece is clicked on
    newPiece.addEventListener("click", getPlayerPieces);
    //add the piece div to the square div
    theSquare.appendChild(newPiece);
}

//this function will "move" a piece from one square to another
function movePiece(event){
    console.log("target square selected=" + event.target.id);

    //the new square is where the piece will be moved to
    // this square is clicked on by the user
    var newSquareId = event.target.id;
    //remove piece of dic from the id, we only need the number
    newSquareId = newSquareId.replace("piece", "")
    newSquareId = newSquareId.replace("div", "")

    //get the piece id that ideally was clicked on before the empty square was licked
    //the piece id is stored in the hidden span
    var selectedPieceId = selValueElem.dataset.value;

    //if the piece id and the destination swuare are differen, "move" the piece
    if (selectedPieceId != newSquareId){
        //the old square
        var oldSquare = document.getElementById("div" + selectedPieceId);
        //the olde square
        var oldPiece = document.getElementById("piece" + selectedPieceId);
        //we need to know what color the old piece was
        var pieceClass = oldPiece.classList[1];

        //remove the old piece from the old sqaure
        oldSquare.removeChild(oldPiece);

        //this is the destination for the piece
        var newSquare = document.getElementById("div" + newSquareId);

        //add the piece to this new sqaure 
        //pass in the piece id, what color the puece should be and the div to hold the piece
        createPiece("piece" + newSquareId, pieceClass, newSquare);
    }
}

//when a piece is clicked, we just store the value in the hidden span in the HTML
function getPlayerPieces(event){
    console.log("square selected=" + event.target.id);

    //get the id of the selected piece
    var selectedPieceId = event.target.id;
    //we just want the number
    selectedPieceId = selectedPieceId.replace("piece", "")
    selectedPieceId = selectedPieceId.replace("div", "")

    //store the value in the span
    selValueElem.dataset.value = selectedPieceId;
}