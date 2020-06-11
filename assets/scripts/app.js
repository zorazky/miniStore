class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.descrition = desc;
        this.price = price;
    }
}

class ShoppingCart {
    items = [];

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {

    }

    render() {
        const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}" >
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://www.serta.com/sites/ssb/serta.com/uploads/2018/accessories/pillows/Cool%20Comfy%20Queen/CoolComfy1.jpg',
            'A soft pillow!',
            19.99
        ),
        new Product(
            'A Carpet',
            'https://www.carpetship.com/wp-content/uploads/2019/08/Blue-Tabriz-Rug-Blue-Persian-carpet-for-sale-2x3m-DR406-6870-600x824.jpg',
            'An expensive carpet',
            89.99
        )
    ];

    constructor() {}

    render() {
        
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
             const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
}

}

class Shop {
    render() {
        const renderHook = document.getElementById('app');

        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();   

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

const shop = new Shop();
shop.render();
    


