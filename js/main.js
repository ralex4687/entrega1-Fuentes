
const precioPizza = 8500;
const precioEmpanada = 2000;
const saboresPizzas = ["Muzzarella", "Napolitana", "Jamon y Morron"];
const saboresEmpanadas = ["Carne", "Pollo", "Verduras"];

let totalPedido = 0;
let opcionMenu = "";

function calcularTotal(cant, precioUnico) {
    let resultado = cant * precioUnico;
    return resultado;
}

alert("¡Bienvenido a Pizzería René!");


while (opcionMenu != "0") {
    opcionMenu = prompt("1. Pizza 2. Empanadas 0. Salir");
    if (opcionMenu == "1") {
        let seleccion = prompt("Sabores: 1. " + saboresPizzas[0] + "2. " + saboresPizzas[1] + "3. " + saboresPizzas[2]);
        if (seleccion == "1" || seleccion == "2" || seleccion == "3") {
            let cantidad = parseInt(prompt("¿Cuántas unidades desea?"));
            
            if (cantidad > 0) {
                totalPedido = totalPedido + calcularTotal(cantidad, precioPizza);
                alert("Pizza agregada.");
            }
        } else {
            alert("Sabor no válido");
        }

    } else if (opcionMenu == "2") {
       
        let seleccion = prompt("Sabores: 1. " + saboresEmpanadas[0] + "2. " + saboresEmpanadas[1] + "3. " + saboresEmpanadas[2]);

        if (seleccion == "1" || seleccion == "2" || seleccion == "3") {
            let cantidad = parseInt(prompt("¿Cuántas unidades desea?"));
            
            if (cantidad > 0) {
                totalPedido = totalPedido + calcularTotal(cantidad, precioEmpanada);
                alert("Empanadas agregadas.");
            }
        } else {
            alert("Sabor no válido");
        }

    } else if (opcionMenu == "0") {
        alert("El total es: $" + totalPedido);
    }
}