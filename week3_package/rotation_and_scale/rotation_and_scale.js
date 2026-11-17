let iterations = 100;
let scale = 1;

function setup(){
    createCanvas(1080, 720);
    rectMode(CENTER);
    angleMode(DEGREES);
    frameRate(30);
}

function draw(){
    background(220);
    translate(canvasWidth / 2, canvasHeight / 2);
    let angle = frameCount * 0.5;
    for(let i = 0; i < iterations; i++){
        scale(0.8);
        rotate(angle);
        rect(0, 0, 1080, 720); 
    }
}