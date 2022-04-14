// import {heroes} from './data/heroes'; // la extensión de js no se pone normalmente
import heroes, { owners } from '../data/heroes' // las exp por default no necesitan {}

// console.log(owners);

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id); // === determina si son iguales tanto de tipo como de valor


// console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner); //busca varios elementos, no solo 1 como con find


const myHeroes = getHeroesByOwner('DC');
// console.log({ myHeroes: myHeroes });

export default getHeroeById