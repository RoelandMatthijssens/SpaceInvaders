class Alien {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.toDelete = false;
        this.direction = RIGHT;
        this.speed = speed;
    }
    show() {
        fill(255, 0, 255);
        noStroke();
        rect(this.x, this.y, this.size, this.size);
    }
    delete() {
        this.toDelete = true;
    }
    move() {
        var directionModifier = 1;
        if (this.direction === LEFT) {
            directionModifier = -1;
        }
        this.x += this.speed * directionModifier;
    }
    shiftDown() {
        this.y += this.speed;
    }
    update(hitSide) {
        if (hitSide) {
            this.direction = reverseDirection(this.direction);
            this.shiftDown();
        }
        this.move();
    }
    outOfBound(width) {
        return this.x + this.size > width || this.x < 0;
    }
}

