// global variable
let color = 'black';
let click = true;

// This allows us to update the size of the board dynamically
function populateBoard (size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) =>  div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // this for loop reduces redundacy,  so `size` will be whaeva the user inputs 
    // the addEventListener is being used to change color as user mouses over.
    let amount = size * size
    for ( let i=0; i < amount; i++ ) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square)
    }
}

populateBoard(16)

// changeSize function checks input to make sure user doesnt put too large or too small input.
function changeSize(input) {
    if ( input >= 2 && input <= 100 ) {
        populateBoard(input)
    }
    else {
        console.log('Too many squares')
    }
}

function changeColor(choice) {
    color = choice
}

// This contains a function that allows user to pick random colors as they draw.
function colorSquare() {
    if (click) {
        if (color === 'random') {
        ( 
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`)
    }   else {
            this.style.backgroundColor = color;
    } 
}
}

// This makes it where the board doesnt delete when user clicks reset. It also sets it to white since bg is white currently.
function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) =>  div.style.backgroundColor = 'white');
}

// this allows us to let the user click to stop drawing on the etch sketch
// e.target.tagName != 'BUTTON' is what makes coloring stay coloring when user clicks reset.
// click is set to true in global variables. when user 'clicks' it will be set to false which will stop drawing. 
document.querySelector('body').addEventListener('click', (e) => {
    if ( e.target.tagName != 'BUTTON' ) {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'Mode: Coloring'
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring'
        }
    }
    
    
})