//funcao nomeada, com parametro e sem retorno
function exibirNomeDoDog(nome) {
    console.log(nome)
}

//funcao nomeada, com parametro + valor default , sem retorno
function exibirPorteDoDog (porte = 'ND') {
    console.log(porte)
}

//funcao nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome) {
    return nome.toUpperCase()
}
 
function obterObjetoDog() {
    return {
        nome: 'Baily Maria',
        peso: 11.5
    }
}

function listarDeNomesDeDogs() {
    return [    //return ele guarda o resultado da execução da função e para exibir é console.log
        'Pituca',
        'Marea',
        'Lilica'
        'Lilica'
    ]
}


exibirNomeDoDog("pipoca")
exibirPorteDoDog ()
console.log(obterNomeDoDogFormatado("Baily"))
console.log(obterObjetoDog())
console.log(listarDeNomesDeDogs())