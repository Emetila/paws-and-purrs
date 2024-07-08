import React, { useState } from 'react';
import style from './style.module.css';
import { Cart } from './Cart/cart';
import { CartItem } from './Cart/cartitem';

export const CartSection = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <Cart items={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}
