//funcao de seta // flecha
const exibirNomeDoDog = (nome) => {
    console.log(nome)
}


//funcao seta, com parametro + valor default , sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
}

//funcao seta, com parametro, com retorno
const obterNomeDoDogFormatado = (nome)  =>{
    return nome.toUpperCase()
}
 
const obterObjetoDog = () => {
    return {
        nome: 'Baily Maria',
        peso: 11.5
    }
}

const listarDeNomesDeDogs = () => {
    return [    //return ele guarda o resultado da execução da função e para exibir é console.log
        'Pituca',
        'Marea',
        'Lilica'
    ]
}


exibirNomeDoDog("pipoca")
exibirPorteDoDog ()
console.log(obterNomeDoDogFormatado("Baily"))
console.log(obterObjetoDog())
console.log(listarDeNomesDeDogs())