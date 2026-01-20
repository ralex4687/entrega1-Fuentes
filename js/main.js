const saboresPizzas = ["Muzzarella", "Napolitana", "Jamon y Morron"];
const saboresEmpanadas = ["Carne", "Pollo", "Verduras"];
const precioPizza = 8500;
const precioEmpanada = 2000;

let totalPedido = 0;
let opcionMenu = "";

function calcularPrecio(cantidad, precio) {
    return cantidad * precio;
}

function listaDeSabores(lista) {
    let menu = "Seleccione el número del sabor:\n";
    for (let i = 0; i < lista.length; i++) {
        menu = menu + (i + 1) + ". " + lista[i] + "\n";
    }
    return menu;
}

alert("¡Bienvenido a Pizzería René!");

while (opcionMenu !== "0") {
    opcionMenu = prompt("MENÚ PRINCIPAL 1. - Pizza 2. Empanadas - 0. Cerrar y ver total -- Elija una opción:");

    if (opcionMenu === "1") {
        let seleccion = parseInt(prompt(listaDeSabores(saboresPizzas)));
        if (seleccion >= 1 && seleccion <= saboresPizzas.length) {
            let cantidad = parseInt(prompt("¿Cuántas pizzas de " + saboresPizzas[seleccion - 1] + " desea?"));
            
            if (cantidad > 0) {
                totalPedido = totalPedido + calcularPrecio(cantidad, precioPizza);
                alert("Agregado al pedido.");
            }
        } else {
            alert("Error: El número de sabor no existe.");
        }

    } else if (opcionMenu === "2") {
        let seleccion = parseInt(prompt(listaDeSabores(saboresEmpanadas)));
        
        if (seleccion >= 1 && seleccion <= saboresEmpanadas.length) {
            let cantidad = parseInt(prompt("¿Cuántas empanadas de " + saboresEmpanadas[seleccion - 1] + " desea?"));
            
            if (cantidad > 0) {
                totalPedido = totalPedido + calcularPrecio(cantidad, precioEmpanada);
                alert("Agregado al pedido.");
            }
        } else {
            alert("Error: El número de sabor no existe.");
        }
    
    } else if (opcionMenu === "0") {
        alert("Resumen de su compra: El total a pagar es: $" + totalPedido);
        console.log("Pedido cerrado. Total: $" + totalPedido);
    
    } else {
        alert("Opción no válida.");
    
    }
}