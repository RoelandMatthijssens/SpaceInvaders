function Bullet(x, y, size){
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = -5; //negative value moves up
    this.size = size/3;
    this.toDelete = false;

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

    this.deleteIfOutOfBound = function deleteIfOutOfBound(width, height){
        if(this.x > width || this.x < 0 || this.y > width || this.y < 0)
            this.delete();
    };

    this.delete = function del(){
        this.toDelete = true;
    };

    this.destroyAliens = function destroyAliens(aliens) {
        var colidedAliens = this.checkCollision(aliens);
        if (colidedAliens.length > 0) {
            this.delete();
            for (var index in colidedAliens) {
                colidedAliens[index].delete();
            }
        }
    };

    this.update = function update(world){
        this.show();
        this.move();
        this.deleteIfOutOfBound(world.height, world.width)
        this.destroyAliens(world.aliens);
    };
}
