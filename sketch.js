var runner, coin, bar, obc1 ,obc2;
var running, jumping, coinImg, barImg;
var coinGroup, barGroup, obcGroup;
var bg,bgImg;

function preload(){
  running = loadAnimation("assets/r2.png", "assets/r3.png", "assets/r4.png","assets/r5.png","assets/r6.png","assets/r7.png","assets/r8.png");
  jumping = loadAnimation("assets/j1.png", "assets/j2.png", "assets/j3.png", "assets/j4.png", "assets/j5.png", "assets/r1.png");
  coinImg = loadImage("assets/coin.png");
  barImg = loadImage("assets/energy bar.png");
  obc1 = loadImage("assets/obcD.png");
  obc2= loadImage("assets/obcJ.png");
bgImg = loadImage("assets/bg.jpg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
runner=createSprite(windowWidth/2-700,windowHeight-150);
runner.addAnimation("run",running);
runner.addAnimation("jump",jumping);
runner.changeAnimation("run",running);
runner.scale=0.7;

bg=createSprite(windowWidth/2,windowHeight/2);
bg.addImage(bgImg);
bg.scale=1.4;
bg.depth=0;
}

function draw() {
  background(0);  
  drawSprites();
}