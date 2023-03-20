class ProductManager {
    constructor(){
        this.products = [];
    }

    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock){
        let id_producto = (this.getProducts()).length;

        let Producto = {
            id: ++id_producto,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }

        if (
            title === undefined ||
            description === undefined ||
            price === undefined ||
            thumbnail === undefined ||
            code === undefined ||
            stock === undefined
          ) {
            return console.log("Todos los campos son obligatorios");
          }

        this.products.push(Producto);
        return this.products;
    }

    getProductsById(id_producto){
        let producto = this.products.find(producto=>producto.id === id_producto)
        
        if(producto){
            return console.log("El producto buscado es el siguiente ▶️",producto)
        }
        else{
            return console.log('❌ El producto con el ID ingresado no existe ❌')
        }
    }

}

const nuevoProducto = new ProductManager();

nuevoProducto.addProduct('Lenovo IdeaPad 3i', 'Notebook con Procesador Intel® Core™ i7 de 11va generación', 395999, 'Sin imagen','a123',15);
nuevoProducto.addProduct('Lenovo Smart Tab M10 FHD', 'Tablet para toda la familia con Pantalla de 10.3” FHD IPS de 330 nits ', 100999, 'Sin imagen','a456',30);
nuevoProducto.addProduct('Mochila para juegos activa Lenovo Legion', ' Forjado con materiales PET reciclados.', 24999, 'Sin imagen','a789',10);

console.log(nuevoProducto.getProducts());
console.log(nuevoProducto.getProductsById(2))
console.log(nuevoProducto.getProductsById(0))