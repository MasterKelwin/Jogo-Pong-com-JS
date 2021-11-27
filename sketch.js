//variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 18
let raio = diametro / 2

//velocidade da bolinha
let velocidadeXBolinha = 2
let velocidadeYBolinha = 2

//variáveis raquete
let xRaquete = 10
let yRaquete = 160
let raqueteComprimento = 10
let raqueteAltura = 80

//variáveis raquete oponente
let xRaqueteOponente = 580
let yRaqueteOponente = 160

//variáveis pontuação
let meusPontos = 0
let pontosOponente = 0

function setup() {
  createCanvas(600, 400);
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
  }
}

function verificaColisaoRaqueteOponente(){
  if (xBolinha + raio > xRaqueteOponente && 
      yBolinha + raio > yRaqueteOponente &&
     yBolinha - raio < yRaqueteOponente + raqueteAltura){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente (){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 -30
  yRaqueteOponente += velocidadeYOponente 
}

function incluiPlacar (){
  fill (255)
  text (meusPontos, 200, 25)
  text (pontosOponente, 400, 25)
}

function marcaPontos (){
  if (xBolinha > 590) {
    meusPontos += 1
  }
  if (xBolinha < 10){
    pontosOponente += 1
  }
}