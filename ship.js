function Ship(x, y, size){
    this.x = x;
    this.y = y;
    this.speed = 0.5;
    this.size = size;
    this.leftBoundary = 0;
    this.rightBoundary;

    this.setBoundaries = function setBoundaries(left, right){
        this.leftBoundary = left;
        this.rightBoundary = right;
    };

    this.show = function(){
        stroke(255);
        noFill();
        triangle(
            this.x, this.y,
            this.x-(this.size/2), this.y+this.size,
            this.x+(this.size/2), this.y+this.size
        );
    };

    this.move = function move(direction){
        var speed = this.speed * this.size;
        if(direction === LEFT){
            this.x -= speed;
        } else if(direction === RIGHT){
            this.x += speed;
        }
        if(this.x < this.leftBoundary){
            this.x = this.leftBoundary;
        }
        if(this.x > this.rightBoundary){
            this.x = this.rightBoundary;
        }
    };

    this.shoot = function shoot(){
        return new Bullet(this.x, this.y, this.size);
    }
}
