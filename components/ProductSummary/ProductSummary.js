import React from 'react';
import { Item, Label } from 'semantic-ui-react';

import ProductAttributes from './ProductAttributes.js'
import AddToCart from './AddToCart.js';

function ProductSummary({product}) {
    return ( 
        <Item.Group as='section'>
            <Item>
                <Item.Image size='medium' src={product.image}/>
                <Item.Content>
                    <Item.Header as='h1'>
                        {product.name}
                    </Item.Header>
                    <Item.Description>
                        <p>{product.price}</p>
                        <Label>{`SKU: ${product.sku}`}</Label>
                    </Item.Description>
                    <Item.Extra>
                        <AddToCart product={product}/>
                    </Item.Extra>
                </Item.Content>
            </Item>
            <ProductAttributes {...product.attributes}/>
        </Item.Group>
        
     );
}

export default ProductSummary;