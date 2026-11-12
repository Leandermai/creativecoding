let width = 1080;
let height = 1080;
let invaderPixels = 7;

let colors = [];

function drawRect(column, row) {
    let pixelSize = width / invaderPixels;
    rect(pixelSize * row, pixelSize * column, pixelSize, pixelSize);
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
        for (let j = 0; j < invaderPixels / 2; j++) {

            //nur random generiert float Zahl, deswegen math.floor -> rundet ab für ganze Zahlen
            let randomColor = colors[Math.floor(random(colors.length))];
            fill(randomColor);
            drawRect(i, j);
            drawRect(i, invaderPixels - 1 -j);
            }
        }
}

