// Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00. Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do produto após aplicar o desconto e o imposto.

let produto = 200;
let desconto = 40;
let imposto = 12;

const precodesconto = produto - desconto;
const precofinal = precodesconto + imposto;

console.log(`Preço final do produto é: R$ ${precofinal}`);

// Exercício 2: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional de R$ 30,00. Calcule o preço de venda do produto.

let produto1 = 100;
let vender = 30;
const precofinal2 = produto1 + vender;

console.log(`Preço de venda do produto: R$ ${precofinal2}`)

// Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto é R$ 300,00.

let orcamento = 250
let desconto1 = 50
let produto2 = 300;

const precodesconto1 = produto2 - desconto1;
const orcamento2 = precodesconto1 <= orcamento;
console.log(`Preço com desconto: R$ ${precodesconto1} e Está dentro do orcamento? ${orcamento2}`);

// Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em um estoque como uma string ("20") e outra que representa a quantidade mínima necessária de produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um número. Imprima no console se a quantidade é suficiente ou não.

let quantidadeestoquestring = "20"; // Number 20

let quantidademin = 20;

// Conversão explicita de string para number
let quantidadeestoque = Number(quantidadeestoquestring);

// Verificação de igualdade estrita
let suficiente1 = quantidadeestoque === quantidademin; // True;

console.log(`A quantidade no estoque é suficiente? ${suficiente1}`);

// Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível como um booleano (true), outra que representa a quantidade de produtos no estoque (10), e uma terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto está disponível e tem a quantidade suficiente.

let produtodisponivel = true;
let estoque1 = 10;
let quantidademinestoque = 15;

// Verificação de disponibilidadde e quantidade
let quantidadesuficiente = estoque1 >= quantidademinestoque;
let produtodisponivelsuficinete = produtodisponivel && quantidadesuficiente;

console.log(`O produto está disponível e tem quantidade suficiente: ${produtodisponivelsuficinete}`);

// Not - verificação o produto está indisponível
let produtoindisponivel = !produtodisponivel;
console.log(`O produto está indisponível: ${produtoindisponivel}`);