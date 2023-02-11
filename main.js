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
        themePen.classList.remove('random');
        mysteryPen.classList.remove('random');
        themePenCycle.classList.remove('cycle-active');
        mysteryPenCycle.classList.remove('cycle-active');
        penColor = '#073B4C';
        colorSlider.value = penColor;
    });

const eraser = document.getElementById('eraser-btn');
    eraser.addEventListener('click' , ()  => { 
        themePen.classList.remove('random');
        mysteryPen.classList.remove('random');
        themePenCycle.classList.remove('cycle-active');
        mysteryPenCycle.classList.remove('cycle-active');
        penColor = '#cacaca';
    });

const randomHexClr = () => {
        let i =(Math.random() * 0xffff * 1000000).toString(16);
        return '#' + i.slice(0,6);
    }

const mysteryPen = document.getElementById('mystery-btn');
    mysteryPen.addEventListener('click' , ()  => { 
        themePen.classList.remove('random');
        mysteryPen.classList.remove('random');
        themePenCycle.classList.remove('cycle-active');
        mysteryPenCycle.classList.remove('cycle-active');
        penColor = randomHexClr();
        colorSlider.value = penColor;
    });

const themeColors = ['#EF476F','#FFD166','#06D6A0','#118AB2','#073B4C'];
function getThemeColor() { 
    let randomIndex = Math.floor(Math.random() * themeColors.length);
    let themeColor = themeColors[randomIndex];
     return themeColor;
    }

const themePen = document.getElementById('theme-btn');   
    themePen.addEventListener('click', () => {
        themePen.classList.remove('random');
        mysteryPen.classList.remove('random');
        themePenCycle.classList.remove('cycle-active');
        mysteryPenCycle.classList.remove('cycle-active');
        penColor = getThemeColor();
        colorSlider.value = penColor;
    });

const themePenCycle = document.getElementById('theme-cycle-btn');
    themePenCycle.addEventListener('click', () => {
        themePen.classList.toggle('random');
        themePenCycle.classList.toggle('cycle-active');
        mysteryPen.classList.remove('random');
        mysteryPenCycle.classList.remove('cycle-active');
        penColor = getThemeColor();
        colorSlider.value = penColor;
    });

const mysteryPenCycle = document.getElementById('mystery-cycle-btn');
mysteryPenCycle.addEventListener('click', () => {
    mysteryPenCycle.classList.toggle('cycle-active');
    mysteryPen.classList.toggle('random');
    themePen.classList.remove('random');
    themePenCycle.classList.remove('cycle-active');
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
            if (event.buttons == 1 && themePen.classList.contains('random')) {
                event.preventDefault();
                penColor = getThemeColor();
                colorSlider.value = penColor;
                event.target.style.backgroundColor = penColor;
            }
            else if (event.buttons == 1 && mysteryPen.classList.contains('random')) {
                event.preventDefault();
                penColor = randomHexClr();
                colorSlider.value = penColor;
                event.target.style.backgroundColor = penColor;
            }

            else if (event.buttons == 1) {
                event.preventDefault();
                event.target.style.backgroundColor = penColor;
            }    
        });
        div.addEventListener(('mousedown'),(event) => {
            if (themePen.classList.contains('random')) {
                event.preventDefault();
                penColor = getThemeColor();
                colorSlider.value = penColor;
                event.target.style.backgroundColor = penColor;
            }
            else if (mysteryPen.classList.contains('random')) {
                event.preventDefault();
                penColor = randomHexClr();
                colorSlider.value = penColor;
                event.target.style.backgroundColor = penColor;
            }
            else {
            event.preventDefault();
            event.target.style.backgroundColor = penColor;      
            }  
        });
    });  
//end canvas


