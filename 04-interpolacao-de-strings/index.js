// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
//     return 'Primeiro nome: ' + primeiroNome + ' Último Nome: ' + ultimoNome + '. Idade: ' + idade;
// }

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
    return `Primeiro Nome: ${primeiroNome} Último Nome: ${ultimoNome}. Idade: ${idade}`;
}

// Variáveis
console.log(imprimirInformacoesPessoa('Jonathan', 'Barbosa', 25)); // Primeiro Nome: Jonathan Último Nome: Barbosa. Idade: 25

// Função
console.log(`${imprimirInformacoesPessoa('Carol', 'Nascimento', 26)}. Professora.`); // Primeiro Nome: Carol Último Nome: Nascimento. Idade: 26. Professora.

// Expressão Aritmética
console.log(`Soma ${10 + 20}`); // Soma 30