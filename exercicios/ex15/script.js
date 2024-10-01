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

console.log(`Preço de venda do produto: R${precofinal2}`)

// Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto é R$ 300,00.

let orcamento = 250
let desconto1 = 50
let produto2 = 300;

const precodesconto1 = produto2 - desconto1;
const orcamento2 = orcamento = true;
console.log(`Preço com desconto: R${precodesconto1} e Está dentro do orcamento? ${orcamento2}`);

// Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em um estoque como uma string ("20") e outra que representa a quantidade mínima necessária de produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um número. Imprima no console se a quantidade é suficiente ou não.

