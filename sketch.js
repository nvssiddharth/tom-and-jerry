//creating the variables
var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;
var garden,gardenImg;

function preload() {

    //loading the images
    catImg=loadImage("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3=loadImage("cat4.png");
    mouseImg=loadImage("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadImage("mouse4.png");
    gardenImg=loadImage("garden.png");
   
}

function setup(){

    //creating the canvas
    createCanvas(800,800);
    
    //creating the cat
    cat=createSprite(700,600);
    cat.addImage("sitting",catImg);
    cat.scale=0.1;
    cat.setCollider("rectangle",0,0,750,750);

    //creating the mouse
    mouse=createSprite(100,600);
    mouse.addImage("holdingCheese",mouseImg);
    mouse.scale=0.1;
    mouse.setCollider("rectangle",0,0,750,750);
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
        cat.addImage("standing",catImg3);
        cat.changeImage("standing");
        mouse.addImage("looking",mouseImg3);
        mouse.changeImage("looking");
    }

    //to draw the sprites
    drawSprites();
}


    //when left arrow key is pressed
    function catMoving(){
        if(keyDown(LEFT_ARROW)){
            cat.velocityX=-5;
            cat.addAnimation("walking",catImg2);
            cat.changeAnimation("walking");
            mouse.addAnimation("teasing",mouseImg2);
            mouse.changeAnimation("teasing");
        }
    }
