const gridContainer = document.querySelector('#grid-container');

const gridSize = Math.pow(Number(prompt('Enter number of squares per side. (from 3 - 20)')),2);
const gridColor = prompt('Enter pen of color');

for (let i = 0; i < gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    console.log(gridSquare.style.height = (600 / Math.sqrt(gridSize)+'px'));
    console.log(gridSquare.style.width = (600 / Math.sqrt(gridSize)+'px'));
    gridContainer.appendChild(gridSquare);

    const gridCollection = document.querySelectorAll('.grid-square');
    gridCollection.forEach(div => {
        div.addEventListener('mouseover',(e) => {
            e.target.style.backgroundColor = gridColor;      
        });
    });
}




