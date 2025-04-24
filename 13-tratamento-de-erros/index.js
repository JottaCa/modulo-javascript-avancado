let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    if (typeof chaleiraEstaNoFogao != 'boolean') throw 'Somente o tipo booleano é aceito'; // erro gerado se o tipo da variável não for booleano

    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Começando o processo de ferver a água");
            resolve(true);
        } else {
            const menssagemDeErro = 'É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água';
            reject(menssagemDeErro);
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
  
let chaleiraEstaNoFogao = 'true';
let fogaoEstaLigado = true;

async function iniciarProcessoDeFazerCafe() {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        console.log(aguaFervida);
        const cafePassado = await passarCafe(aguaFervida);
        const cafeTomado = await tomarCafe (cafePassado);
        lavarXicara(cafeTomado);
    } catch (err) {
        console.log(err);  
    } finally {
        console.log('Finalizado o ritual de tomar café, bora trabalhar');
    }
};
  
iniciarProcessoDeFazerCafe();