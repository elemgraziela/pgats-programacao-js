/**
 * para, faça
 * contador; condicao; manipulação do contador (incremento/decremento)
 * quantidadeDePetisco; quantidadeDePetisco <= quantidadeCalculada; quantidadeDePetiscos++
 */

const quantidadeCalculada = 3

for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    //acao de dar um petisco
    console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)
}

//para dar um petisco para cada gato - outro exemplo
const gatos = ['Lessie', 'Pony', 'Fumaca']

for (let indice = 0; indice < gatos.length; indice++){
    console.log(`Dando o petisco para ${gatos[indice]}`)
}