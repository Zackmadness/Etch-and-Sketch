const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');

function createGrid(size) {
  container.innerHTML = '';
  
  const squareSize = 480 / size;
  
  const totalSquares = size * size;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    
    // Add hover effect
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = rgb(r, g, b);
    });
    
    container.appendChild(square);
  }
}

resizeBtn.addEventListener('click', () => {
  let userInput = prompt('Enter number of squares per side (max 100):');
  let size = parseInt(userInput);
  
  if (isNaN(size) || size <= 0 || size > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }
  
  createGrid(size);
});

// Initial load
createGrid(16);
