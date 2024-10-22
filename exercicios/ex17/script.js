// Objeto

let carro = {
    marca: "BMW",
    modelo: "M3",
    ano: "2024",
    cor: "azul escuro",
    airbag: true,
    itens: ["abs", "2 portas", "motor v12"],
}

// Acessar os valores das chaves

// console.log(carro.cor)
// console.log(carro.airbag)
// console.log(carro.ano)
// console.log(carro.marca)
// console.log(carro.ano)

console.log(carro["modelo"]);

carro.cor = "verde";
console.log(carro);

carro.kmrodados = 15000
console.log(carro);