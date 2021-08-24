class Ball{
    constructor(){
        var options = {
            restitution : 0.3,
            friction : 5,
            density : 0.4
        }
        this.body = Bodies.circle(200,200,20,options);
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        ellipse(0, 0, 40,40);
        pop();
    }
}