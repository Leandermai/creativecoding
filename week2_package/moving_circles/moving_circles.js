let seed;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(180);
    noStroke();
    seed = floor(random(1, 10));
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    randomSeed(seed);
    // 8 Kreise pro Reihe
    let outerCircles = width / 16;
    fill(255);
    ellipseMode(CORNER);
    for(let i = 0; i < width; i += outerCircles){
        for(let j = 0; j < height; j += outerCircles){
            circle(i, j, outerCircles);
        }
    }

    let innerCircle = outerCircles / 2;
    // CENTER Mode weil wir in Mitte von outerCircle generieren
    ellipseMode(CENTER)
    fill(50);
    let widthShift = random(-1, 1) * mouseX / outerCircles;
    let heightShift = random(-1, 1) * mouseY / outerCircles;
    for(let i = innerCircle; i < width; i += outerCircles){
        for(let j = innerCircle; j < height; j += outerCircles){
            circle(i + widthShift, j + heightShift, innerCircle);
        }
    }
}
