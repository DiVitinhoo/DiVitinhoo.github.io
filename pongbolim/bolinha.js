//dimensões bolinha
let xBolinha =300;
let yBolinha = 200;
let DiametroBolinha = 25;
let raio = DiametroBolinha /2;

//movimentação bolinha
let velocidadexBolinha = 4;
let velocidadeyBolinha= 4;

function mostraBolinha() {
  circle(xBolinha,yBolinha,DiametroBolinha);
}

function velocidadeBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
  }

function verificarBolinha() {
   if (xBolinha +raio >  width|| xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if(yBolinha + raio> height|| yBolinha - raio<0) {
    velocidadeyBolinha *= -1;
  }
}
