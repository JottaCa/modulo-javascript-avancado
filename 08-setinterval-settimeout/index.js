// ---------- SetTimeOut ----------
// O alerta aparecerá após 3 segundos
// setTimeout(() => {
//     alert('Olá mundo!');
// }, 3000);

// ---------- SetInterval ----------
// setInterval(() => {
//     console.log('Executando a cada 2 segundos');
// }, 2000);

let idDoIntervalo = setInterval(() => {
                        console.log('Executando a cada 2 segundos');
                    }, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo); // limpa o intervalo