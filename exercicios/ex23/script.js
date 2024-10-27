// function nomeFuncao(PARÂMETRO) { instrução }

function soma(numero1 , numero2) {
    console.log(numero1 + numero2);
}

// nomefunction(ARGUMENTO) - chamada da função (executa o bloco de instruções)

soma(10, 5);

function calculoprecototal(precounitario , quantidade) {
    let total = precounitario * quantidade;
    console.log("O total da sua compra é: " + total);
}

let camiseta = 30;
quantidadeitem = 3;

calculoprecototal(camiseta, quantidadeitem);