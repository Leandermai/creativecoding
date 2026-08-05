const flock = [];

function setup() {
    createCanvas(640, 360);
    frameRate(60);
    for(let i = 0; i < 100; i++){
        flock.push(new Boid());
    }
}

function draw(){
    background(51);
    for(let boid of flock){
        boid.align(flock);
        boid.update();
        boid.show();
    }
}
