//--- Exercícios de interpretação de código ---//
// 1- Uma funcao feita para retornar o valor que vc digita no prompt multiplicado pelo valor da cotacao.

// 2- Na variavel novoMontante ele vai pegar o valor de 150 e multiplicar pelo case escolhido, no caso Acoes, retornando o valor de 165. Ja na variavel segundoMontante o case escolhido nao existe e ele retornara o default "TIPO DE INVESTIMENTO INFORMADO INCORRETO".

// 3- Primeiro console pede a quantidade de numeros dentro da array numeros e ela retorna "Quantidade total de numero 14". Segundo console retorna a quantidade de numeros pares, "6". Terceiro console retorna a quantidade de numero impares, "8".

// 4- numero1 = -10 e o numero2 = 1590


//--- Exercicios de logica de programacao ---//
// 1- map, for e forEach
//exemplo
// function logicaOne(){
//   name = ['maracuja', 'morango', 'pera']
// //MAP//
//   let nameMap = name.map(nome => {
//   return nome
// })
// //FOR//
//   for(var i = 0; i < name.length; i++){
//     console.log(name[i]);
//   // }
// }
// logicaOne()
// //FOREACH
//   name.forEach((nome) => {
//     console.log(nome)
//   });
// }

// 2- a) false b) false c) true d) true e) true

// 3-Não funciona, por que nao foi definido valor nenhum para a variavel quantidadeDeNumerosPares e o while está faltando a informacao para passar para o proximo valor, no caso o indice.
// function logicaThree() {
//     const quantidadeDeNumerosPares = prompt("Digite um número: ")
//     let i = 0
//     while (i < quantidadeDeNumerosPares){
//         console.log(i * 2)
//         i++
//     }
// }
//logicaThree()

// 4-function logicaFour(l1, l2, l3) {
//     if (l1 === l2 && l2 === l3) {
//         console.log("equilátero")
//     } else if ((l1 === l2) || (l2 === l3) || (l3 === l1)) {
//         console.log("isósceles")
//     } else {
//         console.log("escaleno")
//     }
// }
// logicaFour(2, 1, 4)

// 5-let numOne = Number(prompt("Insira o primeiro numero:"))
// let numTwo = Number(prompt("Insira o segundo numero:"))
// function numMaior(num1, num2){
//     if(num1 > num2){
//         console.log("O maior é:", num1)
//     }else if(num2 > num1){
//         console.log("O maior é:", num2)
//     }
// }
// function div(num1, num2){
//     let div = num1 / num2
//     if(div % 2 === 0){
//         console.log(num1,"é divisivel por",num2)
//     }else{
//         console.log(num1,"não é divisivel por",num2)
//     }
// }
// function dif(num1, num2){
//     let dif = num1-num2
//     console.log("A diferenca entre os dois numeros são: ",dif)
// }
// console.log("Os numeros são:",numOne, "e", numTwo)
// numMaior(numOne, numTwo)
// div(numOne, numTwo)
// div(numTwo, numOne)
// dif(numOne, numTwo)


//--- Exercicios de funcoes ---//
// 1-let array = [4, 13, 20, 19, 44, 29];
// function numMaiorMenor(m1) {
//
//   let maior = Math.max(...m1)
//   let menor = Math.min(...m1)
//
//    let maIndex = m1.indexOf(maior)
//    let meIndex = m1.indexOf(menor)
//
//   m1.splice(maIndex, 1)
//   m1.splice(meIndex, 1)
//
//    let segMaior = Math.max(...m1)
//    let segMenor = Math.min(...m1)
//
//  console.log(segMaior)
//  console.log(segMenor)
// }
//
// numMaiorMenor(array)

// 2-future = ()=>{alert("Hello Future4")};
// future()


//--- Exercicios de objetos ---//
// 1- Nos objetos armazenamos mais de um dado por indices nomeados e nos arrays armazenamos um dado por indice numerado.

// 2- function criaRetangulo(lado1, lado2) {
//     objretangulo = {
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2 * (lado1 + lado2),
//     area: lado1 * lado2,
//   };
//   return objretangulo;
// }
// console.log(criaRetangulo(13,29))

// 3- filme = {
//   titulo: 'Ponte para Terabitia',
//   ano: 2007,
//   diretor: 'Gabor Csupo',
//   atores: ['Josh Hutcherson', 'AnnaSophia Robb', 'Zooey Deschanel'],
// }
// console.log("Venha assistir ao filme", filme.titulo,"de",filme.ano,", dirigido por",filme.diretor,"e estrelado por",filme.atores[0],",",filme.atores[1],"e",filme.atores[2],"!");

// 4-pessoaRandom = {
//     nome: 'João Luciano',
//     email: 'joaoluciano@hotmail.com',
//     endereco: 'Minas Gerais',
// }
// console.log(pessoaRandom)
// function anonimizarPessoa() {
//     anonimo = {
//         ...pessoaRandom,
//         nome: 'Anônimo',
//     }
//     console.log(anonimo)
// }
// anonimizarPessoa()


//--- Exercicios de funcoes de array ---//
// 1- a)pessoas = [
//   { nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 },
// ]
// adultos = pessoas.filter((pessoa) => {
//     return pessoa.idade >= 20
// });
// criancas = pessoas.filter((pessoa) => {
//     return pessoa.idade < 20
// });
// console.log(adultos)
// console.log(criancas)

// 2-array = [1, 2, 3, 4, 5, 6];
// valorDobro = array.map(dobrar);
// valorTriplo = array.map(triplicar);
// parImpar = array.map(parOuImpar);
//
// function dobrar(a) {
//     return a * 2;
// }
// console.log(valorDobro);
// function triplicar(a) {
//     return a * 3;
// }
// console.log(valorTriplo);
// function parOuImpar(a) {
//     if(a % 2 === 0) {
//         return a, " é par";
//     } else {
//         return a, " é impar";
//     }
// }
// console.log(parImpar);

// 3- pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ];
// pode = pessoas.filter((pessoa) => {
//     if((pessoa.altura >= 1.5) && (pessoa.idade >= 14) && (pessoa.idade < 60)) {
//         return true;
//     } else {
//         return false;
//     }
// });
// naoPode = pessoas.filter((pessoa) => {
//     if((pessoa.altura < 1.5) || (pessoa.idade < 14) || (pessoa.idade > 60)) {
//         return true;
//     } else {
//         return false;
//     }
// });
//
// console.log(pode);
// console.log(naoPode);

// 4- aaaaaaaaaaaah passo ;-; //

// 5- contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ];
//
// function saldo() {
//     contas.forEach((cliente)=>{
//     dim = 0;
//         for (gasto of cliente.compras) {
//             dim += gasto;
//         }
//         cliente.saldoTotal -= dim;
//     });
//     return contas;
// }
// console.log(saldo());
