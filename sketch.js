
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var count =0;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball();
	ground = new Ground(width/2,670,width,10);

	boundary1 = new Boundary(600,400,160,10);
	boundary2 = new Boundary(680,360,10,80);
	boundary3 = new Boundary(520,360,10,80);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  ball.display();
  boundary1.display();
  boundary2.display();
  boundary3.display();
  if(count == 0){
  trajectory();
  }
  drawSprites();
 console.log(ball.body.position.x); 
}
// Mam i am unable to set the velocity please help me in next coming session
/*function trajectory(){
	if(keyCode == 38){
		var h;
		h = 200;
		var d = 320;
		var vy,vx;

		vy =  Math.sqrt(2*10*h);
		vx = 2*10*d/(2*v+Math.sqrt(4*v*v-2*10*h));
		ball.body.velocity.x = vx;
		console.log(vx);
	}
}*/
function trajectory(){
	if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-35});
	count++;
}
}
	


