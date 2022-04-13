// Funciones en js

// No crear funciones de esta manera
// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// };

// usar esta o función de flecha 
// const saludar = function saludar(nombre) {
//     return `Hola, ${nombre}`;
// };

// función flecha
// const saludar2 = (nombre) => {
//     return `Hola, ${nombre}`;
// };

// función flecha de una sola línea
const saludar2 = (nombre) => `Hola, ${nombre}`;
const saludar3 = () => `Hola, Mundo`;


console.log(saludar2("Goku"));
console.log(saludar3());

// forma uno para devolver un objeto desde una función flecha
// const getUser = () => {
//     return {
//         uid: "ABC123",
//         username: "kepler",
//     }
// }

// método 2
const getUser = () => ({
    uid: "ABC123",
    username: "kepler",
})


const user = getUser();
console.log(user);

// tarea
// 1. transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Prueba

const getUsuarioActivo = (nombre) => ({
    uid: "ABCSDFA22",
    username: nombre,
});

const usuarioActivo = getUsuarioActivo("marce");
console.log(usuarioActivo);