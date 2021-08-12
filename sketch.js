var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImg;
var obsatcle , ob1Img, ob2Img,ob3Img,ob4Img,ob5Img,ob6Img;


var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 cloudImg = loadImage("cloud.png");

 ob1Img = loadImage("obstacle1.png");
 ob2Img = loadImage("obstacle2.png");
 ob3Img = loadImage("obstacle3.png");
 ob4Img = loadImage("obstacle4.png");
 ob5Img = loadImage("obstacle5.png");
 ob6Img = loadImage("obstacle6.png");
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  //console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.isTouching(ground)) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  spawnObstacles();
 // console.log(frameCount);
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if(frameCount % 60 === 0){
 cloud = createSprite(610,100,10,10);
 cloud.velocityX = -3;
 cloud.addImage("cloud",cloudImg);
 cloud.scale = 0.6;
 cloud.y = Math.round(random(50,100));
 cloud.lifetime = 200;
 //console.log(cloud.depth)
 trex.depth = cloud.depth + 1;
 }
}

function spawnObstacles(){

  if(frameCount % 80 === 0){
    obstacle = createSprite(610,165,20,30);
    obstacle.velocityX = -3;
    obstacle.scale = 0.6;
    obstacle.lifetime = 200;
    var selectObstacle = Math.round(random(1,6));
    
    /*if(selectObstacle === 1){
       obstacle.addImage("ob1",ob1Img);
    }
    if(selectObstacle === 2){
      obstacle.addImage("ob2",ob2Img);
   }
   if(selectObstacle === 3){
    obstacle.addImage("ob3",ob3Img);
   }
   if(selectObstacle === 4){
   obstacle.addImage("ob4",ob4Img);
   }
  if(selectObstacle === 5){
  obstacle.addImage("ob5",ob5Img);
   }
  if(selectObstacle === 6){
  obstacle.addImage("ob6",ob6Img);
  }*/

  switch(selectObstacle){
      case 1:
        obstacle.addImage("ob1",ob1Img);
        break;

        case 2:
        obstacle.addImage("ob2",ob2Img);
        break;

        case 3:
        obstacle.addImage("ob3",ob3Img);
        break;

        case 4:
        obstacle.addImage("ob4",ob4Img);
        break;

        case 5:
        obstacle.addImage("ob5",ob5Img);
        break;

        case 6:
        obstacle.addImage("ob6",ob6Img);
        break;

        default:
        break;
  }
    
  }
}

