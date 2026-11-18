function setup(){
    createCanvas(1024, 720);
    background(220);
    stroke(0, 100);
    strokeWeight(width / 40);
}

function draw(){
    let symmetry = 6;
    let centerX = width / 2;
    let centerY = height / 2;
    let mX = mouseX - centerX;
    let mY = mouseY - centerY;
    let pmX = pmouseX - centerX;
    let pmY = pmouseY - centerY;

    translate(centerX, centerY)
    if(mouseIsPressed){
        for(let i = 0; i < symmetry; i++){
            push();
            rotate(radians(360 / symmetry));
            line(mX, mY, pmX, pmY);
            scale(-1, 1);
            line(mX, mY, pmX, pmY);
            pop();
        }
    }
}