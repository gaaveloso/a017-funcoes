//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

function somar(a,b){
    let resultado = a + b 
    console.log(`${a} + ${b} = ${resultado}`)
    return
}
function dividir(a,b){
    let resultado = a / b 
    console.log(`${a} / ${b} = ${resultado}`)
}
function subtrair(a,b){
    let resultado = a - b 
    console.log(`${a} - ${b} = ${resultado}`)
}
function multiplicar(a,b){
    let resultado = a * b 
    console.log(`${a} x ${b} = ${resultado}`)
}

const primeiroNumero = Number(prompt("Digite o primeiro número: "))
const segundoNumero = Number(prompt("Digite o segundo número: "))

somar(primeiroNumero,segundoNumero)
dividir(primeiroNumero,segundoNumero)
subtrair(primeiroNumero,segundoNumero)
multiplicar(primeiroNumero,segundoNumero)