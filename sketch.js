//creating the variables
var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;
var garden,gardenImg;

function preload() {

    //loading the images
    catImg=loadImage("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadImage("images/cat4.png");
    mouseImg=loadImage("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadImage("images/mouse4.png");
    gardenImg=loadImage("images/garden.png");
   
}

function setup(){

    //creating the canvas
    createCanvas(800,800);
    
    //creating the cat
    cat=createSprite(700,600);
    cat.addImage("sitting",catImg);
    cat.addAnimation("walking",catImg2);
    cat.addImage("standing",catImg3);
    cat.scale=0.1;
    cat.setCollider("rectangle",0,0,900,900);

    //creating the mouse
    mouse=createSprite(100,600);
    mouse.addImage("holdingCheese",mouseImg);
    mouse.addAnimation("teasing",mouseImg2);
    mouse.addImage("looking",mouseImg3);
    mouse.scale=0.1;
    mouse.setCollider("rectangle",0,0,900,900);
}

function draw() {

    //colour of the background
    background(gardenImg);

    //calling the function
    catMoving();
    
    //position of the your mouse on the monitor
    textSize(20);
    fill("black");
    text(mouseX +','+ mouseY,350,100);

    //when cat touches the mouse
    if(cat.x - mouse.x <= (cat.width + mouse.width)/2){
        cat.velocityX=0;
        cat.changeImage("standing");
        mouse.changeImage("looking");
    }

    //to draw the sprites
    drawSprites();
}


    //when left arrow key is pressed
    function catMoving(){
        if(keyCode===LEFT_ARROW){
            cat.velocityX=-5;
            cat.changeAnimation("walking");
            mouse.changeAnimation("teasing");
        }
    }