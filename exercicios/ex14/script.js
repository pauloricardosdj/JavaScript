// && (AND) - ambas as condições são verdadeiras.
let idade = 20;
let codigopromocional = true;

let idade2 = 15;

//Verificação se o usuário tem idade suficiente e possui um código
let podefazerlogin = idade >= 18 && codigopromocional; // true
console.log(podefazerlogin);
let podefazerlogin2 = idade2 >= 18 && codigopromocional; // false
console.log(podefazerlogin2);

// || (OR) - Apneas uma condição é verdadeira.
let loginor = idade >=18 || codigopromocional; // true
let loginor2 = idade2 >= 18 || codigopromocional; //true
console.log(loginor);
console.log(loginor2);

let promocional = false;
console.log(idade2 >=18 || promocional); // false

// ! (NOT) - inverte valor booleano.
let perfillconfigurado = false;

// Verificação se o perfil não está configurado
let alerta = !perfillconfigurado;
console.log(alerta);