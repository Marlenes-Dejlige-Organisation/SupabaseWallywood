import React from 'react';
import { useCart } from './CartContext';

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // Tjek om cart er defineret og ikke null
  if (!cart) {
    return <p>Din kurv er tom.</p>;
  }

  // Tjek om cart er en array og har en længde
  if (!Array.isArray(cart) || cart.length === 0) {
    return <p>Din kurv er tom.</p>;
  }

  // Beregn den samlede pris
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Render indholdet af kurven
  return (
    <div>
      <h4>Din kurv</h4>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {/* Vis information om hvert vareelement */}
            {item.title} - {item.quantity} stk - Kr. {item.price.toFixed(2)} 
            <button onClick={() => removeFromCart(item.id)}>Fjern</button>
          </li>
        ))}
      </ul>
      <p>Samlet pris: Kr. {total.toFixed(2)}</p>
    </div>
  );
};
