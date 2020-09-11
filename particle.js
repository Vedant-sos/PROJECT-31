class Particle{
    constructor(x,y,radius){
        var options={
            restitution:0.5
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.color=color(random(20,240),random(21,252),random(19,228))
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}