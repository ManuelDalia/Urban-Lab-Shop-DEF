import { useState } from "react";

const products = [
  { id: 1, name: "Zombie Skater Tee #1", price: 49 },
  { id: 2, name: "Zombie Skater Tee #2", price: 49 },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size) => {
    setCart([...cart, { ...product, size }]);
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Urban Lab Streetwear</h1>
      <h2>Collezione "Street Born, Undead Raised"</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: 20 }}>
          <h3>{product.name} – CHF {product.price}</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {sizes.map((size) => (
              <button key={size} onClick={() => addToCart(product, size)}>
                {size}
              </button>
            ))}
          </div>
        </div>
      ))}
      <hr />
      <h2>Carrello</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} – Taglia {item.size} – CHF {item.price}
          </li>
        ))}
      </ul>
      <p>
        <strong>
          Totale: CHF {cart.reduce((sum, item) => sum + item.price, 0)}
        </strong>
      </p>
    </div>
  );
}
