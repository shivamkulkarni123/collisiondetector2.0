var fixedrect,movingrect,crackerbox1,crackerbox2;

function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 50);
 fixedrect.shapeColor="green"
movingrect=createSprite(550,250,50,50);
movingrect.shapeColor="green";
crackerbox1=createSprite(200,100,70,70);
crackerbox1.shapeColor="yellow";
crackerbox2=createSprite(200,300,70,70);
crackerbox2.shapeColor="yellow";
crackerbox1.velocityY=2;
crackerbox2.velocityY=-2;
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(isTouching(crackerbox1,movingrect)){
    crackerbox1.shapeColor="red";
    movingrect.shapeColor="red";
  } 
 else{crackerbox1.shapeColor="green";
movingrect.shapeColor="green";
  }
  bounceOff(crackerbox1,crackerbox2);
  drawSprites();
}


