function Alien(x, y, size, speed){
    this.x = x;
    this.y = y;
    this.size = size;
    this.toDelete = false;
    this.direction = RIGHT;
    this.speed = speed;

    this.show = function(){
        fill(255, 0, 255);
        noStroke();
        rect(this.x, this.y, this.size, this.size);
    };

    this.delete = function del(){
        this.toDelete = true;
    };

    this.move = function move(){
        var directionModifier = 1;
        if(this.direction === LEFT){
            directionModifier = -1;
        }
        this.x += this.speed * directionModifier;
    };

    this.shiftDown = function shiftDown(){
        this.y += this.speed;
    };

    this.update = function update(hitSide){
        if(hitSide){
            this.direction = reverseDirection(this.direction);
            this.shiftDown();
        }
        this.move();
    };

    this.outOfBound = function outOfBound(width, height){
        return this.x+this.size > width || this.x < 0
    }
}
