const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var leftWall;
var rightWall;
var bridge;
var jointPoint;
var rightWallcon;
var stones=[];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

ground = new Base(0,650,windowWidth+1500,60);
leftWall= new Base(0,550,500,400);
rightWall= new Base(1400,550,500,400);
bridge= new Bridge(6,{x:230,y:350});
jointPoint= new Base(1200,300,40,20);
rightWallcon= new Link(bridge,jointPoint);
 

}

function draw() {
  background(51);
  Engine.update(engine);

  

  ground.show();
  fill("black");
  leftWall.show();
  rightWall.show();
  bridge.show();
  showStones();
  

}
function showStones(){
  if(stones.length>0){
    if(stones.length<8 && stones[stones.length-1].body.position.x<width-200){
    var pos=[-90,-120,-100,-80];
    var ypos=random(pos)
    var stone= new Stone(width-800,height-500,40,40,ypos)
    stones.push(stone);
      }
      for(var i=0;i<stones.length;i++){
        stones[i].show();
      }
  }
  else{
    var stone= new Stone(width-1000,height-500,40,40,-80)
    stones.push(stone);
  }
}

