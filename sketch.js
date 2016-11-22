var ship;

function setup() {
    createCanvas(500, 500);
    ship = new Ship(50, 50, 30);
}

function draw() {
    background(51);
    ship.show();
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        ship.move(RIGHT);
    }
    if(keyCode === LEFT_ARROW){
        ship.move(LEFT);
    }
}
