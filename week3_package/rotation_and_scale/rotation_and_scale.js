
function setup(){
    createCanvas(1080, 720);
    rectMode(CENTER);
    //angleMode(DEGREES);
    frameRate(30);
}

function draw(){
    background(255);
    translate(1080 / 2, 720 / 2);

    let iterations = 100;
    let angle = frameCount * 0.1;

    for(let i = 0; i < iterations; i++){
        //get rotated idiot
        rotate(frameCount * 0.001);
        scale(0.95);
        fill(255);
        rect(0, 0, 1000, 700);
    }
}
