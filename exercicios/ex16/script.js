// Aray
let lista = ["Banana", 23, true, "Maçã"]; // indice 0

lista = ["banana", "maça" , "pera"];

// console.log(lista);
lista[0] = "laranja";
// console.log(lista[0]);
// console.log(lista);

let nome = "João";
nome[0] = "M"

// console.log(nome);

let lista2 = ["Monitor", "Teclado", "Mouse"];

console.log(lista2[0])
console.log(lista2[1])
console.log(lista2[2])

lista2[0] = "WebCam";
console.log(lista2)

lista2[4] = "Monitor";
console.log(lista2)

console.log(lista2.length);

// lista2.length = lista2.length - 2// 5
// console.log(lista2);

let matirzvendas = [
    [100,200,300],
    [400,500,600],
    [700,800,900],
];

console.log(matirzvendas);
console.log(matirzvendas[1]);
matirzvendas[1][2] = 500;
console.log(matirzvendas[1]);

let resultadolojab = matirzvendas[1][0] + matirzvendas[1][1] + matirzvendas[1][2];
console.log(resultadolojab);