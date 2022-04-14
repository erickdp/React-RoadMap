// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Erick',
    edad: 45,
    clave: 'Iroman',
}

const {nombre, clave, edad} = persona;
// console.log(persona.nombre);
// console.log(nombre, edad, clave);

// desestructuración desde los argumentos
const getAvenger = ({nombre, edad, clave, rango = "Capitán"}) => {
    console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 14.12,
            lng: -12.322,
        }
    }
}

const {nombreClave, anios, lating} = getAvenger(persona);
const {lat, lng} = lating

console.log(nombreClave, anios);
console.log(lat, lng);