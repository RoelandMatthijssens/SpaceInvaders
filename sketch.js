var world;
function setup() {
    var width = 700;
    var height = 400;
    createCanvas(width, height);
    world = new World(height, width, 20);
    ship = world.createShip();
    ship.setBoundaries(0, width);
    world.populateAliens();
    frameRate(60);
}

function draw() {
    background(51);
    checkInput();
    world.update();
    world.show();
}

function checkInput(){
    if(keyIsDown(RIGHT_ARROW)){
        ship.move(RIGHT);
    }
    if(keyIsDown(LEFT_ARROW)){
        ship.move(LEFT);
    }
}
function keyPressed(){
    if(keyCode === 32){ //space
        var bullet = ship.shoot();
        world.bullets.push(bullet);
    }
}
