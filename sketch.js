var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  doraemon=createSprite(300,200,90,70)
  doraemon.velocityY=5
  nobita=createSprite(300,500,90,70)
  nobita.velocityY=-5;
  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(doraemon,nobita);
  drawSprites();
}

