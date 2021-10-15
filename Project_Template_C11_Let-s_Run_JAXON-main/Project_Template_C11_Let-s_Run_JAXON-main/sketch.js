var pathimg
var path
var walker
var walkanimation
var boywalker



function preload(){
pathimg=loadImage("path.png")
walkanimation=loadAnimation("Runner-1.png","Runner-2.png")


}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathimg)
  path.velocityY = 6
  path.scale=1.2
  boywalker=createSprite(200,270,45,50)
  boywalker.addAnimation("walkanimation",walkanimation)
  boywalker.scale=0.1
  

}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2
}
drawSprites()
boywalker.x=mouseX
boywalker.y=mouseY
}

