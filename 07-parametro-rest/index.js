function incentivarQuest(mensagem, ...nomesQuesters) {
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuest('Parabéns por chegar ao módulo de JavaScript avançado,', 'Jonathan', 'João', 'Pedro', 'Rafael');