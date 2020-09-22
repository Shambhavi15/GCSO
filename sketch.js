var car,wall;
var weight,speed;
var deformation;

function setup() {
  weight=random(400,1500);
  speed=random(55,90);
  createCanvas(1600,400);
  wall=createSprite(1200,200,80,200);
  car=createSprite(50,200,50,20);
  car.velocityX = speed;
  car.shapeColor=color(255);
  wall.shapeColor=color(80,80,80);
  wall.depth=car.depth+1
} 
function draw()
{
  background(0,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 *weight * speed * speed/22509;

    if(deformation>180){
      car.shapeColor="green";
    }

    if(deformation<180 &&deformation>100){
      car.shapeColor="red";
    }

   if(deformation<100){
     car.shapeColor="yellow";
   }
  }
  drawSprites();
}
