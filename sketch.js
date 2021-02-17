var bullet, wall, thickness;
var speed, weight;
 


function setup() {
  createCanvas(1600,400);
  thickness=random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color("80, 80, 80");
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor=color("white");
  speed = random(223, 321);
  weight = random(30, 52);
  bullet.velocityX = speed;
}

function draw() {
  background("black");  
  hasCollided(bullet, wall);
  drawSprites();
}

function hasCollided(bullet, wall){
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage<10)
    {
      wall.shapeColor=color("green");
    }
    else
    {
      wall.shapeColor=color("red");
    }
  }
}