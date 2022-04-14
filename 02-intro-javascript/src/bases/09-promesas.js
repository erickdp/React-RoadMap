import getHeroeById, { getHeroesByOwner } from './bases/08-imp-exp'

// Promesas son tareas asíncronas
// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroeById(1);
//         resolve(heroe)
//     }, 2000);
// })

// promesa.then((heroe) => {
//     console.log({ myHero: heroe });
// })

const findHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar al heroe');
            }
        }, 2000)

    })
}

// findHeroeByIdAsync(10)
//     .then(heroe => console.log("Heroe", heroe))
//     .catch(err => console.warn(err));

// si se espera solo un argumento entonces se lo pasa directamente a la función
findHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);