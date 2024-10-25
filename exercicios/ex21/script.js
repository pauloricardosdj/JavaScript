// function nomeFuncao() { instrução } - sintaxe básica

// Mensagem para iniciar o cadastro
function enviarmensagem() {
  console.log('Para continuar você precisa informar o seu nome para cadastro!');
}

// enviarmensagem();

// cadastro de usuário

function cadastrar(nome, sobrenome) {
  console.log(`Olá ${nome} ${sobrenome}, você foi cadastrado com sucesso!`);
}

// cadastrar("Paulo", "Ricardo");

// operações matemáticas

function banco(deposito, saque) {
  let saldo = deposito - saque;
  return saldo;
}

// console.log(banco(1000,60));

// função principal

function main() {
  enviarmensagem();
  cadastrar('Daniel', 'Porto');
  let saldo = banco(10000, 780);
  console.log(`O saldo atual da sua conta é de ${saldo} reais`);
}

main();
