import React from 'react';
import { useCart } from './CartContext';
import styles from './Cart.module.scss';

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
      <ul className={styles['cart-list']}>
        {cart.map((item) => (
          <li key={item.id} className={styles['cart-item']}>
            {/* Vis information om hvert vareelement */}
            <img src={item.image} alt={item.title} />
            <div className={styles['item-details']}>
              <h4>{item.title}</h4>
              <p>{item.quantity} stk. </p>
            </div>
            <p className={styles['item-price']}>Kr. {(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>Fjern</button>
          </li>
        ))}
      </ul>
      <div className={styles.samlet}>
        <p>Samlet pris: Kr. {total.toFixed(2)}</p>
        <button onClick={() => alert('Implementer checkout logik her')}>Gå til check ud</button>
      </div>
    </div>
  );
};
