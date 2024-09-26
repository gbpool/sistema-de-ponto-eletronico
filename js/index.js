const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
 
//todo conjunto numerico (exceto o ano) deve ter 2 digitos

//retornar dia da semana por extenso(em pt-br)

function diaSemana() {
    //retornar dia da semana
    const date = new Date();
    return arrayDayWeek[date.getDay()]
}





function dataCompleta() {
    const date = new Date();
    return String(date.getDate()).padStart(2, '0') + "/" + String((date.getMonth() + 1)).padStart(2, '0') + "/" + date.getFullYear();
}



function horaCompleta() {
    const date = new Date();
    return String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String(date.getSeconds()).padStart(2,'0');
}



function atualizaHora() {
    horaMinSeg.textContent = horaCompleta();
}







 atualizaHora();
setInterval(atualizaHora, 1000);










diaSemana.textContent = daySemana();

diaMesAno.textContent = dataCompleta();

horaMinSeg.textContent = horaCompleta();