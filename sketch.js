var cat1Img,cat2Img,cat2Img,cat4Img,mouse1Img,mouse2Img,mouse3Img,mouse4Img,gardenImg
var cat,mouse
function preload() {
    cat1Img=loadImage("images/cat1.png")
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png") 
     
    cat4Img=loadImage("images/cat4.png")
    gardenImg=loadImage("images/garden.png")
    mouse1Img=loadImage("images/mouse1.png")
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png")

    mouse4Img=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(845,540,20,20)
    cat.addImage(cat1Img)
    cat.scale=0.1

    mouse=createSprite(200,650,20,20)
    mouse.addImage(mouse1Img)
    mouse.scale=0.1


    //create tom and jerry sprites here
    
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    //if(cat)
    keyPressed()
    drawSprites();
}


function keyPressed(){

    if(keyCode=== LEFT_ARROW){
        cat.velocityX=-3
        cat.addAnimation("catMoving",cat2Img)
        cat.changeAnimation("catMoving")
        mouse.addAnimation("mouseTeasing",mouse2Img)
        mouse.frameDelay=30;
        mouse.changeAnimation("mouseTeasing")

    }

  //For moving and changing animation write code here


}
