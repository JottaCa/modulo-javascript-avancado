let pessoas = [
    { nome: 'Jonathan', idade: 25},
    { nome: 'Carol', idade: 26},
    { nome: 'Adrielle', idade: 30}
];

// let pessoasComIdadeDe25Anos = [];
// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade === 25) {
//         pessoasComIdadeDe25Anos.push(pessoas[i]);
//     }
// }

let pessoasComIdadeDe25Anos = pessoas.filter((pessoa) => pessoa.idade === 25);

console.log(pessoasComIdadeDe25Anos);
