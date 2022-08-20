const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width=innerWidth;
canvas.height=innerHeight;
const gravity = 0.5;
class Player{
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.velocity={
            x:0,
            y:1

        }
        this.width=30
        this.height=30
    }
    draw(){
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    update(){
        this.draw()
        this.position.y+= this.velocity.y
        this.position.x+=this.velocity.x
        if(this.position.y+this.height+this.velocity.y<=canvas.height){
            this.velocity.y+=gravity
        }else{
            this.velocity.y=0;
           
        }
        
    }

   
}
const player = new Player();
const keys={
    right:{
        pressed:false,

    },
    left:{
        pressed:true,
    }

}
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height);
    player.update();
    if (keys.right.pressed) {
        
        
    }else if(keys.left.pressed){
        
    }
    else{
        player.velocity.x=0;
    }
}
animate()
addEventListener('keydown',({keyCode})=>{
    switch (keyCode) {
        case 65:
            keys.right.pressed=true
         player.velocity.x=-10;
        break;
    case 83:
        player.velocity.y+=0.020;
        break; 

    case 68:
        player.velocity.x=10;
        keys.right.pressed=true
        break; 
    case 87:
        player.velocity.y-=20;
        break;
        
    }
    console.log(keys.right.pressed);
})

addEventListener('keyup',({keyCode})=>{
    
    switch (keyCode) {
        case 65:
            keys.left.pressed=false
            player.velocity.x=0;
            break;
    case 83:
        player.velocity.y+=0;
        break; 

    case 68:
        keys.right.pressed=false
        player.velocity.x=0;
        break; 
    case 87:
        player.velocity.y-=0;
        break;
        
    }
})