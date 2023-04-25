import React, { useContext, useReducer } from 'react'

const defaultState = {};

const CartItemsContext = React.createContext(defaultState);
const CartDispatchContext = React.createContext((() => {}))

function CartProvider({children}) {
   const [state, dispatch] =useReducer(cartReducers,defaultState)

    return ( 
        <CartItemsContext.Provider value={state}>
           <CartDispatchContext.Provider value={dispatch}>
               {children}
           </CartDispatchContext.Provider>
        </CartItemsContext.Provider>
     );
}

function cartReducers(state, {item,type,quantity: quant = 1}){
   const existingCartItem = state[item.id]
   switch(type){
      case 'add':{
         if(existingCartItem != undefined){
            const quantity = existingCartItem.quantity + quant;
            return{
               ...state,
               [item.id]:{
                  ...existingCartItem,
                  quantity,
               },
            }
         }
         return{
            ...state,
            [item.id]:{
               ...item,
               quantity :quant,
            }
         }
      }
      case 'remove':{
         if(existingCartItem == undefined){
            return state;
         }

         const quantity = existingCartItem.quantity - 1;
         if(quantity>0){
            return{
               ...state,
               [item.id]:{
                  ...existingCartItem,
                  quantity,
               },
            }
         }

         const newCartItems = { ...state }
         delete newCartItems[item.id]
         return newCartItems
      }
      default:{
         throw new Error(`Unhandled action type: ${type}`)
      }
   }
}

const getCartSubTotal = (sum, item) => {
   sum += item.price * item.quantity
   return sum
 }

const getCartCount = (sum, item) => sum + item.quantity;

export function useCart () {
   
   const itemsById = useContext(CartItemsContext);
   const items = Object.values(itemsById);

   const count = items.reduce(getCartCount,0)
   const subTotal = items.reduce(getCartSubTotal, 0)

   return {
      items,
      itemsById,
      count,
      subTotal,
   };
}

export const useCartMutations = () => {
   const dispatch = useContext(CartDispatchContext)
 
   const addToCart = (product, quantity) =>
     dispatch({
       type: 'add',
       item: product,
       quantity,
     })
 
   const removeFromCart = (product) =>
     dispatch({
       type: 'remove',
       item: product,
     })
 
   return {
     addToCart,
     removeFromCart,
   }
 }

export default CartProvider;