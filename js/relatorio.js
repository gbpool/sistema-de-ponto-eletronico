
const registro = localStorage.getItem("ponto");




const dialogAusencia = document.getElementById("dialog-ausencia");
const btnFecharAusencia = document.getElementById("fechar-ausencia");







// codagem pra abrir o dialog de justificativa de ausencia
const btndialogAusencia = document.getElementById("mostrar-ausencia");
    btndialogAusencia.addEventListener ("click", () => {
    dialogAusencia.showModal();
    
  

    });
// codagem pra fechar o dialog de ausencia
    btnFecharAusencia.addEventListener("click", () => {
        dialogAusencia.close();
    });

    



// Recuperar dados do Local Storage
const registros = localStorage.getItem("ponto");
