let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      resolve(true);
      console.log("Começando o processo de ferver a água");
    } else {
      reject();
      console.log(
        "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água"
      );
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise(function (resolve) {
    console.log("Passando o café");
    resolve(true);
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise(function (resolve) {
    console.log("Tomando o café");
    resolve(true);
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise(function (resolve) {
    console.log("Lavando a xícara");
    resolve(true);
  });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;
/*
>>> USANDO O THEN:

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    .then(() => passarCafe())
    .then(() => tomarCafe())
    .then(() => lavarXicara())
    .then(() => console.log('Finalizado ritual do café, bora trabalhar'));

// >>> USANDO ASYNC E AWAIT:
*/
async function iniciarProcessoDeFazerCafe() {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    console.log(aguaFervida);
    const cafePassado = await passarCafe(aguaFervida);
    const cafeTomado = await tomarCafe (cafePassado);
    const xicaraLavada = await lavarXicara(cafeTomado);
    if (xicaraLavada) console.log('Finalizado o ritual de tomar café, bora trabalhar');
}

iniciarProcessoDeFazerCafe();