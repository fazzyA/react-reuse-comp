import React, {useState} from 'react';
import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';

export const CartContext = React.createContext();

export const CartProvider = (props) => {

  const [cart, setCart] = useState([
    { name: "Carman salas brown", price: 10.99, id: 1,pic:item1 },
    { name: "Carman salas pink", price: 24.05, id: 2,pic:item2}
  ]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}