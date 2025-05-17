function separarNumeros(lista) {
    return lista.filter(item => typeof item === 'number');
}

const entrada = [1, "teste", 3, "hello", 7, 9];
const resultado = separarNumeros(entrada);
console.log(resultado); 
