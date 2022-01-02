
function setup() {
  createCanvas(600, 400); 
}

function draw() {
  background(50,205,50);
  mostraBolinha();
  velocidadeBolinha();
  verificarBolinha(); 
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaquete2,yRaquete2);
  movimentoMinhaRaquete();
  mostraRaqueteOp(xRaqueteOp,yRaqueteOp);
  mostraRaqueteOp(xRaqueteOp2,yRaqueteOp2);
  movimentoRaqueteOp();
  placar();
  marcarPontos();
  mostrarGols(xGol,yGol);
  mostrarGols(xGolOp,yGolOp);
  colisaoMinhaRaquete (xRaquete,yRaquete);
  colisaoMinhaRaquete (xRaqueteOp,yRaqueteOp);
  colisaoMinhaRaquete (xRaqueteOp2,yRaqueteOp2);
  colisaoMinhaRaquete (xRaquete2,yRaquete2);    
}
