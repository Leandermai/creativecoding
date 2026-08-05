class Boid{
    constructor(){
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.acceleration = createVector();
    }

    // allign boids with local boids around it
    align(boids){
        let perception = 100;
        let steering = createVector();
        let total = 0;
        for(let other of boids){
            let d = dist(
                this.position.x,
                this.position.y, 
                other.position.x, 
                other.position.y
            );

            if(d < perception && other != this){
                steering.add(other.velocity);
                total++;
            }
        }
  
        if(total > 0){
            steering.div(total);
            steering.sub(this.velocity);
        }
        return steering;
    }

    flock(boid){
        let alignment = align(boids);
        this.acceleration = alignment;
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