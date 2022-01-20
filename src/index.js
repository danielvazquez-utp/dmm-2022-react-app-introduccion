import { heroesPorCompania } from "./introduccion/importar-exportar";

// console.log(heroesPorCompania('DC'));

/* const promesa = new Promise((resolve, reject) => {
  setTimeout( () => {
    console.log('Han pasado 2 segundos');
    const heroes = heroesPorCompania('DC');
    // resolve(heroes);
    reject('No se pudo encontrar a los superheroes');
  }, 2000 );
});

promesa.then( (heroes) => {
  console.log(heroes);
})
.catch(err => console.warn(err)); */

const recuperaHeroesAsync = (company) => {
  
  const promesa = new Promise((resolve, reject) => {
    setTimeout( () => {
      const heroes = heroesPorCompania(company);
      if (heroes === undefined ){
        reject('No se pudo encontrar a los superheroes');
      }
      else{
        resolve(heroes);
      }
    }, 2000 );
  });

  return promesa;

}

recuperaHeroesAsync('Mafalda')
  .then( (heroes) => console.log('Heroes', heroes) )
  .catch( err => console.warn(err) )