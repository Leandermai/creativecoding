let img;
let circle_size = 20;
let spacing = 25;
let min_size = 15;
let max_size = 25;

function preload(){
    img = loadImage(
        "http://127.0.0.1:5500/week1_package/image_pixelation/src/dominik-mayer-eldenring-insta.jpg"
    );
}

function setup(){
    createCanvas(1920, 1920);
    background(0);
    //falls Bild als Hintergrund sichtbar sein soll die Zeile verwenden
    //image(img, 0, 0);
}

function draw(){
    //Pixelation mit konstanten circles
    /*
    for(let i = 0; i < img.width; i += spacing){
        for(let j = 0; j < img.height; j += spacing){
            let c = img.get(i, j);
            fill(c);
            circle(i, j, circle_size);
        }
    }
    */

    for(let i = 0; i < img.width; i += spacing){
        for(let j = 0; j < img.height; j += spacing){
            let c = img.get(i, j);
            fill(c);
            
            //Circles werden von links nach rechts groeße
            //let size = map(i, 0, img.width, min_size, max_size);
            
            //Punkte gehen in Kurve und werden groeßer
            let progress = map(i, 0, img.width, 0, 1);
            let size = min_size + (max_size - min_size) * pow(progress, 1.3);
            let curve = pow(progress, 2) * 500;
            circle(i, j + curve, size);
        }
    }
}