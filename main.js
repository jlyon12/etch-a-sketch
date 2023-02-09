//create sidebar slider values
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
    penColor = this.value;
}
let penColor = colorSliderValue.innerText;
//end sliders

//pen buttons , color reassignment 
const pen = document.getElementById('pen-btn');
    pen.addEventListener('click' , ()  => { 
        penColor = '#073B4C';
        colorSlider.value = penColor;
    });

const eraser = document.getElementById('eraser-btn');
    eraser.addEventListener('click' , ()  => { 
        penColor = '#fdf0d5';   
    });

const randomHexClr = () => {
        let i =(Math.random() * 0xffff * 1000000).toString(16);
        return '#' + i.slice(0,6);
    }

const mysteryPen = document.getElementById('mystery-btn');
    mysteryPen.addEventListener('click' , ()  => { 
        penColor = randomHexClr();
        colorSlider.value = penColor;
    });
//end pen buttons

//generate canvas grid via loop 
const gridContainer = document.querySelector('#grid-container');
gridContainer.style.setProperty(`grid-template-columns`,`repeat(${squareHeight},1fr)`);
for (let i = 0; i < gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
}

//Change color of grid-blocks on mouse-event
    const gridCollection = document.querySelectorAll('.grid-square');
    gridCollection.forEach(div => {
        div.addEventListener(('mousemove'),(event) => {
            if(event.buttons == 1) {
                event.preventDefault();
                event.target.style.backgroundColor = penColor;
            }    
        });
        div.addEventListener(('mousedown'),(event) => {
            event.preventDefault();
            event.target.style.backgroundColor = penColor;        
        });
    });  
//end canvas





// const turboPen = document.getElementById('turbo-btn');
//     turboPen.addEventListener('click' , ()  => { 
//         penColor = randomHexClr();

//     });

