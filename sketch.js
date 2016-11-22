var world;
function setup() {
    var height = 500;
    var width = 500;
    createCanvas(height, width);
    world = new World(height, width, 20);
    ship = world.createShip();
    ship.setBoundaries(0, width);
    world.populateAliens(10);
    frameRate(60);
}

function draw() {
    background(51);
    checkInput();
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
