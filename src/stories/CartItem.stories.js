import React from 'react';

import CartItem from '../CartItem';
import {CartProvider,CartContext} from '../CartContext';

export default {
    title: 'Cart With Items',
    component: CartItem
}

export const cartItemStory = () => {

return (
<CartProvider>
    <CartItem />
</CartProvider>
)
}

  
