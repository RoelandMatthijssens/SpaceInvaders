function Ship(x, y, size){
    this.x = x;
    this.y = y;
    this.speed = 0.5;
    this.size = size;

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
    }
}
