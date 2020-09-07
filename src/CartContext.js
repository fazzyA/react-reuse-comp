import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([{name:'testpro',price:12,id:180,pic:''}]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}