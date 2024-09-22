// Exercício 1: Escreva um programa simples que exiba uma string no terminal utilizando o console.log.
console.log("Olá mundo!")

// Exercício 2: Modifique o programa anterior para armazenar a mensagem em uma variável antes de exibi-la no console.
let mensagem = "Olá mundo!"
console.log(mensagem);

// Exercício 3: Declare três variáveis mutáveis: nome (string), idade (number) e isStudent (boolean).
let nome = "Paulo";
let idade = 34;
let isStudent = false;

// Exercício 4: Modifique o valor das variáveis anteriores e imprima os novos valores no console
nome = "Daniel";
idade = 30;
isStudent = true;
console.log(nome, idade, isStudent);

// Exercício 5: Crie uma variável constante que irá armazenar um número e imprima no console.
const valorproduto = 50;
console.log(valorproduto);

// Exercício 6: Declare duas variáveis, endereco e telefone, sem atribuir valores a elas
let endereço;
let telefone;

//Exercício 7: Declare variáveis com nomes descritivos para armazenar o nome de um produto, seu preço e a quantidade em estoque.
let nomeproduto = "Notebook";
let precoproduto = 1500;
let quantidadeemestoque = 20;
console.log(nomeproduto, precoproduto, quantidadeemestoque);

// Exercício 8: Declare uma variável para armazenar o nome de uma cidade e outra para armazenar a sua população. Exiba uma mensagem combinando ambas as variáveis
let cidade = 'São Paulo';
let população = '100000';
console.log('A cidade de ' + cidade + " Tem a população de " + população + "habitantes");
console.log(`A cidade de ${cidade} possui a população de ${população} habitantes`);