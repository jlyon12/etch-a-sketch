const gridContainer = document.querySelector('#grid-container');

// const gridSize = Math.pow(Number(prompt('Enter number of squares per side. (from 3 - 20)')),2);
const gridSlider = document.getElementById('grid-slider');
const gridSliderValue = document.getElementById('grid-slider-value');
gridSliderValue.innerText = gridSlider.value;
gridSlider.oninput = function () {
    gridSliderValue.innerText = this.value;
}

const gridSize = Number(gridSliderValue.innerText) * Number(gridSliderValue.innerText) ;
const squareHeight = Number(gridSliderValue.innerText);

const colorSlider = document.getElementById('color-slider');
const colorSliderValue = document.getElementById('color-slider-value');
colorSliderValue.innerText = colorSlider.value;
colorSlider.oninput = function () {
    colorSliderValue.innerText = this.value;
}
const gridColor = colorSliderValue.innerText;

for (let i = 0; i < gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.style.height = (500 / squareHeight+'px');
    gridSquare.style.width = (500 / squareHeight+'px');

    gridContainer.appendChild(gridSquare);

    const gridCollection = document.querySelectorAll('.grid-square');
    gridCollection.forEach(div => {
        div.addEventListener('mouseover',(e) => {
            e.target.style.backgroundColor = gridColor;      
        });
    });
}




