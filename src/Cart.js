import React, {useContext} from 'react';
import {CartContext} from './CartContext';
// import {Link} from "react-router-dom";

const Cart = () => {

  //const ctx = React.createContext([{name:'testpro',price:12,id:180,pic:''}])

  const [cart, setCart] = useContext(CartContext);
  // const totalPrice = cart.length > 0 ? cart.reduce((acc, curr) => acc + curr.price, 0)
  // : 0;
console.log(cart);
  return (
    <div className='cart-box'>
      mycart
      <h3>Cart summary</h3>
      <span>items: {cart.length > 0 ? cart.length : ''}</span>
      <br />
      {/* <span>total: {totalPrice}</span> */}
      <br />
    </div>
  )
}

export default Cart