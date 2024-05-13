// Solicitar ao usuário para inserir um número de instalação
let numero = prompt("Insira um número:");

// Converter o número inserido para um número inteiro
numero = parseInt(numero);

// Verificar se o número é par ou ímpar
if(numero % 2 === 0) {
    console.log(numero + " é um número par.");
} else {
    console.log(numero + " é um número ímpar.");
}