console.log("Curso de JS")


// // PROYECTO: 2 - Tabla de Multiplicar opciones de rango y tabla

let numero = parseInt(prompt("Ingrese el número para definir la tabla a multiplicar:"));
let limiteSuperior = parseInt(prompt("Ingrese el numero hasta el cual quiere multiplicar:"));

let tablaMultplicar = []; 

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

let clearButton = document.getElementById("clear-button");

function clearResults() {
    resultadosDiv.innerHTML = '';
    inputElement.value = '';
}




// PROYECTO: 3 - Aplicacion de IVA

/* const iva = 1.16
let monto1 = parseInt(prompt("Ingrese el primer monto"))
let monto2 = parseInt(prompt("Ingrese el siguiente monto"))
let monto3 = parseInt(prompt("Ingrese el siguiente monto"))
let monto4 = parseInt(prompt("Ingrese el siguiente monto"))
let monto5 = parseInt(prompt("Ingrese el siguiente monto"))
const totalSinIva = monto1 + monto2 + monto3 + monto4 + monto5
const totalConIva = Math.round(totalSinIva * iva)

alert("Monto sin IVA: " + "$" + totalSinIva + "\nMonto con IVA: " + "$" + totalConIva) */