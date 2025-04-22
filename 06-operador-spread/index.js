const pessoas = ['Jonathan', 'Carol', 'Adrielle'];
console.log(...pessoas); // Jonathan Carol Adrielle

// ---------- Concatenar dois arrays ----------
let pessoas1 = ['Jonathan', 'Carol', 'Adrielle'];
const pessoas2 = ['Pedro', 'João', 'Paulo'];

pessoas1 = [ ...pessoas1, ...pessoas2];
console.log(pessoas1); // ['Jonathan', 'Carol', 'Adrielle', 'Pedro', 'João', 'Paulo']


// ---------- Clonar objeto ----------
const pessoa1 = { nome: 'Jonathan', idade: 25};

const objetoClonado = { ...pessoa1 };
console.log(objetoClonado);