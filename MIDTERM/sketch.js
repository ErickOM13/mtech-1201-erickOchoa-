

let snake;
let xLoc, yLoc, rotation;

let obstacleXLocs = []
let obstacleYLocs = []
let obstacleDs = []

let numObstacles = 5
let crossedObstacle = false;
let pCrossedObstacle = false; 

let count = 0;

let g
let r;
function preload(){
  snake = loadImage("snake.png")
  print(snake);
  angleMode(DEGREES)
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  r =round(random(0,5))
  noFill()
  stroke(random(255), 0, random(255))
  strokeWeight(4) 
  g = createGraphics(width, height);
  g.background(255,100,0)

  for(let i = 0; i<numObstacles; i++){
   
    obstacleXLocs[i] = random(width/10,width)
    obstacleYLocs[i] = random(height, height/10)
    obstacleDs[i] = (50)
    }
    
    
    
  

  print(obstacleXLocs)

  xLoc = width/3
  yLoc = height/2
  rotation =180
  for(let i = 1; i<numObstacles; i++){
   
    obstacleXLocs[i] = random(500,500)
    obstacleYLocs[i] = random(height, height/10)
    obstacleDs[i] = (50)
    }
  for(let i = 2; i<numObstacles; i++){
   
    obstacleXLocs[i] = random(width,width/10)
    obstacleYLocs[i] = random(height, height/10)
    obstacleDs[i] = (50)
    }
    
    
    
  

  print(obstacleXLocs)

  xLoc = width/3
  yLoc = height/2
  rotation =180
    
    
  

  print(obstacleXLocs)

  xLoc = width/3
  yLoc = height/2
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
   text("WRONG", width/2, height/2)
   noFill()
   

 }


 if(pCrossedObstacle == false && crossedObstacle == true){

   count++
   print(count)
 }
 

 if(count==r){
   imageMode(CORNER);
   textSize(50)
   fill(0,255,100)
   image(g,0,0)
   text("YOU WON", width/3, height/2)
    noLoop()
 }




 pCrossedObstacle = crossedObstacle;
 
 
}


function obstacle(x, y, d){

  ellipse(x, y, d)


  if(dist(xLoc,yLoc, x,y) < d/2){
    crossedObstacle = true;  
      
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

  imageMode(CENTER);

 
  push()
  translate(x, y);
  rotate(+r)
  print(snake.width)
  image(snake,-100 ,0, snake.width/6, snake.height/6  )
  pop()
  
}


function mousePressed(){

}

