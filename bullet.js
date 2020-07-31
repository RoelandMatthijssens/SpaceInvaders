class Bullet {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.xspeed = 0;
        this.yspeed = -5; //negative value moves up
        this.size = size / 3;
        this.toDelete = false;
    }
    show() {
        noStroke();
        fill(150, 0, 250, 100);
        ellipse(this.x, this.y, this.size, this.size);
    };
    move() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    };
    checkCollision(aliens) {
        var self = this;
        return aliens.filter(function (alien) {
            return collideRectCircle(alien.x, alien.y, alien.size, alien.size, self.x, self.y, self.size);
        });
    };
    deleteIfOutOfBound(width, height) {
        if (this.x > width || this.x < 0 || this.y > height || this.y < 0)
            this.delete();
    };
    delete() {
        this.toDelete = true;
    };
    destroyAliens(aliens) {
        var colidedAliens = this.checkCollision(aliens);
        if (colidedAliens.length > 0) {
            this.delete();
            for (var index in colidedAliens) {
                colidedAliens[index].delete();
            }
        }
    };
    update(world) {
        this.move();
        this.deleteIfOutOfBound(world.width, world.height);
        this.destroyAliens(world.aliens);
    };
}

