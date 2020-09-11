const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];

var bgimg;
var DivisionHeight=300;
function preload(){
  bgimg=loadImage("starnight.png");
}


function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(240,750,480,20);
  for(var i=20;i<ground.width;i=i+40){
    plinkos.push(new Plinko(i,50));
  }
  for(var i=40;i<ground.width;i=i+40){
    plinkos.push(new Plinko(i,100));
  }
  for(var i=30;i<ground.width;i=i+50){
    plinkos.push(new Plinko(i,150));
  }
  for(var i=15;i<ground.width;i=i+50){
    plinkos.push(new Plinko(i,200));
  }
  for(var i=0;i<=ground.width;i=i+80){
    divisions.push(new Division(i,600,10,DivisionHeight));
  }
  
}
function draw() {
  background(bgimg);  
  
  if(frameCount % 60===0){
    particles.push(new Particle(random(40,440),20,10));
    }
  

  Engine.update(engine);
  //console.log(frameCount);
  drawSprites();
  ground.display();
  for(var i=0;i<particles.length;i++){
  particles[i].display();
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }
}