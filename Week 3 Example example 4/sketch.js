let col, col1, col2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke()
  strokeWeight(20)
  noFill()
  //noCursor()

  col1 = color ('#c2231b');
  col2 = color ('#00ffff');

  //col = color(150,0,0)

}

function draw() {
  

  // let r = map(mouseX, 0, width, 0,255);
  // let b = map(mouseX, 0, width, 255,0);
  // col = color(r ,0,b)

  let i = map(mouseX,0,width, 0,1)

  col = lerpColor(col1,col2,i)

  stroke(col);
  line(pmouseX, pmouseY, mouseX, mouseY)

  //filter(BLUR,6)


  //fill(col)
  //ellipse(mouseX,mouseY, 150)


}

  function mousePressed(){
    background(0);

    col1= color(random(255), random(255), random(255));
    col2= color(random(255), random(255), random(255));




}


  function keyPressed(){
    background(random(255),random(255),random(255));



 
  }
function mouseDragged(){
  


}  

