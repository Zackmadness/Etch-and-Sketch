const container = document.getElementById('container');

const gridSlider = document.getElementById('gridSize');
const gridValue = document.getElementById('gridValue');

const colorPicker = document.getElementById('colorPicker');

const blackBtn = document.getElementById('blackBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');

let currentColor = '#000000';
let currentMode = 'color';
let mouseDown = false;

document.body.addEventListener('mousedown', () => {
    mouseDown = true;
});

document.body.addEventListener('mouseup', () => {
    mouseDown = false;
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function paint(square) {

    if (currentMode === 'rainbow') {
        square.style.backgroundColor = randomColor();
    }
    else if (currentMode === 'eraser') {
        square.style.backgroundColor = 'white';
    }
    else {
        square.style.backgroundColor = currentColor;
    }
}

function createGrid(size) {

    container.innerHTML = '';

    container.style.gridTemplateColumns =
        `repeat(${size}, 1fr)`;

    container.style.gridTemplateRows =
        `repeat(${size}, 1fr)`;

    const totalSquares = size * size;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totalSquares; i++) {

        const square = document.createElement('div');

        square.classList.add('grid-square');

        square.addEventListener('mousedown', () => {
            paint(square);
        });

        square.addEventListener('mouseover', () => {
            if (!mouseDown) return;
            paint(square);
        });

        fragment.appendChild(square);
    }

    container.appendChild(fragment);
}

function clearGrid() {

    document
        .querySelectorAll('.grid-square')
        .forEach(square => {
            square.style.backgroundColor = 'white';
        });

}

gridSlider.addEventListener('input', (e) => {

    const size = e.target.value;

    gridValue.textContent =
        `${size} x ${size}`;

    createGrid(size);

});

colorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value;
    currentMode = 'color';
});

blackBtn.addEventListener('click', () => {
    currentColor = '#000000';
    currentMode = 'color';
});

rainbowBtn.addEventListener('click', () => {
    currentMode = 'rainbow';
});

eraserBtn.addEventListener('click', () => {
    currentMode = 'eraser';
});

clearBtn.addEventListener('click', clearGrid);

createGrid(16);