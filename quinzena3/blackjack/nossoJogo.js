/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {

} else {
    console.log("O jogo acabou!")
}

const cartaUserOne = comprarCarta()
const cartaUserTwo = comprarCarta()
const cartaComputerOne = comprarCarta()
const cartaComputerTwo = comprarCarta()

const userPont = cartaUserOne.valor + cartaUserTwo.valor
const computerPont = cartaComputerOne.valor + cartaComputerTwo.valor

console.log("Usuário - cartas: ", cartaUserOne.texto, cartaUserTwo.texto, " - pontuação ", userPont)
console.log("Computador - cartas: ", cartaComputerOne.texto, cartaComputerTwo.texto, " - pontuação ", computerPont)

if (userPont > computerPont) {
    console.log("O usuário ganhou!")
} else if (userPont < computerPont) {
    console.log("O computador ganhou!")
} else {
    (userPont === computerPont); {
        console.log("Empate!")
    }
}