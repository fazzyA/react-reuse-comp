import React from 'react';

import CartTable from '../CartTable';
import {CartProvider,CartContext} from '../CartContext';

export default {
    title: 'Cart With Items',
    component: CartTable
}

export const cartTableStory = () => {

return (
<CartProvider>
    <CartTable />
</CartProvider>
)
}

  
