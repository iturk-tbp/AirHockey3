class Puck{
    constructor(x,y,vX,vY){
        this.x = x,
        this.y = y,
        this.image = pk,
        this.velocityX = +vX
        this.velocityY = -vY
    }
    movePuck(){
        this.x = this.x + this.velocityX;
        this.y = this.y + this.velocityY;
    }
    bouncePuck(){
        if(this.x>1400|| this.x<0){
            this.velocityX = this.velocityX*(-1)
        }
        if(this.y>500 || this.y<0){
            this.velocityY = this.velocityY*(-1)
        }
    }
    updatePuck(){
        database.ref("puck").update({
            x : this.x,
            y: this.y
        })
    }
    getPuck(){
        database.ref("puck/x").on("value", function(data){
            puck.x = data.val();
        })
        database.ref("puck/y").on("value", function(data){
            puck.y = data.val();
        })
    }
    display(){
        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}