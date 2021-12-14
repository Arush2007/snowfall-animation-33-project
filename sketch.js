var snowflake1;
var snowBackground
var boy1;



function preload(){
snowflake1= loadImage("snow4.webp");
snowBackground = loadImage("snow2.jpg");
boy1 = loadImage("boy.jpg");

}


function setup() {
  createCanvas(800,400);
   boy = createSprite(210, 360, 50, 50);
   boy.addImage(boy1)
   boy.scale = 0.06
  
}

function draw() {
  background(snowBackground);  
  snowAnimation();
  drawSprites();
}

function snowAnimation(){

  if(frameCount%60===0){
    
    var snowflake=createSprite(200,10,50,50);
    snowflake.velocityY=2;
    snowflake.addImage(snowflake1);
    snowflake.scale = 0.09
    var snowflake2=createSprite(300,10,50,50);
    snowflake2.velocityY=2;
    snowflake2.addImage(snowflake1);
    snowflake2.scale = 0.09
  }




}
