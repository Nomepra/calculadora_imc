function calcular_IMC() {
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    document.getElementById("IMC").innerHTML = peso / altura**2;
}