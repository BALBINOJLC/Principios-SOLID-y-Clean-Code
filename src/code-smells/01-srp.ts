(() => {

    interface Product {
        id: number;
        name: string;
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        loadProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }

    }

    class CaddCards {
        onAddToCart(productId: number) {
            console.log('Agregando al carrito ', productId);
        }
    }

    class CNotifications {
        notifyClients() {
            console.log('Enviando correo a los clientes'); //TODO: Principip de responsabilidad única
        }
    }


    const productBloc = new ProductBloc();
    const addCards = new CaddCards();
    const notifications = new CNotifications();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    notifications.notifyClients();
    addCards.onAddToCart(10);








})();