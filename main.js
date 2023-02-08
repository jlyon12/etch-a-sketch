const gridContainer = document.querySelector('#grid-container');

const gridSlider = document.getElementById('grid-slider');
const gridSliderValue = document.getElementById('grid-slider-value');
gridSliderValue.innerText = gridSlider.value + ' x ' + gridSlider.value;
gridSlider.oninput = function () {
    gridSliderValue.innerText = this.value + ' x ' + this.value;
}

const gridSize = Number(gridSlider.value) * Number(gridSlider.value) ;
const squareHeight = Number(gridSlider.value);

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
    gridContainer.appendChild(gridSquare);
    gridContainer.style.setProperty(`grid-template-columns`,`repeat(${Number(gridSlider.value)},1fr)`);
    const gridCollection = document.querySelectorAll('.grid-square');
    gridCollection.forEach(div => {
        div.addEventListener('mouseover',(e) => {
            e.target.style.backgroundColor = gridColor;      
        });
    });
}




