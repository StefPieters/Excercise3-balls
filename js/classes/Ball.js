import {random} from '../functions/lib.js';
import Vector from './Vector.js';
class Ball{
    constructor($canvas, mouse, x, y, color){
    this.$canvas = $canvas;
    this.ctx = $canvas.getContext('2d');
    this.color = color;
    this.size = random(10,11);
    this.mouse = mouse;

    // this.velocityX = 1;
    // this.velocityY = 1.3;
    // this.x = x;
    // this.y = y;

    this.location = new Vector(x,y);
    this.velocity = new Vector(5, 10);
    this.acceleration = new Vector(-0.001, 0.01);
    }

    draw(){

  
    const direction = new Vector(this.mouse.x, this.mouse.y);
    direction.subtract(this.location);
    direction.normalize();
    direction.multiply(0.5);
    this.acceleration = direction;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.location.add(this.velocity);

    this.location.add(this.velocity); //add a velocity to current location (makes ball move)
    // generate a decimal (float) between -0.9999 and 0.9999
    this.acceleration.x = 1 - Math.random() * 2; // makes the balls go in a random x direction
    this.acceleration.y = 1 - Math.random() * 2; // makes the balls go in a random y direction
    this.velocity.add(this.acceleration); //add a acceleration to current velocity (makes ball go faster)
    this.checkCollision(); //check if it hits the border

    //draws circle
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.location.x,this.location.y,this.size,0,Math.PI*2)
    this.ctx.fill();
    this.ctx.closePath();

    }
//if x is too far it will go back to 0 same with y location   
    checkCollision(){
        if (this.location.x > this.$canvas.width) {
            this.location.x = 0;
            }
            if (this.location.x < 0) {
            this.location.x = this.$canvas.width;
            }
        if (this.location.y > this.$canvas.width) {
            this.location.y = 0;
            }
            if (this.location.y < 0) {
            this.location.y = this.$canvas.width;
            }
    }

    }
    

    export default Ball;