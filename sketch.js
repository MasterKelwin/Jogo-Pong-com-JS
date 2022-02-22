//variáveis da bolinha
let xBolinha = 310
let yBolinha = 200
let diametro = 15
let raio = diametro / 2

//velocidade da bolinha
let velocidadeXBolinha = 8
let velocidadeYBolinha = 8

//variáveis raquete
let xRaquete = 10
let yRaquete = 160
let raqueteComprimento = 10
let raqueteAltura = 80

//variáveis raquete oponente
let xRaqueteOponente = 570
let yRaqueteOponente = 160

//variáveis pontuação
let meusPontos = 0
let pontosOponente = 0

//sons
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  verificacaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPontos();
}

function preload (){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

function mostraRaquete(x,y) {
  rect(x ,y ,raqueteComprimento,raqueteAltura)
}

function velocidadeBolinha() {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function verificacaoBorda() {
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
  velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || 
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function movimentaMinhaRaquete () {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha - raio < yRaquete + raqueteAltura && 
      yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaqueteOponente(){
  if (xBolinha + raio > xRaqueteOponente && 
      yBolinha + raio > yRaqueteOponente &&
     yBolinha - raio < yRaqueteOponente + raqueteAltura){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente (){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento *2 -30
  yRaqueteOponente += velocidadeYOponente / 7
}

function incluiPlacar (){
  stroke (255)
  textSize (45)
  textAlign (CENTER)
  fill (0, 0, 255)
  rect (170, 10, 60, 50)
  fill (255)
  text (meusPontos, 200, 50)
  fill (255, 0, 0)
  rect (370, 10, 60, 50)
  fill (255)
  text (pontosOponente, 400,50)
}

function marcaPontos (){
  if (xBolinha > 590) {
    meusPontos += 1
      ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1
      ponto.play();
  }
}

p5.prototype.collidePointRect = function (pointX, pointY, x, y, xW, yW) {
if (pointX >= x &&       
    pointX <= x + xW &&   
    pointY >= y &&        
    pointY <= y + yW) {   
        return true;
  
  
  p5.prototype.collideLineCircle = function( x1,  y1,  x2,  y2,  cx,  cy,  diameter) {

  var inside1 = this.collidePointCircle(x1,y1, cx,cy,diameter);
  var inside2 = this.collidePointCircle(x2,y2, cx,cy,diameter);
  if (inside1 || inside2) return true;

  var distX = x1 - x2;
  var distY = y1 - y2;
  var len = this.sqrt( (distX*distX) + (distY*distY) );

  var dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / this.pow(len,2);

  var closestX = x1 + (dot * (x2-x1));
  var closestY = y1 + (dot * (y2-y1));
