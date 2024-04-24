const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;


// make canvas as big as screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// update when window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// draw a grid
const gridSize = 20;
const gridWidth = canvas.width / gridSize;
const gridHeight = canvas.height / gridSize;
for (let x = 0; x < gridWidth; x++) {
  for (let y = 0; y < gridHeight; y++) {
    ctx.strokeRect(x * gridSize, y * gridSize, gridSize, gridSize);
  }
}

function drawRectangle(x: number, y: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}

let playerX = 2;
let playerY = 2;

enum Direction {
    Up = 0,
    Down = 2,
    Left= 1,
    Right = 3,
}

let gameLoop = setInterval(() => {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw grid
}, 100)