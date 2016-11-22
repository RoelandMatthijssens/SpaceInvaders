function World(height, width, scl){
    this.height = height;
    this.width = width;
    this.scl = scl;
    this.aliens = [];

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
        this.ship.show();
    };
}
