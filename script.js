const container = document.querySelector('#container');

function createGrid(size){
    container.replaceChildren();
    const totalSquares = size * size;
    const squareSize = 100 / size;
    for(i = 0; i < totalSquares; i++){
        const squares = document.createElement('div');
        squares.classList.add('squares');
        squares.style.flexBasis = `${squareSize}%`;
        squares.style.height = `${squareSize}%`
        container.appendChild(squares);
    }
    const squares = document.querySelectorAll('.squares');
    squares.forEach(square => {
        square.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = '#000000';
        });    
    });    
}
createGrid(16);

const gridSizeBtn = document.querySelector('#gridSizeBtn');
gridSizeBtn.addEventListener('click', () => {
    const newSize = Number(prompt('Enter a number'));
    if(newSize >= 1 && newSize <=100){
        createGrid(newSize);
    }
    else{
        alert('Invalid size. Please enter a size between 1 and 100.')
    }
});