// placar do jogo 
let meusPontos= 0;
let pontosOp= 0;

function marcarPontos () {
  if (xBolinha - raio < xGol + larguraGol && yBolinha - raio < yGol + alturaGol && yBolinha + raio > yGol){
    pontosOp  += 1;
    xBolinha=300
    yBolinha= 200
  }
  
  if (xBolinha + raio > xGolOp + larguraGol && yBolinha + raio < yGolOp + alturaGol && yBolinha - raio > yGolOp){
    pontosOp  += 1;
    xBolinha=300
    yBolinha= 200 
  }
}