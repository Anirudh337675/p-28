class Chain{
    constructor(bodyA,pointB){
      
        var c_options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.bodyA=bodyA
        this.pointB=pointB
        
        this.chain=Constraint.create(c_options);
        World.add(world,this.chain);
    }
    attach(body) 
    { this.chain.bodyA=body; }
    
      display(){

       
        if(this.chain.bodyA){
          var bodyA = this.chain.bodyA.position;
          var pointB = this.pointB;
       
          
        line(bodyA.x,bodyA.y, pointB.x,pointB.y);
        }
      }
      fly()
      {
          this.chain.bodyA=null;
      }
      
    }