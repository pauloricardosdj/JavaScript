// Funções de alta ordem
// - Recebem uma ou mais funções como argumento
// - Recebem uma função como resultado

function aplicaroperacao(x, operacao) {
    return operacao(x);
}

function dobrar(numero) {
    return numero *2;
}

const resultado = aplicaroperacao(5, dobrar);
console.log(resultado);

// - Recebem uma função como resultado

function criarincrementador(incremento) {
    // Função de alta ordem
    return function(numero) {
        return numero + incremento
    };
}

const incrementar2 = criarincrementador(2);
console.log(incrementar2(5));