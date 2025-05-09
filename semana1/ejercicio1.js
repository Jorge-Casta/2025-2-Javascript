// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos

const { ask } = require('../helpers/input');

async function main() {
  const name = await ask('¿Cuál es tu nombre?');
  const age = Number(await ask('¿Cuál es tu edad?'));
  const comida = await ask( "¿Cuál es tu comida favorita?");
  // TODO : Agregar pregunta para comida favorita

  console.log(`Hola ${name}, tienes ${age} años, tu comida favorita es ${comida}.`);
}

main();
