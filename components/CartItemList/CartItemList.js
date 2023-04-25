import React from 'react';

import Link from 'next/link';

import { Item, Loader, Message, Button } from 'semantic-ui-react';

function CartItemList({items, removeFromCart, loading=false,}) {
    if (loading) return <Loader active inline='centered'/>

    if (items.length === 0){
        return (
            <Message warning as="section">
              <Message.Header>Your cart is empty</Message.Header>
              <p>
                You will need to add some items to the cart before you can checkout.
              </p>
            </Message>
          )
    }

    const mapCartItems = (items) => 
        items.map( (cartItem) => {
            const {id, name, quantity, price, image} = cartItem;
            return {
                key:id,
                header: (
                    <Item.Header>
                        <Link href={`/product/${id}/`}>
                            {name}
                        </Link>
                    </Item.Header>
                ),
                image:(
                    <Item.Image
                        src={image}
                        alt={name}
                        size='small'
                    /> 
                ),
                meta: `${quantity} x ${price}`,
                description: 'Some more information goes here....',
                extra: (
                    <Button
                      basic
                      icon="remove"
                      floated="right"
                      onClick={()=>removeFromCart(cartItem)}
                    />
                  ),
            }
        })
    
    return ( 
        <Item.Group divided items={mapCartItems(items)} as='section'/>
     );
}

export default CartItemList;