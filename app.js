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
    limiteSuperiorElement.value = '';
}

clearButton.addEventListener("click", clearResults);

/* 2a parte */

let ultimasCombinaciones = [];

function registrarCombinacion(numero, limiteSuperior) {
        ultimasCombinaciones.unshift({ numero, limiteSuperior });

    if (ultimasCombinaciones.length > 20) {
        ultimasCombinaciones.pop();
    }

    // Llamada a la función
    llenarListaDesplegable();
}


function llenarListaDesplegable() {
    const select = document.getElementById("ultimas-combinaciones");

    select.innerHTML = '<option value="" disabled selected>Última Combinacion</option>';

    for (const combinacion of ultimasCombinaciones) {
        const option = document.createElement("option");
        option.value = `${combinacion.numero} * ${combinacion.limiteSuperior}`;
        option.text = `${combinacion.numero} * ${combinacion.limiteSuperior}`;
        select.appendChild(option);
    }
}

registrarCombinacion(numero, limiteSuperior);
