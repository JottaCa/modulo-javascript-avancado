let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado) {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('começar o processo de ferver a água');
            resolve();
        } else {
            console.log('é necessário ligar o fogâo e colocar a chaleira no fogo para ferver a água');
            reject();
        }
    });
}

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
console.log('fazendo café');