import {DOGS, CATS} from './10-exercicio-dados.js'

function entregarPetisco(listaDePets){
    listaDePets.forEach(pet => {
        console.log(`Entregano peticso para ${pet}`)
    })
}
entregarPetisco(DOGS)
entregarPetisco(CATS)