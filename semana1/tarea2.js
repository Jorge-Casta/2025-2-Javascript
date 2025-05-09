// Ejercicio: Simulador de clima
const { ask } = require('../helpers/input');

async function main() {
  const temperatura = Number(await ask("¿Cuál es la temperatura actual?"));

  if (temperatura <10) {
    console.log ("Hace frío");
  } else if  ( temperatura >10 && temperatura <=20){
    console.log ( "Está templado");
  } else if ( temperatura >20 && temperatura <=30){
    console.log ( "Hace calor");
  } else (temperatura >30 ) {
    console-log ("Hace mucho calor");
  }

  // TODO: Implementar la lógica para temperaturas entre 10 y 20 grados
  // TODO: Implementar la lógica para temperaturas entre 20 y 30 grados
  // TODO: Implementar la lógica para temperaturas superiores a 30 grados

}

main();