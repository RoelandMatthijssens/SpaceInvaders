function Alien(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.toDelete = false;

    this.show = function(){
        fill(255, 0, 255);
        noStroke();
        rect(this.x, this.y, this.size, this.size);
    };

    this.delete = function del(){
        this.toDelete = true;
    }
}
