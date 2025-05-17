function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return texto.split('').filter(letra => vogais.includes(letra)).length;
}

const entrada = "exercicio 2 do hands on";
const resultado = contarVogais(entrada);
console.log(resultado); 
