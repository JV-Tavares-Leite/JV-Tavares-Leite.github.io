let display = document.getElementById("display");
function adicionarValor(valor) {
    display.value += valor;
}
function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}
