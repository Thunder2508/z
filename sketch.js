
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy;
var ground;
var mango1;
var stone,launcher;
function preload()
{
	boy=loadImage("Images/boy1.png");
	tree = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	
	ground=new Ground(width/2,700,width,20);
  mango1 = new Mango(1100,200,30);
  mango2 = new Mango(1000,200,30);
  mango3 = new Mango(1000,300,30);
  mango4 = new Mango(1100,300,30);

	stone=new Stone(235,420,30);
    launcher = new Launcher(stone.body,{x:210,y:400});
}


function draw() {
  background(0);


  Engine.update(engine);
  image(boy,200,300,250,400);
  image(tree,800,100,500,600);
  //boy.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  launcher.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    launcher.fly();
}
function keyPressed()
{
  if(keyCode === 32){
    Matter.body.setPosition(stone.body, {x:235,y:420})
    launcher.attach(stone.body);
  }
}
function detectollision(stone,mango){
mangoBodyPosition=mango.Body.Position
stoneBodyPosition=stone.Body.position

var distance=dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r)
{
  Matter.Body.setStatic(mango.body,false);
}


}



