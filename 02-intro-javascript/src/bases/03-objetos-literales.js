// Objetos literales
const persona = {
    nombre: "Erixx",
    apellido: "Díaz",
    edad: 45,
    direccion: {
        ciuidad: "UIO",
        zip: 324234,
        lat: 14.555,
    }
};

console.log(persona);
// Obtener el nombre de la variable
// console.table({ persona });

// clonar una variable, usando el operador spread
// copia todos los valores de persona
const persona2 = {...persona};
persona2.nombre = "Julioxx";
console.log(persona)
console.log(persona2)