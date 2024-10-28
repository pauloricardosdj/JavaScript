// Retorno de uma função

let pedido = {
    id: 1234,
    nome: "João",
    email: "joao@example.com",
    lanche: 12,
    batatafrita: 6,
    suco: 4,
};

// Múltiplos parâmetros
// 3
function enviarnotificacao(nome, idpedido, email) {
    // simular o envio de um email
    console.log(`Enviando email para ${email} confirmando o pedido de número ${idpedido}`);
    console.log(`Mensagem: ${nome} pedido confirmado`);
    // não possui retorno explícito
};

enviarnotificacao(pedido.nome, pedido.id, pedido.email); // chamada ou execução

// Função principal que irá calcular e retornar o valor do pedido
// 4
function processarpedido(id, item1, item2, item3) {
    let totalpedido = item1 + item2 + item3;
    console.log("Pedido: " + id + " Processado")
    console.log("O total do pedido é :" + totalpedido);
    return totalpedido; // Encerrou a função
    
}

let retornodafuncao = processarpedido(pedido.id, pedido.lanche, pedido.batatafrita, pedido.suco);

console.log(retornodafuncao + retornodafuncao)