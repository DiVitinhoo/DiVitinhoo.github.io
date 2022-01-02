// variaveis raquete
let xRaquete = 25;
let yRaquete =150;
let xRaquete2= 420;
let yRaquete2= 150;
let comprimentoRaquete = 10;
let alturaRaquete = 50;
// variaveis raquete oponente
let xRaqueteOp = 565;
let yRaqueteOp =150;
let xRaqueteOp2 = 170;
let yRaqueteOp2 =150;

function mostraRaquete(x,y){ 
  fill(color(138,43,226))
rect(x, y, comprimentoRaquete, alturaRaquete)
}
function mostraRaqueteOp(x,y){ 
  fill(color(0,0,139))
rect(x, y, comprimentoRaquete, alturaRaquete)
}

function movimentoMinhaRaquete(){
  
if(keyIsDown(UP_ARROW)) {
  yRaquete -=10;
  yRaquete2-=10;
  }
if(keyIsDown(DOWN_ARROW)) {
  yRaquete +=10;
  yRaquete2 +=10;
}
} 

function movimentoRaqueteOp(){
  if(keyIsDown(87)) {
  yRaqueteOp -=10;
  yRaqueteOp2-=10;
  }
if(keyIsDown(83)) {
  yRaqueteOp +=10;
  yRaqueteOp2 +=10;
}  
}