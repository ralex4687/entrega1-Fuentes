let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];


let cartSection = document.getElementById("cart-section")

function renderCarrito (cartItems){
    cartSection.innerHTML = "";

    cartItems.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <h4>$${producto.precio}</h4>
                          <button class ="botonEliminar">Eliminar</button>
                          `;

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
        "cartproducts",
        JSON.stringify(cartProducts)
    );

    renderCarrito(cartProducts);
}

function calcularTotal(cartItems) {
    let total = 0;

    cartItems.forEach(producto => {
        total += producto.precio;
    });

    document.getElementById("total-carrito").innerText = `Total: $${total}`;

}

renderCarrito(cartProducts);

