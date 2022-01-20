import heroes, {companies} from "../data/heroes";

/* console.log(heroes);
console.log(companies);

console.log(heroes[0]); 
heroes.map( ({name, company}) => {
  console.log(`${ name } pertenece a la compañía ${ company }`);
} )
*/
const encuentraHeroe = ( ide ) => {
  return heroes.find( ( heroe ) => heroe.id === ide )
};

// console.log(encuentraHeroe(1));

/* const heroesPorCompania = ( comp ) => {
  return heroes.filter( ( heroe ) => heroe.company === comp )
} */

export const heroesPorCompania = ( comp ) => heroes.filter( ( heroe ) => heroe.company === comp );

// console.log( heroesPorCompania('Marvel') );

