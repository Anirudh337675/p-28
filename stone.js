class Stone
{
    constructor(x,y,radius,options)
    {
          var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.5


        }
      
        this.radius=70
        this.body=  Matter.Bodies.circle(x,y,this.radius/2,options)
        this.image=loadImage("stone.png")
        World.add(world,this.body);
    }
    display()
    {
        var roc=this.body.position;
     
      
        imageMode(CENTER);
        image(this.image, roc.x, roc.y, this.radius/2,this.radius/2);
        
    }

}