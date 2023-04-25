import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

function CartSummary({totalAmount}) {
    return (  
        <Segment clearing size='large' as='section'>
            <span>
                <strong>Subtotal: </strong>
                {`${totalAmount}`}
            </span>
            <Button color='black' floated='right'>
                Check Out
            </Button>
        </Segment>
    );
}

export default CartSummary;