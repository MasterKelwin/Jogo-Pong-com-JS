//variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 18
let raio = diametro / 2

//velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

//variáveis raquete
let xRaquete = 10
let yRaquete = 160
let raqueteComprimento = 10
let raqueteAltura = 80

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  verificacaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

function mostraRaquete() {
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura)
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

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento &&
      yBolinha - raio < yRaquete + raqueteAltura &&
      yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1
  }
}
