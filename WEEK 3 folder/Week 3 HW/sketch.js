// Erick Ochoa Meza
// I use copilot for the heart
// i really like the finish result.


let col, col1, col2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');
  //noStroke()
  strokeWeight(50)
  //noFill()
  //noCursor()
  

  col1 = color ('#3baed2ff');
  col2 = color ('#31f63eff');

  //col = color(150,0,0)

}

function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
  

function draw() {
  

  // let r = map(mouseX, 0, width, 0,255);
  // let b = map(mouseX, 0, width, 255,0);
  // col = color(r ,0,b)

  //let i = map(mouseY,0,width, 0,1)

  // col = lerpColor(col1,col2,i)

  if(mouseY>height/2){

    stroke(col1)
  }
  else{
    stroke(col2)
  }

  //stroke(col);
  //line(pmouseX, pmouseY, mouseX, mouseY)
  rect(0,mouseY,width,10)
  filter(BLUR,3)

  fill('red');
  noStroke();
  drawHeart(width / 2, height / 2.5, 200);

  //fill(col)
  //ellipse(mouseX,mouseY, 150)


}

  function mousePressed(){
    background('white');

    //col1= color(random(255), random(255), random(255));
    //col2= color(random(255), random(255), random(255));




}


  function keyPressed(r){
    background(random(255),random(255),random(255));



 
  }
function mouseDragged(){
  
}

// }  
// function draw(){
//   background('white')
 


//   triangle(300,300,100,300,300,100);
//   triangle(300,300,100,300,300,500);
//   triangle(300,300,500,300,300,100);
//   triangle(300,300,500,300,300,500);

//   cricle(200,200,Math.sqrt(200 * 200 + 200 * 200));
//   cricle(200,200,Math.sqrt(200 * 200 + 200 * 200));



// }
