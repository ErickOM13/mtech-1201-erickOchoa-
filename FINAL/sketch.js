let snake;
let food;
let walls = [];
let state = 'MENU';
let btnPlay, btnRestart;

function setup() {
  createCanvas(600, 600);
  frameRate(60);

  btnPlay = createButton('PLAY');
  btnPlay.position(260, 300);
  btnPlay.mousePressed(startGame);

  btnRestart = createButton('RESTART');
  btnRestart.position(260, 350);
  btnRestart.mousePressed(startGame);
  btnRestart.hide();
}

function draw() {
  background(20);

  if (state === 'MENU') {
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text("SNAKE DARKNESS", 300, 200);
  } 
  else if (state === 'GAMEOVER') {
    fill(255, 0, 0);
    textSize(40);
    textAlign(CENTER);
    text("GAME OVER", 300, 200);
  } 
  else if (state === 'GAME') {
    fill(100);
    for (let i = 0; i < walls.length; i++) {
      rect(walls[i].x, walls[i].y, 50, 50);
    }

    food.show();
    snake.move();
    snake.show();

    let d = dist(snake.x, snake.y, food.x, food.y);
    if (d < 20) {
      snake.grow();
      food = new Food();
      walls.push({ x: random(width), y: random(height) });
    }

    if (snake.x < 0 || snake.x > width || snake.y < 0 || snake.y > height) {
      gameOver();
    }
    
    for (let wall of walls) {
       if (snake.x > wall.x && snake.x < wall.x + 50 && snake.y > wall.y && snake.y < wall.y + 50) {
         gameOver();
       }
    }

    let gradient = drawingContext.createRadialGradient(snake.x, snake.y, 50, snake.x, snake.y, 250);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
    drawingContext.fillStyle = gradient;
    rect(0, 0, width, height);
  }
}

function startGame() {
  state = 'GAME';
  walls = [];
  snake = new Snake();
  food = new Food();
  btnPlay.hide();
  btnRestart.hide();
}

function gameOver() {
  state = 'GAMEOVER';
  btnRestart.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) snake.setDir(0, -4);
  if (keyCode === DOWN_ARROW) snake.setDir(0, 4);
  if (keyCode === RIGHT_ARROW) snake.setDir(4, 0);
  if (keyCode === LEFT_ARROW) snake.setDir(-4, 0);
}

class Snake {
  constructor() {
    this.x = 300;
    this.y = 300;
    this.vx = 4;
    this.vy = 0;
    this.themovement = [];
    this.len = 10;
  }

  setDir(x, y) {
    this.vx = x;
    this.vy = y;
  }

  move() {
    this.themovement.push({ x: this.x, y: this.y });
    if (this.themovement.length > this.len) {
      this.themovement.shift();
    }
    this.x += this.vx;
    this.y += this.vy;
  }

  grow() {
    this.len += 15;
  }
//find distance between the first and the last ellipse that is behind, 
// 
  show() {
    //noStroke();
    fill(255);
    for (let i = 0; i < this.themovement.length; i++) {
      let r = map(i, 0, this.themovement.length, 5, 20);
      ellipse(this.themovement[i].x, this.themovement[i].y, r);


    }
    ellipse(this.x, this.y, 20);
    //blur(8);
  }
}

class Food {
  constructor() {
    this.x = random(20, 550);
    this.y = random(20, 550);
  }
  show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 40);
  }
}