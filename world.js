class World {
    constructor(height, width, scl) {
        this.height = height;
        this.width = width;
        this.scl = scl;
        this.aliens = [];
        this.bullets = [];
        this.gameSpeed = 1;
        this.aliensPerRow = floor(this.width * 0.7 / (this.scl + 5)); // fill about 3/4th of the screen
        this.alienRows = 1;
    }
    populateAliens() {
        var heightOffset = 0;
        for (var i = 0; i < this.alienRows; i++) {
            this.populateAlienRow(heightOffset, this.aliensPerRow);
            heightOffset += this.scl + 5;
        }
    };
    populateAlienRow(heightOffset, amount) {
        var offset = 0;
        while (amount > 0) {
            var alien = new Alien(offset, heightOffset, this.scl, this.gameSpeed);
            this.aliens.push(alien);
            amount--;
            offset += this.scl + 5;
        }
    };
    createShip() {
        this.ship = new Ship(this.width / 2, this.height - this.scl * 1.5, this.scl);
        return this.ship;
    };
    update() {
        var self = this;
        this.removeDeletedEntities();
        var hitSide = this.aliens.filter(function (i) {
            return i.outOfBound(self.width, self.height);
        }).length > 0;
        this.aliens.map(function (i) { i.update(hitSide); });
        this.bullets.map(function (i) { i.update(self); });
        if (this.won()) {
            console.log('WON');
            this.gameSpeed += 2;
            this.alienRows += 1;
            this.populateAliens();
        }
        if (this.lost()) {
            console.log('GAME OVER');
            this.gameSpeed = 1;
            this.alienRows = 1;
            this.aliens = [];
            this.populateAliens();
        }
    };
    won() {
        return this.aliens.length === 0;
    };
    lost() {
        var self = this;
        return this.aliens.filter(function (i) {
            return i.y > self.height;
        }).length > 0;
    };
    show() {
        this.aliens.map(function (i) { i.show(); });
        this.bullets.map(function (i) { i.show(); });
        this.ship.show();
    };
    removeDeletedEntities() {
        this.bullets = this.bullets.filter(function (i) { return !i.toDelete; });
        this.aliens = this.aliens.filter(function (i) { return !i.toDelete; });
    };
}

