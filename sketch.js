
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,paper1,box1,box2,box3


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground=Bodies.rectangle(400,650,800,5,{isStatic:true})
  
    World.add(world,ground)

	//Create the Bodies Here.
	paper1=new Paper(100,600,10)
	

  box1=new Box(650,660,100,20);
  box2=new Box(600,620,20,100);
  box3=new Box(700,620,20,100);

  Engine.run(engine)
	
}


function draw() {
 
  
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();


  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
    
    }
    
}

