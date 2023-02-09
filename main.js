const gridContainer = document.querySelector('#grid-container');
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

//generate canvas grid via loop 
gridContainer.style.setProperty(`grid-template-columns`,`repeat(${squareHeight},1fr)`);
for (let i = 0; i < gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
    
    const gridCollection = document.querySelectorAll('.grid-square');
    gridCollection.forEach(div => {
        div.addEventListener('mouseover',(e) => {
            e.target.style.backgroundColor = penColor;
               
        });
    });
    
}
//end canvas


//pen buttons , color reassignment 
const pen = document.getElementById('pen-btn');
    pen.addEventListener('click' , ()  => { 
        penColor = 'black';
        colorSlider.value = penColor;
        // penColor = colorSliderValue.innerText;
        // colorSlider.value= colorSliderValue.innerText;
    });

const eraser = document.getElementById('eraser-btn');
    eraser.addEventListener('click' , ()  => { 
        penColor = 'white';
        
        
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






// const turboPen = document.getElementById('turbo-btn');
//     turboPen.addEventListener('click' , ()  => { 
//         penColor = randomHexClr();

//     });

