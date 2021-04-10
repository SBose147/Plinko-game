const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divider
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divider = [];
var i ,k;
var d,j;


function setup() 
{
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  console.log(frameCount);
  
  ground = new Ground(400,800,1200,20);

  d = 0;
  for(var j = 0 ;j <= 6; j = j + 1)
  {
   divider.push (new Divider( d,800-divisionHeight/2,10,divisionHeight));
   d = d + 80;
  } 

  k = 10;
  for(i = 0; i < 10 ; i++)
 {
  plinkos.push(new Plinko( k,350,10));
  k= k + 50;
 }

 k = 25;
 for(i = 0; i < 9 ; i++)
 {
  plinkos.push(new Plinko( k,250,10));
  k= k + 50;
 }

 k = 10;
  for(i = 0; i < 10 ; i++)
 {
  plinkos.push(new Plinko( k,150,10));
  k= k + 50;
 }

 k = 25;
 for(i = 0; i < 9 ; i++)
 {
  plinkos.push(new Plinko( k,50,10));
  k= k + 50;
 }

  
}

function draw() 
{
  
  background(0);
  Engine.update(engine);
  
  ground.display();
  
  for(var  j = 0; j <divider.length; j++)
 {
  divider[j].display();
 }

 for(var  j = 0; j <plinkos.length; j++)
 {
  plinkos[j].display();
 }
   
 for(var  j = 0; j <plinkos.length; j++)
 {
  plinkos[j].display();
 }
   
 for(var  j = 0; j <plinkos.length; j++)
 {
  plinkos[j].display();
 }
 
 for(var  j = 0; j <plinkos.length; j++)
 {
  plinkos[j].display();
 }

 if(frameCount%90 === 0)
 {
   particles.push(new Particle(random(width/2-50,width/2+10),10,10))
 }

 for(var  j = 0; j <particles.length; j++)
 {
  particles[j].display();
 }
    
 drawSprites();

}



