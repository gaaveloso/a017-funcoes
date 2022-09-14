//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
// function imprimeNome(nome){
//     console.log(`Seu nome é ${nome}`)
// }
// imprimeNome("Gabriel")

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.
// function imprimeTabuada(tabuada){
//     for(let i=1;i<=10;i++){
//         resultado = (tabuada * i)
//         console.log(resultado)
//     }
// }
// imprimeTabuada(6)

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
const nome = (seuNome) => console.log(`Seu nome é ${seuNome}`)
nome("Gabriel")

const imprimeTabuada = (tabuada) => {
    for(let i=1; i<=10; i++){
        resultado = tabuada * i
        console.log(resultado)
    }
}
imprimeTabuada(6)