import { useState } from "react";

export default function App() {
  const products = [
    { name: "T-Shirt", price: 500 },
    { name: "Shorts", price: 400 },
    { name: "Hoddie", price: 800 },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.name === product.name,
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 p-6 md:flex-row">
      <div className="flex-1 rounded-lg border border-zinc-500 p-6">
        <p className="text-xl font-bold">Products</p>
        <ul className="mt-4 space-y-2">
          {products.map((product, idx) => (
            <li key={idx} className="flex items-center justify-between gap-4">
              <p>
                {product.name} - {product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="rounded-md bg-green-500 px-4 py-1 text-white"
              >
                add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 rounded-lg border border-zinc-500 p-6">
        <p className="text-xl font-bold">Cart</p>
        <ul className="mt-4">
          {cart.map((product, idx) => (
            <li key={idx}>
              {product.name}
              {product.quantity > 1 ? ` (x${product.quantity})` : ""} -{" "}
              {product.price * product.quantity}
            </li>
          ))}
        </ul>
        <p className="font-bold">
          Total:{" "}
          {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </p>
      </div>
    </div>
  );
}
