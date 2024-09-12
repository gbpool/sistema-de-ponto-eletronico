const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
const arrayDayWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"];


const selecTiposPontos = document.getElementById("select-tipos-pontos");















const dialogPonto = document.getElementById("dialog-ponto");



navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});




navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
} );




const btnResgistrarPonto = document.getElementById("btn-registrar-ponto");
btnResgistrarPonto.addEventListener("click", () => {
    dialogPonto.showModal();
});


const btnDialogFechar = document.getElementById("btn-dialog-fechar");
btnDialogFechar.addEventListener("click", () =>{
    dialogPonto.close();
});







const btnDialogRegistrarPonto = document.getElementById("btn-dialog-registrar-ponto");
btnDialogRegistrarPonto.addEventListener("click", () => {

    let data = dataCompleta();
    let hora = horaCompleta();
    let tipoPonto = document.getElementById("select-tipos-pontos").value;

    let ponto = {
        "data" : dataCompleta,
        "hora": horaCompleta,
        "tipo": tipoPonto,
        "Id": 1
    }

    localStorage.setItem("registro", JSON,Stringify(ponto));
    
    console.log(ponto)
});








function daySemana() {
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

setInterval(atualizaHora, 1000);









diaSemana.textContent = daySemana();

diaMesAno.textContent = dataCompleta();

horaMinSeg.textContent = horaCompleta();


