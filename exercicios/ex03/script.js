// redeclarações
let nome = "Paulo"; //Erro
const nomeprofessor = "Ricardo"; //Erro

var mensagem = "Olá";
console.log(mensagem);
var mensagem = "Bem Vindo!";
console.log(mensagem);
// reatribuições - mutabilidade
nome = "Lira";
console.log(nome);

mensagem = "Olá, Bem Vindo!";
console.log(mensagem);
// Tipo const - Erro

// hoisting
var segundamensagem; // Não atribui nenhum valor
console.log(segundamensagem);
segundamensagem = "Utilizando Hoisting";
console.log(segundamensagem);

//console.log(terceiramensagem);
//const terceiramensagem = "Olá eu sou let"; // Let e o const - Não fazem hoisting

// visibilidade

{
    console.log("Isso é um bloco")
    let idade = 60;
    const real = 50;
    console.log(idade);
    console.log(real);
}
 // Bloco de instrução
//function () {instruções - tarefas especificas} // Bloco de função

function executar() {
    // instruções dentro da função
    console.log("Dentro da função");
    var numero = 10;
    console.log(numero);
}

executar()