// Parâmetros Opcionais e Valores padrão

function cumprimentar(saudacao, nome = "Visitante") {
    console.log(`Olá ${nome}, ${saudacao}`);
}

cumprimentar("Boa tarde");