let listaa = [1,2,3];

let listab = listaa;
listab[0] = 99;

console.log(listab);
console.log(listaa);

let obja = { nome: "Paulo"}
let objb = obja;
objb.idade = 21;

console.log(objb);
console.log(obja);

let listac = [...listaa];
console.log(listac);
listac[3] = 100;

console.log(listac);
console.log(listaa);

let objc = {...obja};
objc.cordecabelo = "preto";
console.log(objc);
console.log(obja);
