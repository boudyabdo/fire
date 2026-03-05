<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessories - Lyam Market</title>
    <link rel="stylesheet" href="E:\o\nbs\the market\accessories.css">
</head>
<body>
    <header>
        <div class="logo">
            <a href="index.html">Lyam Market</a>
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="clothing.html" target="_blank">Clothing</a></li>
                <li><a href="footwear.html" target="_blank">Footwear</a></li>
                <li><a href="bags.html" target="_blank">Bags</a></li>
                <li><a href="accessories.html" target="_blank">Accessories</a></li>
            </ul>
        </nav>
    </header>
    <div id="store"></div>
    <main>
        <section class="category-header">
            <h1>Accessories</h1>
            <p>Complete your look with our premium range of accessories.</p>
        </section>

        <div class="products-grid">
            <div class="product-item">
                <img src="images/watch.jpg" alt="Stylish Watch">
                <h3>Stylish Watch</h3>
                <p>$75.00</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-item">
                <img src="images/sunglasses.jpg" alt="Sunglasses">
                <h3>Sunglasses</h3>
                <p>$45.00</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-item">
                <img src="images/earrings.jpg" alt="Gold Earrings">
                <h3>Gold Earrings</h3>
                <p>$30.00</p>
                <button>Add to Cart</button>
            </div>
            <div class="product-item">
                <img src="images/hat.jpg" alt="Wide Brim Hat">
                <h3>Wide Brim Hat</h3>
                <p>$25.00</p>
                <button id="store">Add to Cart</button>
            </div>
            <!-- Add more products here -->
        </div>
    </main>
    <script type="text/babel">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        function Store() {
            const [cart, setCart] = React.useState([]);
    
            const addToCart = (product) => {
                setCart(prevCart => {
                    const existingItem = prevCart.find(item => item.id === product.id);
                    if (existingItem) {
                        return prevCart.map(item =>
                            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                        );
                    }
                    return [...prevCart, { ...product, quantity: 1 }];
                });
            };
    
            const removeFromCart = (id) => {
                setCart(cart.filter(item => item.id !== id));
            };
    
            const updateQuantity = (id, amount) => {
                setCart(prevCart =>
                    prevCart.map(item =>
                        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
                    )
                );
            };
    
            const products = [
                { id: 1, name: "Sample Product 1" },
                { id: 2, name: "Sample Product 2" }
            ];
    
            return (
                <div>
                    <div className="products">
                        <h2>Products</h2>
                        {products.map(product => (
                            <div key={product.id}>
                                <span>{product.name}</span>
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
    
                    <div className="cart-container">
                        <h2>Shopping Cart</h2>
                        {cart.length > 0 ? cart.map(item => (
                            <div key={item.id}>
                                <span>{item.name} (x{item.quantity})</span>
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        )) : <p>Your cart is empty.</p>}
                    </div>
                </div>
            );
        }
    
        ReactDOM.createRoot(document.getElementById("store")).render(<Store />);
    </script>
    
    <footer>
        <p>&copy; 2024 Lyam Market. All rights reserved.</p>
    </footer>
</body>
</html>
