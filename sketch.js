function preload() {
  bubblesjet = loadImage("fishnaut-removebg-preview.png")
  luna = loadImage("moon-removebg-preview.png")
  spacepurple = loadImage("spacebackground.png")
  bigceres = loadImage("bigasteroid-removebg-preview.png")
  magsteroid = loadImage("magmasteroid-removebg-preview.png")
  mediumrocks = loadImage("mediumasteroid-removebg-preview.png")
  smallrocks = loadImage("smallasteroid-removebg-preview.png")
  goldrocks = loadImage("smallrockasteroid-removebg-preview.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  cenario = createSprite(800, 400, 50, 50);
  cenario.addImage(spacepurple)
  cenario.scale = 1.5
  jetbubs = createSprite(width-1350, height/2,)
  jetbubs.addImage(bubblesjet)
  jetbubs.scale = 0.5
}

function draw() {
  background(255,255,255); 
  if(keyIsDown(UP_ARROW)){
    jetbubs.y = jetbubs.y - 5
  } 
  if(keyIsDown(DOWN_ARROW)){
    jetbubs.y = jetbubs.y + 5
  }
  createceres()
  mediumceres()
  smallceres()
  smallbrownasteroidceres()
  fireasteroid()
  drawSprites();
}
function createceres(){
  if(frameCount%60 === 0){
    rockceres = createSprite(width,height/2)
    rockceres.addImage(bigceres)
    rockceres.velocityX = -5
    rockceres.y = Math.round(random(0,height))
    rockceres.lifetime = 1000
  }
}
function mediumceres(){
  if(frameCount%90 === 0){
    ballceres = createSprite(width,height/2)
    ballceres.addImage(mediumrocks)
    ballceres.velocityX = -3
    ballceres.y = Math.round(random(0,height))
    ballceres.lifetime = 1000
  }
}
function smallceres(){
  if(frameCount%130 === 0){
    miniceres = createSprite(width,height/2)
    miniceres.addImage(smallrocks)
    miniceres.velocityX = -2
    miniceres.y = Math.round(random(0,height))
    miniceres.lifetime = 1500
  }
}
function smallbrownasteroidceres(){
  if(frameCount%200 === 0){
    asterbrown = createSprite(width,height/2)
    asterbrown.addImage(goldrocks)
    asterbrown.velocityX = -8
    asterbrown.y = Math.round(random(0,height))
    asterbrown.scale = Math.round(random(0.5,1))
    asterbrown.lifetime = 1000
  }
}
function fireasteroid(){
  if(frameCount%500 === 0){
    astermagma = createSprite(width,height/2)
    astermagma.addImage(magsteroid)
    astermagma.velocityX = -1
    astermagma.y = Math.round(random(0,height))
    astermagma.lifetime = 2000
  }
}

