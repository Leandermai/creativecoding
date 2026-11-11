let seed;

function setup(){
    createCanvas(1024, 1024);
    background(180);
    noStroke();
    seed = floor(ranodm(1, 10));
}


function draw(){
    randomSeed(seed);
    // 8 Kreise pro Reihe
    let outerCircles = width / 8;
    fill(255);
    ellipseMode(CORNER);
    for(let i = 0; i < width; i += outerCircles){
        for(let j = 0; j < height; j += outerCircles){
            //let widthShift = random(-1, 1) * mouseX / outerCircles;
            //let heightShift = random(-1, 1) * mouseY / outerCircles;
            circle(i, j, outerCircles);
        }
    }
    /*
    let innerCircle = outerCircles / 4;
    // CENTER Mode weil wir in Mitte von outerCircle generieren
    ellipseMode(CENTER)
    fill(50);
    for(let i = innerCircle; i < width; i += outerCircles){
        for(let j = innerCircle; j < height; j += outerCircles){
            circle(i, j, innerCircle);
        }
    }
    */
}
