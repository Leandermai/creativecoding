class Boid{
    constructor(){
        this.position = createVector(width/2, height/2);
        this.velocity = p5.Vector.random2D();
        this.acceleration = createVector();
    }

    // allign boids with local boids around it
    align (boids){
        let perception = 100;
        let average = createVector();
        let total = 0;
        for(let other of boids){
            let d = dist(
                this.position.x,
                this.position.y, 
                other.position.x, 
                other.position.y
            );

            if(d < perception && other != this){
                average.add(other.velocity);
                total++;
            }
        }
        if(total > 0){
            average.div(total);
        }
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);

    }
    show(){
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}