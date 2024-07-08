import React from 'react';
import { CartItem } from './cartitem';

export const Cart = ({ items, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map(item => (
          <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
        ))
      )}
    </div>
  );
};

