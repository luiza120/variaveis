// Alguns erros comuns


//const numero; 1° Erro não declarar uma constante

const minhaVar ="oi" //2° Erro: Não declarar uma variável e chamar no código;
console.log(minhaVar); // exemplo, chamar minhavar com V minúsculo;

console.error("Isso está errrado") //3° "Erro": Você pode declarar um erro com o console.error

// Condicional Abreviada if(){}

let idadeMinima = 18;
let idadeCliente = 17;

if(idadeCliente >= idadeMinima){
    console.log("Vinho")
} else {
    console.log("suco natural")
}

//Valor ternário
console.log(idadeCliente >= idadeMinima ? "Vinho" : "suco natural")
//modo ternário, utilizando a estrutura _____ >= ______ ? ______ : _______
//modo ternário, utilizando a estrutura _____ <= ______ ? ______ : _______
//modo ternário, utilizando a estrutura _____ == ______ ? ______ : _______

//Template String

const nome = "Luana";
const idade = 17;
const cidadeNatal = "Paraguay"

const apresentacao = " Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNatal;

console.log(apresentacao)

//template string
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade}, e nasci em ${cidadeNatal}`

console.log(apresentacao2)
