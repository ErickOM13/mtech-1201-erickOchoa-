
let x, y
let xV = 4, yV = 3
let wasp;

function setup() {
  createCanvas(600, 600);
  x = width/2
  y = length
  frameRate(30)
  noStroke()
  
}

function draw() {
  background(100,20);

  

  if(x>width){
    xV = -xV;
  }
  if(y>height){
    yV = -yV;
  }
  if(x< 0){
    xV=-xV;
  }
  if(y< 0){
    yV=-yV;
  }

  circle(x + random(-50,50), y +random(-50,50), 50)

  fill(205,random(8,180),255)

  square(random(width), random(height), 50)

  fill(0,random(8,180),255)

  square( x , y ,50)

   x += random(xV);
   y += random(yV);

  // x += -1
   y+=yV

  print(x, y)
  
}


