// Erick Ochoa Meza

// 
// 


function setup() {
  createCanvas(1000, 800, WEBGL);
 
}
function draw() {
  background(0,0,128);

  
//   rotateY(frameCount * 0.01);
//   rotateX(frameCount * 0.01);


  circle(0, 0, 205);
  fill(255,255,0)
  circle(0,0,185);

  
  

  
// rotateY(frameCount * 0.3);

  fill(200,0,0)
  triangle(-85, 85,0,-50, 85,85);


  push() 
  rotateY(frameCount * 0.01);  
  rect(-30, -30, 80, 80);

pop();

  

  
  
}

