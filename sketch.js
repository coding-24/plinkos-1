const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;

var particles=[];
var divisions=[];
var plinkos=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    ground=new Ground(10,780,2000,20);
    for(var k=0; k<=width; k=k+80) {
      divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=75; j<width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=75; j<width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j=50; j<width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for(var i=0; i<particles.length; i++){
    particles[i].display();
  }

  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }
  drawSprites();
}