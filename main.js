// This allows us to update the size of the board dynamically
function populateBoard (size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) =>  div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // this for loop reduces redundacy,  so `size` will be whaeva the user inputs 
    let amount = size * size
    for ( let i=0; i < amount; i++ ) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square)
    }
}

populateBoard(16)

function changeSize(input) {
    if ( input >= 2 || input <= 100 ) {
        populateBoard(input)
    }
    else {
        console.log('Too many squares')
    }
}