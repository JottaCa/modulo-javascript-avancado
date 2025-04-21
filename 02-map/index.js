let pessoas = [
    { nome: 'Jonathan', idade: 25},
    { nome: 'Carol', idade: 26},
    { nome: 'Adrielle', idade: 30}
]

// let nomeDasPessoas = [];
// for (let i = 0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome);
// }

let nomeDasPessoas = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos`);

console.log(nomeDasPessoas);
