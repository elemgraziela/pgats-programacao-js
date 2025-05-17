/**
 * Plano de atividade para o pet
 * crie um script que define um plano de atividade para pet durante a estadia.
 * o script vai receber porte (p,m,g) e o tempo da atividade em minutos
 * exemplo: medio - 45
 * 
 * use uma condicional para decidir o tipo de atividade com base no porte:
 * pequeno - brincar dentro de casa
 * medio - caminhada
 * grande - correr
 * qualquer outro - invalido
 * 
 * depois uma condicional para ajustar a mensagem de acrodo com o tempo:
 * meno que 15 - atividade rapida
 * de 15 a 30 - tempo ideal
 * acima de 30 - hora de diversão
 */

nome = 'lisa'
porte = 'p'
tempo = 20

let atividade

//decidir o tip ode atividade baseado no porte
switch (porte) {
    case 'p' :
        atividade = 'brincar'
        break
    case 'm' :
        atividade = 'caminhada'
        break
    case 'g' :
        atividade = 'correr'
        break
    default:
        atividade = 'inválido'
}


let mensagem

if (tempo < 15) {
    mensagem = 'atividade rapida'
} else if (tempo < 30) {
    mensagem = 'tempo ideal'
}else if (tempo > 30) {
    mensagem = 'hora da diversao'
}

console.log(`${ mensagem }: [${ atividade }]`)