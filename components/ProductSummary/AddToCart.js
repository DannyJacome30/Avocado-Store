import React, { useState } from 'react';
import { Icon,Input, Transition } from 'semantic-ui-react';
import { useCartMutations } from 'store/Cart';

// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600)
  })

const validate = (quantity) => {
    let error = ''
    if (quantity < 1) error = "Can't be blank"
    return error
}

function AddToCart({product}) {
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState('');
    const [quantity, setQuantity]=useState(1);
    const {addToCart} = useCartMutations();
    const [visible,setVisible]=useState(false);

    const toggleMessage = () => {
        setTimeout(() => {
          setVisible(false)
        }, 1000)
    }
    
    const handleSubmit = async()=>{
        const err = validate(quantity);
        setError(err);

        if(!err){
            setLoading(true)
            addToCartRequest()
                .then(()=>{
                    addToCart(product,quantity)
                    setLoading(false)
                    setQuantity(quantity)
                    setVisible(true)
                    toggleMessage()
                })
                .catch((er)=>{
                    setError(`Error: ${er}` || 'Something went wrong')
                    setLoading(false)
                })
        }
    }

    const handleChange = ({ target }) =>
    setQuantity(parseInt(target.value, 10))

    return ( 
        <>
            <Input
                type='number'
                min={1}
                step={1}
                placeholder='Quantity'
                value={quantity}
                error={!!error}
                onChange={handleChange}
                action={
                    {
                        color:'green',
                        content:'Add to cart',
                        icon:'plus cart',
                        onClick: handleSubmit,
                        loading,
                        disabled: loading,
                    }
                }
            />
             {error && ( <div style={{ color: 'red', position: 'absolute' }}>{error}</div>)}
            <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
                <div>
                    <Icon name='check'/>
                    Added to cart
                </div>
            </Transition>
        </>

     );
}

export default AddToCart;