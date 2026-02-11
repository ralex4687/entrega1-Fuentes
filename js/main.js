const productos = [
    { 
        id: 1,
        nombre:"Muzzarella",
        precio: 11500 
    }, 

    { 
        id: 2,
        nombre:"Napolitana",
        precio: 12500 
    }, 
    { 
        id: 3,
        nombre:"Cuatro quesos",
        precio: 14500 
    }, 

    { 
        id: 4,
        nombre:"Jamon y morron",
        precio: 13500 
    }, 

    { 
        id: 5,
        nombre:"Jamon y queso",
        precio: 2500 
    }, 
    { 
        id: 6,
        nombre:"Capresse",
        precio: 2500 
    },
    { 
        id: 7,
        nombre:"Calabaza y queso",
        precio: 2500 
    }, 
    { 
        id: 8,
        nombre:"Panceta y ciruela",
        precio: 2500 
    },  
];

let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

let productContainer = document.getElementById("product-container")

function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <h4>$${producto.precio}</h4>
                          <button class="productoAgregar" id="${producto.id}">Agregar</button>`;
        productContainer.appendChild(card);
        
    });

}

renderProductos(productos);
agregarAlCarrito();


function agregarAlCarrito () {
    const addButton = document.querySelectorAll(".productoAgregar");
    
    addButton.forEach(button => {
        button.onclick = (e) => {
            cartProducts = JSON.parse(localStorage.getItem("cartProducts"))

            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId);
            cartProducts.push(selectedProduct);

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        };

    });
};







