

const activo = true;

// operado ternario
// const mensaje = (activo) ? "Activo" : "Inactivo";

// operador ternario en el caso de que solo se requiera ejecutar una condición
// const mensaje = activo && "mensaje";

const mensaje = !activo && "mensaje";


console.log(mensaje);