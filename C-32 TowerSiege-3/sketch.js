const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg;
var polygon_img;
var backupImg
var score = 0;
var engine, world;


function preload() {
    polygon_img = loadImage("polygon.png");
    getBackgroundImage();
    backupImg = "White";
}

function setup() {
    var canvas = createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world;
    //getTime();



    ground = new Ground(450, 390, 900, 20);

    stand1 = new Ground(390, 300, 250, 10);
    //Level  - 1
    block1 = new Box(300, 275, 30, 40);
    block2 = new Box(330, 275, 30, 40);
    block3 = new Box(360, 275, 30, 40);
    block4 = new Box(390, 275, 30, 40);
    block5 = new Box(420, 275, 30, 40);
    block6 = new Box(450, 275, 30, 40);
    block7 = new Box(480, 275, 30, 40);
    //Level - 2
    block8 = new Box(330, 235, 30, 40);
    block9 = new Box(360, 234, 30, 40);
    block10 = new Box(390, 235, 30, 40);
    block11 = new Box(420, 235, 30, 40);
    block12 = new Box(450, 235, 30, 40);
    //Level - 3
    block13 = new Box(360, 195, 30, 40);
    block14 = new Box(390, 195, 30, 40);
    block15 = new Box(420, 195, 30, 40);
    //Level - 4
    block16 = new Box(390, 155, 30, 40);

    stand2 = new Ground(700, 200, 200, 10);
    //Stack - 1
    box1 = new Box(640, 175, 30, 40);
    box2 = new Box(670, 175, 30, 40);
    box3 = new Box(700, 175, 30, 40);
    box4 = new Box(730, 175, 30, 40);
    box5 = new Box(760, 175, 30, 40);
    //Stack - 2
    box6 = new Box(670, 135, 30, 40);
    box7 = new Box(700, 135, 30, 40);
    box8 = new Box(730, 135, 30, 40);
    //Stack - 3
    box9 = new Box(700, 95, 30, 40);



    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon)

    slingshot = new Slingshot(polygon, { x: 100, y: 200 })

}

function draw() {
    if (backgroundImg){
    background(backgroundImg)}
    else{
        background(backupImg)
    }
    textSize(20)
    text("Score : " + score, 750, 40);
   
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();
    stand1.display();

    //Level - 1
    fill(135, 206, 234)
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    //Level - 2
    fill(253, 191, 200)
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    //Level - 3
    fill(63, 224, 206)
    block13.display();
    block14.display();
    block15.display();

    //Level - 4
    fill(127, 127, 127)
    block16.display();

    fill("brown")
    stand2.display();
    //Stack - 1
    fill(135, 206, 234)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    //Stack - 2
    fill(63, 224, 206)
    box6.display();
    box7.display();
    box8.display();
    //Stack - 3
    fill(253, 191, 200)
    box9.display();


    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

   
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();



    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40)

    slingshot.display()
}

function mouseDragged() {

    Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY })

}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(polygon)
    }
}

async function getBackgroundImage() {

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    //console.log(responseJSON);
    var dateTime = responseJSON.datetime;
    console.log(dateTime);
    var hour = dateTime.slice(11, 13);
    console.log(hour);
    if (hour >= 7 && hour < 19) {
        backgroundImg = "lightblue" ; 
    }
    else {
        backgroundImg = "black" ; 

    }
}
