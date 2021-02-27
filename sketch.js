var helicopterIMG, helicopterSprite, packageSprite, packageSprite2,packageIMG;
var packageBody,packageBody2,ground;
var wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageSprite2=createSprite(width/2, 120, 30,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    wall1=createSprite(width/2,height-50,200,20);
	wall1.shapeColor=color("red");
	wall2=createSprite(510,610,20,100);
	wall2.shapeColor=color("red");
	wall3=createSprite(310,610,20,100);
	wall3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 210 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody2);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 

  packageSprite.collide(wall1);
  packageSprite2.collide(wall1);

  packageSprite.collide(wall2);
  packageSprite2.collide(wall2);

  packageSprite.collide(wall3);
  packageSprite2.collide(wall3);






  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
 Matter.Body.setStatic(packageBody,false);
 Matter.Body.setStatic(packageBody2,false);
    
  }
}



