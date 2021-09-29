import Ball from './classes/Ball.js'; // no `` on import
import Vector from './classes/Vector.js';
import {random} from './functions/lib.js' // {} if you want a single function from an import

 //variables declared in module (type"=module") are module scoped objects so we need no global scope
 
 

 const balls = []; //an array for multiple balls

    const $canvas = document.querySelector(`.drawing-surface`);
    const ctx = $canvas.getContext('2d');

    const mouse = new Vector($canvas.width / 2, $canvas.height / 2);
    
    const handleMouseMove = event => {
      mouse.x = event.offsetX;
      mouse.y = event.offsetY;
    };

 const animate = () => {
    //balls[0].ctx.clearRect(0,0,$canvas.clientWidth,$canvas.height);
    ctx.clearRect(0,0,$canvas.width,$canvas.height);
    balls.forEach(b => b.draw());

    requestAnimationFrame(animate);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const init = () => {
    //fill in the array for multiple balls
    //change the value of i for more balls
    for(let i=0;i<100;i++){
        balls.push(new Ball($canvas, mouse, random(0,$canvas.width),random(0,$canvas.height),`${getRandomColor()}`));
    }
    

    animate();
    $canvas.addEventListener('mousemove',handleMouseMove);
}

init();
