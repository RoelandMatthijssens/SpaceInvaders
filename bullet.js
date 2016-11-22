function Bullet(x, y, size){
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = -5; //negative value moves up
    this.size = size/3;

    this.show = function(){
        noStroke();
        fill(150, 0, 250, 100);
        ellipse(this.x, this.y, this.size, this.size);
    };

    this.move = function move(){
        this.x += this.xspeed;
        this.y += this.yspeed;
    };

    this.checkCollision = function checkCollision(aliens){
        var self = this;
        return aliens.filter(function (alien) {
            return collideRectCircle(
                alien.x, alien.y, alien.size, alien.size,
                self.x, self.y, self.size
            );
        })
    };
}
