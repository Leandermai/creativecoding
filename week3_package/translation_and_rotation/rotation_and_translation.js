let seed = 0;
let cols = 12;
let rows = 24;
let rectSize = 50;
let maxRotationFactor = 0.7;

function setup(){
    createCanvas(1024, 1024);
    angleMode(DEGREES);
    rectMode(CORNER);
    frameRate(30);
}


function draw(){
    background(220);
    translate(10, 10);
    fill(255);
    randomSeed(seed);

    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            push();
            translate(i * rectSize, j * rectSize)

            //get rotated idiot
            let rotationFactor = sin(frameCount) * maxRotationFactor;
            translate(rotationFactor * random(-1, 1) * j, rotationFactor * random(-1, 1) * j);
            rotate(rotationFactor * random(-1, 1) * j);

            rect(0, 0, rectSize, rectSize);
            pop();
        }
    }
}