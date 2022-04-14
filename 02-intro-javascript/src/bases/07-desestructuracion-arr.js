// con f2 sobre la variable cambia todas las referencias al cambiar el nombre
const personajes = ['Goku', 'Trunks', 'Vegeta'];

const [, , p3] = personajes; // obtiene la posición 2

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
const state = (valor) => {
    return [valor, () => console.log("Hola mundo")];
}

const [nombre, setNombre] = state('Goku');

console.log(nombre);
setNombre();