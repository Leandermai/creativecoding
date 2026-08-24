class Boid{
    constructor(){
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 2;
    }

    edges(){
        if(this.position.x > width){
            this.position.x = 0;
        } else if(this.position.x < 0) {
            this.position.x = width;
        }
        if(this.position.y > height){
            this.position.y = 0;
        } else if(this.position.y < 0){
            this.position.y = height;
        }
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

    cohesion(boids){
        let perception = 50;
        let steering = createVector();
        let total = 0;
        for(let other of boids){
            let distance = distance(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );
            if(other != this && distance < perception){
                steering.add(other.position);
                toatl++;
            }
            if(total > 0){
                steering.div(total);
                steering.sub(this.position);
                steering.setMag(this.maxSpeed);
                steering.sub(this.velocity);
                steering.limit(this.maxforce);
            }
            return steering;
        }
    }

    flock(boid){
        this.acceleration.set(0, 0);
        let alignment = align(boids);
        let cohesion = cohesion(boids);
        this.acceleration = add(alignment);
        this.acceleration = add(cohesion);
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.maxSpeed(this.maxSpeed);

    }
    show(){
        strokeWeight(8);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}