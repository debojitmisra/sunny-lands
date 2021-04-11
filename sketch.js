var ground, groundImage; 
var tree,treeImage
var shrooms,shroomImage;
var eagle,eagleImage;
var player,player_run,player_jump,player_hurt;
var brick,brickGroup,brickImage;
var space_control=0


function preload(){
  brickImage=loadImage('artwork/Environment/brick.png')
  background_1=loadImage('artwork/Environment/back.png')
  groundImage=loadImage('artwork/Environment/ground.jpg')
  house=loadImage("artwork/Environment/house.png")
  treeImage=loadImage('artwork/Environment/props/tree.png')
  shroomsImage=loadImage('artwork/Environment/props/shrooms.png')
  eagleImage=loadAnimation('artwork/Sprites/Enemies/eagle/eagle1.png',
                            'artwork/Sprites/Enemies/eagle/eagle2.png',
                            'artwork/Sprites/Enemies/eagle/eagle3.png',
                            'artwork/Sprites/Enemies/eagle/eagle4.png')
  player_run=loadAnimation('artwork/Sprites/player/run/player-run-1.png',
                            'artwork/Sprites/player/run/player-run-2.png',
                            'artwork/Sprites/player/run/player-run-3.png',
                            'artwork/Sprites/player/run/player-run-4.png',
                            'artwork/Sprites/player/run/player-run-5.png',
                            'artwork/Sprites/player/run/player-run-6.png')
  player_jump=loadAnimation('artwork/sprites/player/jump/player-jump-1.png',
                            'artwork/sprites/player/jump/player-jump-2.png')
  player_hurt=loadAnimation('artwork/sprites/player/jump/player-jump-1.png',
                            'artwork/sprites/player/jump/player-jump-2.png')
  player_run2=loadAnimation('artwork/Sprites/player/run/left.png',
  'artwork/Sprites/player/run/left2.png',
  'artwork/Sprites/player/run/left3.png',
  'artwork/Sprites/player/run/left4.png',
  'artwork/Sprites/player/run/left5.png',
  'artwork/Sprites/player/run/left6.png')                                                   
  


}

function setup() {
  createCanvas(1900,1500);
  player = createSprite(400,1100,100,100)
  player.addAnimation('running',player_run)
  player.addAnimation('running2',player_run2)

  player.addAnimation('jumping',player_jump)
  player.scale=4;
  invisibleGround=createSprite(900,1250,2000,10)
  invisibleGround.visible=false
  brickGroup=new Group()

}



function draw() {
  background('black'); 
  imageMode(CENTER) 
  image(background_1,950,750,1900,1500)
  image(house,400,1100,250,250)
  image(treeImage,1700,1100,250,250)
  image(groundImage,950,1450,1900,450)
  image(groundImage,1150,1450,1900,450)
  image(shroomsImage,1550,1182,80,80)

  // spawnBricks(200,200,80,15,10,15)
  spawnEnemy(200,220,80,80);

  spawnStairs(300,400,30,5,10,1,'down')
  spawnStairs(900,1000,30,5,10,1,'up')

  player.animation.frameDelay=2

  if(keyDown('right')){
   player.x=player.x+10
   player.changeAnimation('running')
  }
  if(keyDown('left')){
    player.x=player.x-10
    player.changeAnimation('running2')
   
  }
  if(keyDown('space')){
    space_control++
   player.velocityY=-10
   player.changeAnimation('jumping',player_jump)
  }
  // if(space_control>=7){
  //   player.velocityY=5
  // }
  // setTimeout(() => {
  //   space_control=0
  // }, 3000);
  // player.changeAnimation('running')
  //giving gravity to the player
  player.velocityY=player.velocityY+1
  player.collide(brickGroup)
  player.collide(invisibleGround)
  drawSprites();
}
// can we do edit in our image and change the animation on the left side


function spawnEnemy() {
  //write code here to spawn the eagles
  if(frameCount%120===0){
    eagle=createSprite(1900,200,80,80)
    eagle.addAnimation('flying',eagleImage);
    eagle.animation.frameDelay=2
    eagle.scale = 2;
    eagle.velocityX = -15;
    eagle.y=Math.round(random(40,150))
      //assign lifetime to the variable
    eagle.lifetime = 400;
  }
 

}





function spawnStairs(x,y,w,h,rows,columns,direction){
  // x,y is starting position for the brick line
  
  for(var i=0;i<rows;i++){
   
    for(var j=0;j<columns;j++){
      brick =createSprite(x,y,w,h)
      brick.addImage(brickImage)
      brick.scale=0.5
      x+=w+50
      brickGroup.add(brick)
      
      
    }
    if (direction==='down'){
      y+=30
    }else if(direction==='up'){
     y-=30
    }
  }  
  
}





// function spawnBrick(x,y,w,h,rows,columns,a,imageT){
//   var original_x=x;
//   for(var i=0;i<rows;i++){
//     y+=a;
//     x=original_x
//     for(var j=0;j<columns;j++){
//       brick=createSprite(x,y,w,h);
//       brick.addImage(imageT);
//       brick.scale=0.535;
//       x+=60;
//       brickGroup.add(brick);
//     }
  
//   }
// }



// function spawnGround(x,y,w,h,rows,columns){
//   // x,y is starting position for the brick line
//   for(var i=0;i<rows;i++){

//     for(var j=0;j<columns;j++){
//       brick =createSprite(x,y,w,h)
//       brick.addImage(groundImage)
//       brick.scale=0.5
//       x+=w
      
      
//     }
//     if (direction==='right'){
//       x+=30
//     }else if(direction==='left'){
//       x-=30

//     }
    
//   }  
  
// }