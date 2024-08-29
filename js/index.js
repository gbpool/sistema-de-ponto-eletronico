const diaSemana = document.getElementById("dia-semana");
const diaMesAno= document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
 
//todo conjunto numerico (exceto o ano) deve ter 2 digitos

//retornar dia da semana por extenso(em pt-br)

function diaSemana() {
    //retornar dia da semana
}





function dataCompleta() {
    const date = new Date();
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

function horaCompleta() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
 
diaMesAno.textContent = dataCompleta();

horaMinSeg.textContent = horaCompleta();


