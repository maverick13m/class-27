class thread {
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:348

        }
        this.thread = Matter.Constraint.create(options)
        World.add(world,this.thread)
    }
    display() {
        strokeWeight(6)
        line(this.thread.bodyA.position.x,this.thread.bodyA.position.y,this.thread.bodyB.position.x,this.thread.bodyB.position.y)

        
    }



}




















