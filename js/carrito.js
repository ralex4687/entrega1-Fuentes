let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];


let cartSection = document.getElementById("cart-section")

function renderCarrito (cartItems){
    cartSection.innerHTML = "";

    if(cartItems.length === 0){
        cartSection.innerHTML = "<h2>No has seleccionado ninguna producto</h2>";
        calcularTotal(cartItems);
        return;

    }


    cartItems.forEach((producto, index) => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <h4>Precio: $${producto.precio}</h4>
                          <div>
                          <button class="restar">-</button>
                          <span>${producto.cantidad}</span>
                          <button class="sumar">+</button>
                          </div>
                          <p>Subtotal: $${producto.precio * producto.cantidad}</p>`;
                                              

        cartSection.appendChild(card);

        const btnSumar = card.querySelector(".sumar");
        const btnRestar = card.querySelector(".restar");

        btnSumar.onclick = () => {
            producto.cantidad++;
            actualizarCarrito();
        }

        btnRestar.onclick = () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                cartProducts.splice(index, 1);
            }
            actualizarCarrito();
        }

  
        
    });
    
    calcularTotal(cartItems);
}

function calcularTotal(cartItems) {
    const total = cartItems.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.cantidad);
    }, 0);

    const totalElemento = document.getElementById("total-carrito");
    
    if (cartItems.length === 0) {
        totalElemento.innerHTML = '<p>Total: $0</p>';
    } else {
        totalElemento.innerHTML = `
            <p>Total: $${total}</p>
            <button id="vaciar-carrito">Vaciar Carrito</button>
            <button id="finalizar-compra">Finalizar Compra</button>
        `;

        document.getElementById("vaciar-carrito").onclick = () => {
            cartProducts = [];
            actualizarCarrito();
        };

        document.getElementById("finalizar-compra").onclick = mostrarRecibo;
    };

}

function actualizarCarrito() {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    renderCarrito(cartProducts);
}

function mostrarRecibo(totalFinal) {
    let detalleCompra = "Resumen de tu Compra:\n\n";

    cartProducts.forEach(producto => {
        detalleCompra += `${producto.nombre} - Cantidad: ${producto.cantidad} - Subtotal: $${producto.precio * producto.cantidad}\n`;
    });
}


Swal.fire({
  title: "Desea confirmar su compra?",
  text: "No podrás revertir esto!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#99b898",
  cancelButtonColor: "#ff847c",
  confirmButtonText: "Sí, confirmar"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "¡Compra Realizada!",
      text: "Gracias por tu compra.",
      icon: "success"
    });
  }
});