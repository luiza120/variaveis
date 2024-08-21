// FUNÇÕES!!!

let x = "nada"
console.log(x)
x = "oi"
y = "tchau"

// Declaração de função

imprimeTexto(y)

//1) Declara a função

function imprimeTexto(texto) {
    console.log(texto)
}

//2) Executar/Chamar a função

imprimeTexto(x)
imprimeTexto("Eu sou linda")

function soma(){
    return 2 + 2
}

//console.log(soma())
imprimeTexto(soma())
imprimeTexto(somaDeNumeros(4, 7))
imprimeTexto(somaDeNumeros(25, 23))

function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

// A ordem dos parâmetros é importante!
imprimeTexto(nomeIdade("Luana", 17))
imprimeTexto(nomeIdade(17, "Luana"))

imprimeTexto(multiplicacao())
//Você pode definir um parâmetro inicial para sua função
function multiplicacao(numero2 = 2, numero5 = 5){
    return numero2 * numero5
}
imprimeTexto(multiplicacao(somaDeNumeros(2,5), somaDeNumeros(2,5)));