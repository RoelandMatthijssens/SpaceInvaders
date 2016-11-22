function Alien(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.toDelete = false;
    this.direction = RIGHT;
    this.speed = 5;

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
        this.show();
    };

    this.outOfBound = function outOfBound(width, height){
        return this.x+this.size > width || this.x < 0 ||
            this.y+this.size > height || this.y < 0
    }
}
