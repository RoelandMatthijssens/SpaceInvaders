function World(height, width, scl){
    this.height = height;
    this.width = width;
    this.scl = scl;
    this.aliens = [];
    this.bullets = [];

    this.populateAliens = function populateAliens(amount){
        var offset = 0;
        while(amount > 0){
            var alien = new Alien(100+offset, 100, this.scl);
            this.aliens.push(alien);
            amount--;
            offset += this.scl + 5;
        }
    };

    this.createShip = function createShip(){
        this.ship = new Ship(this.width/2, this.height-this.scl*1.5, this.scl);
        return this.ship
    };

    this.show = function(){
        for(var index in this.aliens){
            var alien = this.aliens[index];
            alien.show();
        }
        for(var index in this.bullets) {
            var bullet = this.bullets[index];
            bullet.show();
            bullet.move();
            //remove the bullet from the world if it goes out of bound
            if (bullet.x > this.width || bullet.x < 0 || bullet.y > this.width || bullet.y < 0) {
                this.bullets.splice(index, 1);
            }
        }
        this.ship.show();
    };
}
