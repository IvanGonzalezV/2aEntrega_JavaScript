console.log("Curso de JS")


/* PROYECTO: 2 - Tabla de Multiplicar con opciones para seleccionar rango y tabla */

let numero = parseInt(prompt("Ingrese el número para definir la tabla a multiplicar:"));

let limiteSuperior = parseInt(prompt("Ingrese el limite superior"))
let tablaMultplicar = []; /* array vacio */

for (let i = 1; i <= limiteSuperior; i++) {
let resultado = numero * i;
tablaMultplicar.push(`${numero} * ${i} = ${resultado}`);
}

let resultadosDiv = document.getElementById("resultados");

resultadosDiv.innerHTML = tablaMultplicar.join(`<br>`);


console.log(tablaMultplicar);
alert(tablaMultplicar.join(`\n`))   

let inputElement = document.getElementById("floatingInput");
inputElement.value = numero;

let limiteSuperiorElement = document.getElementById("floatingLimiteSuperior");
limiteSuperiorElement.value = limiteSuperior;

let clearButton = document.getElementById("clear-button");

function clearResults() {
    resultadosDiv.innerHTML = '';
    inputElement.value = '';
}

clearButton.addEventListener("click", clearResults);