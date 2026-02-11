let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];


let cartSection = document.getElementById("cart-section")

function renderCarrito (cartItems){
    cartSection.innerHTML = "";

    if(cartItems.length === 0){
        cartSection.innerHTML = "<h2>No has seleccionado ninguna producto</h2>"
    }


    cartItems.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <p>Cantidad: ${producto.cantidad}</p>
                          <h4>Precio: $${producto.precio}</h4>
                          <button class ="botonEliminar" id="${producto.id}">Eliminar</button>`;

        cartSection.appendChild(card);

        const botonEliminar = card.querySelector(".botonEliminar");
        botonEliminar.onclick = () => {
            eliminarDelCarrito(producto.id);

        };
        
    });
    
    calcularTotal(cartItems);
}

function eliminarDelCarrito(idProducto){
    cartProducts = cartProducts.filter(
        producto => producto.id !== idProducto
    );

    localStorage.setItem(
        "cartProducts",
        JSON.stringify(cartProducts)
    );

    renderCarrito(cartProducts);
}

function calcularTotal(cartItems) {
    let total = 0;

    cartItems.forEach(producto => {
        total = total + (producto.precio * producto.cantidad);
    });

    const totalElemento = document.getElementById("total-carrito");
    if (totalElemento) {
        const linkWA = "https://wa.me/5491100000000?text=Hola!%20Quiero%20hacer%20un%20pedido";
        totalElemento.innerHTML = `
            Total: $${total} 
            <a href="${linkWA}" class="btn-wa">Hacer pedido</a>
        `;
    }


}

renderCarrito(cartProducts);

