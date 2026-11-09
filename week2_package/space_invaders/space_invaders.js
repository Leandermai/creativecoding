let width = 1080;
let height = 720;
let invaderPixels = 7;
let spacing = 40;


function drawRect(i, j){
    let pixel_size = width / invaderPixels;
    rect(pixel_size * j, pixel_size * i, pixel_size, pixel_size);
}

function setup(){
    createCanvas(width, height);
    background(220);
    noStroke();

    let colors = [
    color(random),
    color(random),
    color(random),
];
}

function draw(){
    for(let i = 0; i < invaderPixels; i++){
        for(let j = 0; j < invaderPixels; j++){
            if(i == j){
                fill(colors(random));
                drawRect(i, j);
            } else {
               fill(colors(random));
                drawRect(i, j);
                drawRect(invaderPixels - 1 - j, i);
            }   
        }
    }
}