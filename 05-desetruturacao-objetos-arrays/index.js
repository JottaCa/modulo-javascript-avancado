// ------- Desestruturação de objeto -------
let pessoa = { nome: 'Jonathan', sobrenome: 'Barbosa', idade: 25};
// let nome = pessoa.nome;
// let idade = pessoa.idade;

let { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

// ------- Desestruturação de array -------
const numeros = [1, 2, 3];

const [ um, dois, tres] = numeros;

console.log(um);
console.log(dois);
console.log(tres);