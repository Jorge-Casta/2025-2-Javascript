const { ask } = require('../helpers/input.js');

async function main() {
  const num1 = Number( await ask( "ingresa el primer numero :"));
  const num2 = Number( await ask( "ingresa el segundo numero :"));
  const suma = num1 + num2;
  const resta = num1 - num2;
  const multiplicacion = num1 * num2;
  const division = num1 / num2;

 

  console.log ("suma:", suma);
  console.log ( "resta:", resta);
  console.log ( "multiplicacion:", multiplicacion);
  console.log ( "division:", division);
}

main();