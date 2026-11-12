
function setup() {
    createCanvas(1024, 1024);
    background(0);

    fill(255, 0, 0);
    rect(100, 100, 100, 100);
}
let canvasWidth = 1024;
let canvasHeight = 1024;
let colors = [];

function drawInvader(width, height, invaderPixels) {
    let scaleX = width / invaderPixels;
    let scaleY = height / invaderPixels;
    let symmetricColumn = Math.floor(invaderPixels / 2);
    for (let i = 0; i < invaderPixels; i++) {
        let deltaY = i * scaleY;
        for (let j = 0; j < symmetricColumn; j++) {
            let randomColor = colors[Math.floor(random(colors.length))];
            fill(randomColor);
            rect(j * scaleX, deltaY, scaleX, scaleY);
            rect((invaderPixels - 1 - j) * scaleX, deltaY, scaleX, scaleY);
        }
        if (invaderPixels % 2 != 0) {
            let randomColor = colors[Math.floor(random(colors.length))];
            fill(randomColor);
            rect(symmetricColumn * scaleX, deltaY, scaleX, scaleY);
        }
    }
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    noStroke();
    background(0);
    colors = [
        color(random(255), random(255), random(255)),
        color(random(255), random(255), random(255)),
        color(random(255), random(255), random(255))
    ];
    noLoop();
}

function draw() {
    background(0);
    let size = 50;
    let spacing = 10;
    let rows = Math.floor(height / (size + spacing));
    let columns = Math.floor(width / (size + spacing));
    for (let i = 0; i < rows; i++) {
        let y = i * (size + spacing);
        for (let j = 0; j < columns; j++) {
            let x = j * (size + spacing);
            push();
            translate(x, y);
            drawInvader(size, size, 7);
            pop();
        }
    }
}