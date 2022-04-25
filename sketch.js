var garden,rabbit,carrot,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,appleImg,orangeImg,redImg;

function preload(){

  gardenImg = loadImage("garden.png");
  rabbitImg = loadAnimation("rabbit.png");
  appleImg = loadAnimation("apple.png");
  orangeImg = loadAnimation("orangeLeaf.png");
  redImg = loadAnimation("redImage.png");

}

function setup(){
  
  createCanvas(400,400);

//Mover fondo

//crear sprite de jardin
//cargar imagen de jardin
//añadir imagen a jardin
garden=createSprite(200,200);
garden.addImage("garden",gardenImg);

//crear sprite de conejo
//cargar animacion de conejo
//añadir animacion a conejo 
//añadir velocidad al conejo
//escalar el conejo
rabbit = createSprite(160,340,20,20);
rabbit.addAnimation("rabit",rabbitImg);
rabbit.velocytyX = 3;
rabbit.velocytyX = -3;
rabbit.scale =0.09;

//crear  sprite de manzana
//cargar animacion de manzana
//añadir animacion de manzana
//añadir velocidad a manzana
//escalar a manzana
apple = createSprite(20,100,50,90);
apple.addAnimation("apple",appleImg);
apple.velocytyY = 5;
apple.scale = 0.5;

//crear sprite de naranjas
//cargar animacion de naranjas
//añadir animacion de naranjas
//añadir volcocidad a naranjas
//escalar las naranjas
orangeL = createSprite(20,100,90,50);
orangeL.addAnimation("orangeL",orangeImg);
orangeL.velocytyY = 5
orangeL.scale = 0.5;

//crear sprite de ojas
//cargar animacion de ojas
//añadir animacion de ojas
//añadir volocidad a ojas
//escalar las ojas
redL = createSprite(20,100,35,25);
redL.addAnimation("redl",redImg);
redL.velocytyY = 5;
redL.scale = 0.5;

//generar numeros aleatorios
var rand = Math.round(random(1,100));
console.log(rand);

}

function draw() {

  background(withe);
  
  //mover el sprite rabbit en el eje X con el mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
 var select_sprites = Math(random(1,3));

 var select_sprites = Math.random(random(1,3));

 var select_sprites = Math.round(1,3);

 var select_sprites = Math.round(random(1,3));

// funcion para iniciar el juego cuando se precione la tecla de la barra espaciadora
   if (keyDown(space)){

        frameCount % 50 == 0;

   }

//funcion para mover al conejo a la derecha  
   if (keyDown(righ)){

      rabbit.velocytyX = -3;

   }

//funcion para mover al conejo a la izquierda  
   if (keyDown(left)){

      rabbit.velocytyX = 3;

   }

   if (frameCount % 50 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
    }else {
       createRed();
     }
   }

   if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
      createOrange();
     }
   }

   if (frameCount / 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
     }
   }

   if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
     createOrange();
    }else {
      createRed();
    }
  }
//aparecer las manzanas
spawnAples();

//aparecer las naranjas
spawnOrange();

//aparecer las ojas
spawnRedl();

   drawSprites();

}

//funcion para aparecer las manzanas
function spawnAples(){

if(frameCount&60 ===0){

var apple = createSprite(20,100,50,90);
apple.addAnimation("apple",appleImg)
apple.velocytyY = 5;
apple.y = Math.round(random(10,60));
apple.scale = 0.5;

}

}



//funcion para aparecer las naranjas
function spawnOrange(){

  
  
}

  
function spawnRedl(){

  

}
