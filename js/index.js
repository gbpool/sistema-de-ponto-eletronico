const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const DialogdiaMesAno = document.getElementById("dialog-dia-mes-ano")
const horaMinSeg = document.getElementById("hora-min-seg");
const DialogHoraMinSeg = document.getElementById("dialog-hora-min-seg")
const arrayDayWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"];
const selecTiposPontos = document.getElementById("select-tipos-pontos");






//logica pra mostrar o proximo ponto
let ProxPonto= 
{
    "Entrada": "intervalo",
    "intervalo": "Volta-intervalo",
    "Volta-intervalo": "Saida",
    "Saida": "Entrada"
} 











// coletar a localizaçao do usuario
const dialogPonto = document.getElementById("dialog-ponto");



navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});




navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
} );




//logica do botao pra abrir
const btnResgistrarPonto = document.getElementById("btn-registrar-ponto");
btnResgistrarPonto.addEventListener("click", () => {


    //auto-selecionar o proximo ponto de acordo com o ultimo

    let dialogSelect = document.getElementById("select-tipos-pontos");

    let TipoUltimoPonto = localStorage.getItem("tipoUltimoPonto");
    console.log(TipoUltimoPonto)

    dialogSelect.value = ProxPonto[TipoUltimoPonto]




    dialogPonto.showModal();
});


const btnDialogFechar = document.getElementById("btn-dialog-fechar");
btnDialogFechar.addEventListener("click", () =>{
    

    dialogPonto.close();







});




function salvarRegistroLocalStorage(ponto) {
    let TodosOsPontos = localStorage.getItem("registros");

    if(TodosOsPontos) {
        return[];
    }

    return JSON.parse(TodosOsPontos)


    
    
}



function salvarRegistroLocalStorage(ponto) {
    let pontos = recuperarPontosLocalStorage();

    pontos.push(ponto);


    localStorage.setItem("registro", JSON.stringify(ponto));
}




const divAlerta = document.getElementById("div-alerta");



//evento para aparecer o menu de selecionar o tipo de ponto
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


dialogPonto.close();

const divAlerta = document.getElementById("div-alerta")


//aqui ta salvando o registro


    localStorage.setItem("registro", ponto)
    localStorage.setItem("tipoUltimoPonto", tipoPonto);
    
    console.log(ponto)




    
    divAlerta.classList.remove("hidden");
    divAlerta.classList.add("show");
    
   const AlertaTexto = document.getElementById("alerta-texto")
   AlertaTexto.textContent = "Ponto Registrado como:"  +tipoPonto +  horaCompleta()






setTimeout(() => {

    divAlerta.classList.remove("show");
    divAlerta.classList.add("hidden");

},5000);


});






//funçao para mostrar e atualizar a hora
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
    DialogHoraMinSeg.textContent = horaCompleta();
}







 atualizaHora();
setInterval(atualizaHora, 1000);












diaSemana.textContent = daySemana();

diaMesAno.textContent = dataCompleta();
DialogdiaMesAno.textContent = dataCompleta();
horaMinSeg.textContent = horaCompleta();