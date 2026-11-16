function setup(){
    createCanvas(1024, 1024);
    background(220);
    angleMode(DEGREES);
    rectMode(CENTER);
}


function draw(){
    translation(50, 50);
    fill(255);
    rect(0, 0, 50, 50);

    // get rotated idiot
    let rotation = frameCount * 0.01;
    rect(50, 50 , 50, 50);

}