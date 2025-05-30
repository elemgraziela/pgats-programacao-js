/**
 * tentar {
 * //conexao com banco (exemplo)
 * }pegar (erro/excecao){
 * //salvar a excecao em algum lugar...
 * //exibir
 * }
 * 
 * lançar = throw
 */
//tentar algo que pode dar erro
try {
    console.log('Tentando alimentar o pet...')
    throw new Error('pet não quis petisco')

    //tantar conectar ao banco
    //executar uma quey
}catch (excecao){
    //tratar esse erro- exibir, salvar, melhor a descrição desse erro
    console.log(excecao)  //exibe todo erro
    console.log(excecao.name)  //vai exibir erro
    console.log(excecao.message)  //vai exibir mensagem

    //capturar a excecao
}finally{  
    //sempre executa como se fosse acao final
    console.log(`sempre serei executado`)
    //fechar a cinexao com o banco (ao menos garantir que foi fechado)
}