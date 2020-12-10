var bullet,wall,thickness;
var speed,weight;
var clashingSound;
var bg,bgImage;

function preload(){
    bgImage=loadImage("OIP.jpg")
    clashingSound=loadSound("zapsplat_explosions_gas_boom_airy_designed_001_54857.mp3")
}

function setup(){
createCanvas(1200,400);    


bg=createSprite(300,300,1600,700);
bg.addImage(bgImage)
bg.scale=3.8;
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet =createSprite(50,200,70,10);
bullet.shapeColor="white";
wall=createSprite(1000,200,thickness,height/2)
wall.shapeColor="Blue"


}
 

function draw(){

    


bullet.velocityX=speed;
if(hasCollided(bullet,wall)){
    //console.log("Here")
    bullet.velocityX=0;
    
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
        wall.shapeColor="red"
        clashingSound.loop();
    }
    if(damage<10){
        wall.shapeColor="green"
        clashingSound.loop();
    }
}

drawSprites();
}
