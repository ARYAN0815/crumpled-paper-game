
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var box1
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper1=new Paper(200,200,20);
  box1=new Box(600,635,200,10);
  box2=new Box(505,605,10,50);
  box3=new Box(695,605,10,50);
  ground=Bodies.rectangle(400,650,800,20,{isStatic:true});
  World.add(world,ground);
}


function draw() {
  background(255);
  Engine.update(engine);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
 
}
function keyPressed() {
	if (keyCode===UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});
	}
   }



