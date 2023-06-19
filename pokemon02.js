//Programa - 02
//Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

let pokemon = [   'Pikachu',   'Charmander',   'Bulbasaur',   'Squirtle' ]

const mayusculaPokemon = pokemon.map((el) => el.toUpperCase())
console.log('mayuscula pokemones', mayusculaPokemon)