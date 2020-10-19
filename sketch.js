var car,wall,speed,wheight;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  wheight = random(400,1500)
 car = createSprite(50, 200, 50, 50);
 car.shapeColor = "red";
 car.velocityX = speed;
 wall = createSprite(600,200,60,200);
 wall.shapeColor = "grey"
}

function draw() {
  background(255,255,255);  
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deform = 0.5 * wheight * speed * speed/22509;
    if(deform>180){
      car.shapeColor = "blue";

    }
    if(deform <= 180){
      car.shapeColor = "yellow";
    }
  }
  drawSprites();
}