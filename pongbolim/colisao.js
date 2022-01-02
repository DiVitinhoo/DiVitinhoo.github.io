//colisão 
let colidiu = false;

function colisaoMinhaRaquete (x,y){
    colidiu = collideRectCircle (x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadexBolinha *= -1;
    } 
}
