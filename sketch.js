var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var fuelImage, powerCoinImage;
var fuel, powercoin;
var lifeimge;
var obstacle1, obstacleImage, obstacle2, obstacle2Image;


//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/mbappe.png");
  car2_img = loadImage("./assets/esqueleto.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/gasolina.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeimge = loadImage("./assets/life.png")
  obstacleImage = loadImage("./assets/obstacle1.png")
  obstacle2Image = loadImage("./assets/obstacle2.png")
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
