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
        var self = this;
        this.removeDeletedEntities();
        var hitSide = this.aliens.filter(function(i){
                return i.outOfBound(this.width, this.height)
            }).length > 0;
        this.aliens.map(function(i){i.update(hitSide)});
        this.bullets.map(function(i){i.update(self)});
        this.ship.show();
    };

    this.removeDeletedEntities = function removeDeletedEntities(){
        this.bullets = this.bullets.filter(function(i){return !i.toDelete});
        this.aliens = this.aliens.filter(function(i){return !i.toDelete});
    }
}
