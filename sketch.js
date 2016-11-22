var ship;
var aliens = []

function setup() {
    createCanvas(500, 500);
    ship = new Ship(50, 50, 30);
    aliens.push(new Alien(100, 50, 15));
}

function draw() {
    background(51);
    ship.show();
    for(var index in aliens){
        var alien = alien[index];
        alien.show();
    }
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        ship.move(RIGHT);
    }
    if(keyCode === LEFT_ARROW){
        ship.move(LEFT);
    }
}
