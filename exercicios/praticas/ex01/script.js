// Exercício 1: Manipulação de Array - parte 1
// a. Crie um array chamado produtos contendo três nomes de produtos.
let produtos = ['chocolate', 'salgadinho', 'bolacha'];
console.log(produtos);
// b. Acesse e imprima o segundo produto.
console.log(produtos[1]);
// c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.
produtos[2] = 'Notebook';
console.log(produtos);

// Exercício 2: Manipulação de Array - parte 2
// a. Crie um array chamado clientes contendo três nomes de clientes.
let clientes = ['Priscilla', 'eduarda', 'ester'];
console.log(clientes);
// b. Adicione um quarto cliente ao array.
clientes[3] = 'leticia';
console.log(clientes);
// c. Remova o último cliente e imprima o array atualizado.
delete clientes[3];
console.log(clientes);

// Exercício 3: Manipulação de Objetos - parte 1
// a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
let objeto = (produto = {
  nome: 'Salgado',
  preco: 1.99,
  quantidade: 200,
});

console.log(objeto);
// b. Acesse e imprima o nome do produto.
console.log(produto.nome);
// c. Modifique o preço do produto e imprima o objeto atualizado
produto.preco = 3.99;
console.log(objeto);

// Exercício 4: Manipulação de Objetos - parte 2
// a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
let venda2 = {
  cliente: 'Julio',
  produto: 'Coca-coca',
  valor: '4.99',
};
console.log(venda2);
// b. Adicione a propriedade data ao objeto.
venda2[3] = 'data';
console.log(venda2);
// c. Remova a propriedade produto e imprima o objeto atualizado

delete venda2.produto;
console.log(venda2);

// Exercício 5: Manipulação dos Tipos Referências
// a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
// b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
// c. Crie um objeto funcionario e atribua seus valores para um novo objeto novoFuncionario.
// d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi alterado
