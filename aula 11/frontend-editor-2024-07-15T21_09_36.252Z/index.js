const letras = ['a', 'b', 'c', 'd']; 

function tornarMaiuscula(elemento, indice, array) {
 return elemento.toUpperCase();
}

const newLetras = letras.map(tornarMaiuscula);

const newLetras2 = letras.map(elemento => elemento.toUpperCase());

console.log("letras", newLetras)


