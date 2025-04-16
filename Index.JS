let memoria = ""; // Variável para armazenar os valores.
var teste =document.getElementById("datainput");

function guardarvalor(tes) {
    console.log(teste);
    memoria += tes;
    teste.value = memoria;

}
