var world;
function setup() {
    var height = 500;
    var width = 500;
    createCanvas(height, width);
    world = new World(height, width, 20);
    ship = world.createShip();
    world.populateAliens(10);
}

function draw() {
    background(51);
    world.show();
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        ship.move(RIGHT);
    }
    if(keyCode === LEFT_ARROW){
        ship.move(LEFT);
    }
}
