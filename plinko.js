class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill(rgb(random(10,230),random(15,250),random(5,240)));
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
    }
}