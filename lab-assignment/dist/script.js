//****** Variables

let primerJugador;
let segundoJugador;

let primerJuego=false;
let segundoJuego=false;
let tercerJuego=false;
let cuartoJuego=false;
let quintoJuego=false;
let sextoJuego=false;
let septimoJuego=false;

//*****Constantes 

let roca   = 'roca';
let tijera = 'tijera';
let papel  = 'papel';

 
//****** Victoria primer Jugador
primerJuego    = primerJugador  === roca   && segundoJugador === tijera;
primerJugador  = roca;
//segundoJugador = tijera;
segundoJugador = roca;
if (primerJugador == roca && segundoJugador == tijera)
{ 
  primerJuego = true;
  console.log("Primer juego:"+ primerJuego);
} 

segundoJuego   = primerJugador  === papel  && segundoJugador === roca;
primerJugador  = papel;
segundoJugador = roca;
if (primerJugador  == papel  && segundoJugador == roca)
{ 
  segundoJuego = true;
  console.log("Segundo juego:"+ segundoJuego);
}

tercerJuego    = primerJugador  === tijera && segundoJugador === papel;
primerJugador  = tijera;
segundoJugador = papel;
if (primerJugador  == tijera && segundoJugador == papel)
{
  tercerJuego = true; 
  console.log("Tercer juego:"+ tercerJuego);
}


//****** Victoria segundo Jugador
cuartoJuego    = segundoJugador === papel  && primerJugador  === roca;
//segundoJugador = papel;
segundoJugador = roca;
primerJugador  = roca;
if (segundoJugador == papel && primerJugador == roca)
{ 
  cuartoJuego = true;
  console.log("Cuarto juego:"+ cuartoJuego);
}

quintoJuego  = segundoJugador === roca   && primerJugador  === tijera;
segundoJugador = roca;
primerJugador  = tijera;
if (segundoJugador == roca && primerJugador == tijera)
{ 
  quintoJuego = true;
  console.log("Quinto juego:"+ quintoJuego);
}

sextoJuego   = segundoJugador === tijera && primerJugador  === papel;
segundoJugador = tijera;
primerJugador  = papel;
if (segundoJugador == tijera && primerJugador == papel)
{ 
  sextoJuego = true;
  console.log("Sexto juego:"+ sextoJuego);
}

//Cuando están empatados 
segundoJugador = tijera;
primerJugador  = tijera;
septimoJuego   = primerJugador  === segundoJugador ; 

if (primerJuego && segundoJuego && tercerJuego) 
{
  console.log(`¡El primer jugador gano..!`);
} else if (cuartoJuego && quintoJuego && sextoJuego) 
{
  console.log(`¡El Segundo jugador ganó...!`);
} else if (septimoJuego) 
{
  console.log('Hay un empate...');
}