const { ask } = require('../helpers/input.js');

async function main() {
    

  const age = Number(await ask('¿Cuntos años tiemes'));
  if ( age <=12){
    console.log ( "Eres un niño");}
    else if (age > 12 && age <=18) {
        console.log (  "Eres un adolecente");
    } else if (age > 18 && age >=60){
        console.log (" Eres un adulto mayor")
    }
  }
  const comida = await ask( "¿Cuál es tu comida favorita?");
  // TODO : Agregar pregunta para comida favorita

  console.log(`Hola ${name}, tienes ${age} años, tu comida favorita es ${comida}.`);
}

main();