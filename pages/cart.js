import React from 'react';

import CartSummary from '@components/CarSummary/CartSummary';
import CartItemList from '@components/CartItemList/CartItemList';
import Layout from '@components/Layout/Layout';

import { Divider } from 'semantic-ui-react';
import { useCart,useCartMutations } from 'store/Cart';


function CartPage() {
    const {items,count}=useCart();
    const { removeFromCart } = useCartMutations()
    return ( 
        <Layout>
            <CartItemList items={items} removeFromCart={removeFromCart}/>
            <Divider/>
            <CartSummary totalAmount={count}/>
        </Layout>
     );
}

export default CartPage;