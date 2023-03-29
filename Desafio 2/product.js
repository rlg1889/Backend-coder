const Contenedor = require('./desafio2.js')

const run = async function () {
    let contenedor = new Contenedor('productos.txt')
    contenedor.save({
        title: 'Lenovo IdeaPad 3i',
        description: 'Notebook con Procesador Intel® Core™ i7 de 11va generación',
        price: 395999,
        thumbnail: 'Sin imagen',
        code: 'a123',
        stock: 15
    })

    contenedor.save({
        title: 'Lenovo Smart Tab M10 FHD',
        description: 'Tablet para toda la familia con Pantalla de 10.3” FHD IPS de 330 nits ',
        price: 100999,
        thumbnail: 'Sin imagen',
        code: 'a456',
        stock: 30
    })

    contenedor.save({
        title: 'Mochila para juegos activa Lenovo Legion',
        description: ' Forjado con materiales PET reciclados.',
        price: 24999,
        thumbnail: 'Sin imagen',
        code: 'a789',
        stock: 10
    })
    console.log(contenedor.getProductsById(1));
    console.log(contenedor.getProductsById(5));
    console.log(contenedor.getAllProducts());
    console.log(contenedor.deleteProductById(1));
    console.log(contenedor.deleteProductById(6));
    console.log(contenedor.getAllProducts());
    console.log(contenedor.deleteAll());
    console.log(contenedor.getAllProducts());
};

run();