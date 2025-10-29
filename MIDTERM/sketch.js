

let snake;
let xLoc, yLoc, rotation;

let obstacleXLocs = []
let obstacleYLocs = []
let obstacleDs = []

let numObstacles = 1
let crossedObstacle = false;
let pCrossedObstacle = false; 

let count = 0;

let g

function preload(){
  snake = loadImage("snake.png")
  print(snake);
  angleMode(DEGREES)
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  noFill()
  stroke(random(255), 0, random(255))
  
  g = createGraphics(width, height);
  g.background(255,100,0)

  for(let i = 0; i<numObstacles; i++){
    obstacleXLocs[i] = random(width,width/1.2)
    obstacleYLocs[i] = random(height, height/1.2)
    obstacleDs[i] = (50,50)
  }

  print(obstacleXLocs)

  xLoc = width/22
  yLoc = height/22
  rotation =180

}


function draw(){
 

 crossedObstacle = false;

 background(0,150,0)
 
for(let i = 0; i<numObstacles; i++){
  obstacle(obstacleXLocs[i], obstacleYLocs[i], obstacleDs[i])
}
 moveSnake()
 displaySnake(xLoc, yLoc, rotation);

 if(crossedObstacle == true){
   imageMode(CORNER);
   textSize(30)
   fill(255 ,100,100)
   image(g,0,0)
   text("NEXT LEVEL", width/2, height/2)
   noFill()
   

 }


 if(pCrossedObstacle == false && crossedObstacle == true){

   count++
   print(count)
 }
 

 if(count>5){
   imageMode(CORNER);
   textSize(80)
   fill(0,255,100)
   image(g,0,0)
   text("NEXT LEVEL", width/2, 100)
  noLoop()
 }




 pCrossedObstacle = crossedObstacle;
 
 
}


function obstacle(x, y, d){

  ellipse(x, y, d)


  if(dist(xLoc,yLoc, x,y) < d/2){
    crossedObstacle = true;  
    // background(255,100,0)
 }
 

 

}

function moveSnake(){
    if(keyIsDown(RIGHT_ARROW) === true){
      xLoc+=4;
      rotation = 0
    }
    if(keyIsDown(LEFT_ARROW) === true){
      xLoc-=4;
      rotation = 180
    }
      if(keyIsDown(UP_ARROW) === true){
      yLoc-=4;
      rotation = 270
    }
    if(keyIsDown(DOWN_ARROW) === true){
      yLoc+=4;
      rotation = 90
    }

    if(keyIsDown(RIGHT_ARROW) === true && keyIsDown(UP_ARROW) === true){
      rotation = -45
    }

    if(keyIsDown(RIGHT_ARROW) === true && keyIsDown(DOWN_ARROW) === true){
      rotation =  45
    }

    if(keyIsDown(LEFT_ARROW) === true && keyIsDown(UP_ARROW) === true){
      rotation = -135
    }
    if(keyIsDown(LEFT_ARROW) === true && keyIsDown(DOWN_ARROW) === true){
      rotation = - 225
    }

}
function displaySnake(x, y, r){

  imageMode(CENTER,CENTER,CENTER/2);

  // pass the x, y coordinates and the rotation in the argument
  push()
  translate(x, y);
  rotate(+r)
  print(snake.width)
  image(snake,0 ,0, snake.width/6, snake.height/6  )
  pop()
  
}


function mousePressed(){

}

