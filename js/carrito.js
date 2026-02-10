let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];


let cartSection = document.getElementById("cart-section")

function renderCarrito (cartItems){
    cartSection.innerHTML = "";

    cartItems.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <h4>$${producto.precio}</h4>
                          <button class ="botonEliminar"</button>
                          `;

        cartSection.appendChild(card);

        const botonEliminar = card.querySelector(".botonEliminar");
        botonEliminar.onclick = () => {
            eliminarDelCarrito(producto.id);

        };
        
    });
    
    calcularTotal(cartItems);
}