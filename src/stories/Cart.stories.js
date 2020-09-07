import React from 'react';

import Cart from '../Cart';
import {CartProvider,CartContext} from '../CartContext';

export default {
    title: 'Cart',
    component: Cart
}

export const cartStory = () => {

return (
<CartProvider>
    <Cart />
</CartProvider>
)
}

  
