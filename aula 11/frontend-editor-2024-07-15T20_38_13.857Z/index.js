const numeros = [1, 2, 3, 4, 5, 6];

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("Soma:", soma)