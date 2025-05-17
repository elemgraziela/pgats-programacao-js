/**
 * -- - decremento
 * ++ - incremento
 * ? - ternário (condicional)
 */

//incremento
let pesoDog = 10
console.log(pesoDog)

pesoDog ++

console.log(pesoDog)

//decremento
let pesoTutor = 90
console.log(pesoTutor)

pesoTutor --

console.log(pesoTutor)


//ternario
//const porte = pesoDog <= 10 ? 'pequeno' : 'medio'

const pesoDoDogOperadorTernario = 21
const porte = pesoDoDogOperadorTernario <= 10 // se if
                ? 'pequeno'
                : pesoDoDogOperadorTernario <= 20 // senao se / else if
                ? 'medio'
                : 'grande' //senao

//                pesoDoDogOperadorTernario <= 10 ? 'pequeno' : pesoDoDogOperadorTernario <= 20 ? 'medio' : 'grande'
//console.log(porte)


console.log(11 / 2) //5.5
console.log(parseInt(11 / 2)) // 5  parseInt tras inteiro, sem casa decimal

parseFloat()


//arredondamento
console.log(Math.floor(5.8)) //arredonda pra cima
console.log(Math.round(5.8)) //arredonda para o mais proximo
console.log(Math.ceil(5.8)) // arredonda para cima
