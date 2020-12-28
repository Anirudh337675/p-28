class Boy
{
    constructor(x,y,width,height)
    {
       var options={
           isStatic:true,
           restitution:0,
           density:1.2,
           friction:1
       }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("boy.png")
        World.add(world,this.body);
    }
    display()
    {
        var ron=this.body.position;
        imageMode(CENTER);
        image(this.image, ron.x, ron.y, this.width, this.height);
        
    }

}