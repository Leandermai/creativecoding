
let width = 1080;
let height = 720;
let invaderPixels = 7;

let colors = [];

function drawRect(i, j) {
    let pixel_size = height / invaderPixels;
    rect(pixel_size * j, pixel_size * i, pixel_size, pixel_size);
}

function setup() {
    createCanvas(width, height);
    background(220);
    noStroke();

    colors = [
        color(random(255), random(255), random(255)),
        color(random(255), random(255), random(255)),
        color(random(255), random(255), random(255))
    ];

    noLoop();
}

function draw() {
    background(220);

    for (let i = 0; i < invaderPixels; i++) {
        for (let j = 0; j < invaderPixels; j++) {

            let randomColor = colors[
                Math.floor(random(colors.length))
            ];

            if (i == j) {
                fill(randomColor);
                drawRect(i, j);
            } else {
                fill(randomColor);
                drawRect(i, j);
                drawRect(i, invaderPixels - 1 -j);
            }
        }
    }
}
