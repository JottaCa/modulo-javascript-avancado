// ---------- Síncrono ----------
function colocarAguaParaFerver() {
    console.log('colocar água para ferver');
}

function preprararPraPassarOCafe() {
    console.log('pegar o pó de café');
    console.log('pegar o filtro de café');
    console.log('colocar o café no filtro');
    console.log('colocar o filtro em cima da xícara');
}

function passarOCafe() {
    console.log('passar o café');
}

colocarAguaParaFerver();
preprararPraPassarOCafe();
passarOCafe();

// ---------- Assíncrono ----------
function colocarAguaParaFerver() {
    console.log('colocar água para ferver');

    setTimeout(() => {
        console.log('água ferveu');
        passarOCafe();
    }, 5000);
}

function preprararPraPassarOCafe() {
    console.log('pegar o pó de café');
    console.log('pegar o filtro de café');
    console.log('colocar o café no filtro');
    console.log('colocar o filtro em cima da xícara');
}

function passarOCafe() {
    console.log('passar o café');
}

colocarAguaParaFerver();
preprararPraPassarOCafe();