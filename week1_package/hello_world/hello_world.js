let width = 1080;
let height = 720;

function setup(){
    createCanvas(width, height);
    colorMode(RGB, 255);
    background(220, 236, 201);

    greens = [
    color(163, 199, 109),
    color(98, 155, 69),
    color(40, 89, 67)
];

}


function draw(){
    frameRate(30);
    if(mouseIsPressed){
        frameRate(60);
    }
    noStroke();
    fill(random(greens));
    let random_x = random(width);
    let random_y = random(height);
    let size = random(10, 50)
    let circle_amount = 10;

    for(let i = 0; i < circle_amount; i++){
        circle(random_x, random_y, size);
    }
}
