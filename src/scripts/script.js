AOS.init();

const dataEvento = new Date("Dec 12, 2025 19:00:00");
const timeEvento = dataEvento.getTime();

const contaHora = setInterval(function(){
    const agora = new Date();
    const timeAtual = agora.getTime();

    const ateEvento = timeEvento - timeAtual;

    const diaEmMs = 1000 * 60 * 60 *24;
    const horaEmMs = 1000* 60 * 60;
    const minutosEmMs = 1000* 60;

    const diasAteEvento = Math.floor(ateEvento / diaEmMs);
    const horaAteEvento = Math.floor((ateEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((ateEvento % horaEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((ateEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento} D ${horaAteEvento} H ${minutosAteEvento} M ${segundosAteEvento} S`

    if(ateEvento < 0){
        clearInterval(contaHora);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
},1000);