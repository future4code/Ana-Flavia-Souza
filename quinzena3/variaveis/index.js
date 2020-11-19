//10
//10 5

//10 10 10


//Exercícios de escrita de código 1
let nome
let idade
console.log( typeof nome ,typeof idade)
//deu undefined porque não foi atribuido valor nenhum a variavel

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log("tipo da variavel nome:", typeof nome , ", tipo da variável idade:" , typeof idade)
//notei que atribuindo valores as variaveis ela me retorna o tipo de variavel

console.log("Olá" , nome, ", você tem", idade,"anos")

//Exercícios de escrita de código 2

const fruta = prompt("Qual a sua fruta preferida? ")
console.log("1. Qual a sua fruta preferida? ")
console.log("Resposta: ", fruta)
const cor = prompt("Qual a sua cor preferida? ")
console.log("2. Qual a sua cor preferida? ")
console.log("Resposta: ", cor)
const animal = prompt("Qual o nome do seu animal de estimação? ")
console.log("3. Qual o nome do seu animal de estimação? ")
console.log("Resposta: ", animal)

//Exercícios de escrita de código 3
comida = ["uramaki", "niguiri", "sashimi", "yakisoba","hossomaki"]
console.log(comida)

console.log("Essas são as minhas comidas preferidas: ")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

comidaY = prompt("Qual a sua comida favorita? ")
console.log(comidaY)

comida[1] = comidaY
console.log(comida)


//Exercícios de escrita de código 4
let exercicio4 = ["Voce comeu sushi hoje?", "Voce vai sair hoje?", "Vamos sair amanha?" ]
let sushi = true
let sairHoje = false 
let sairAmanha = false

console.log(exercicio4[0], sushi)
console.log(exercicio4[1], sairHoje)
console.log(exercicio4[2], sairAmanha)