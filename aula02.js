//var -> Criando uma variável

// var altura = 5;
// var comprimento = 8;

// var area = altura * comprimento
// console.log(area)

// let -> Cria uma variável (forma mais atualizada de criar uma variável)

const altura = 5;
const comprimento = 8;
const forma = "retângulo";
let area;

if (forma === "retângulo"){
    area = altura * comprimento
}else if(forma === "triângulo"){
    area = (altura * comprimento) / 2
} else {
    console.log("Deveria ser uma")
}
console.log(area);

// const -> Utilizada para criar "variáveis" que são fixas, que não se alteram
// Condições booleanas (Truly ou falsy)
// 0 = false
// 1 = true

const usuarioLogado = true;
const contaPaga = false;

console.log(0 == false); //True
console.log(contaPaga == 0) //True
console.log(contaPaga === 0); //False
console.log("" == false); //True
console.log(1 == true); //True

//Nulo e indefinido
// nulo -> vazio ou nada

let luiza;
let luana = null;
let numero = 3;
let texto = "Eu gosto de programação <3"

//Consultando os tipo de variáveis;

console.log(typeof luiza);
console.log(typeof luana);
console.log(typeof numero);
console.log(typeof texto);

// Conversão de variável

const numeroNumber = 390;
const numeroString = "390"

console.log(numeroNumber == numeroString); // compara apenas o valor
console.log(numeroNumber === numeroString); // compara também o tipo
console.log(numeroNumber + numeroString); // concatenação
console.log(numeroNumber + Number(numeroString)); // Transformando a string + soma de números


