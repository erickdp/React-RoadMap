// Variables y constantes

const nombre = "Erick";
const apellido = "Díaz";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido);

// var ya no se debe de usar
if (true) {
    const nombre = "Hernan";
    // este valorDado solo existe dentro de este scope
    let valorDado = 6;
    console.log(valorDado, nombre);
}

console.log(valorDado, nombre);