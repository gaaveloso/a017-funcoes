// Declare e chame as funções abaixo:
// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
function imprimaSoma(num1, num2){
    let soma = num1 + num2
    return soma
}
console.log(imprimaSoma(1,2))
// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function imprimaBooleano(num1, num2){
    let verificador = num1 >= num2
    console.log(`O ${num1} é maior ou igual que ${num2}?: ${verificador}`)
    return verificador
}
imprimaBooleano(5,10)
// c) Uma função que receba um número e imprima se ele é par ou não
function parOuImpar(num){
    if(num % 2 === 0){
        console.log(`O número ${num} é PAR.`)
    } else {
        console.log(`O número ${num} é IMPAR.`)
    }
}
parOuImpar(10)
// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
function imprimirMensagem(mensagem){
    console.log(`A mensagem "${mensagem}" tem`, mensagem.length, `letras.`)
    console.log(`Versão da mensagem em letras maiúsculas = `,mensagem.toUpperCase())
}
imprimirMensagem("Função é dificil")