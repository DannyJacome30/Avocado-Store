import React from 'react';
import style from "./Navbar.module.css";
import Image from "next/image";

function ShoppingCartIcon({cartCount}) {
    const showCartCount = () => {
        if (!cartCount) {
          return `(0)`
        }
        if (cartCount > 9) {
          return (
            <span>
              9<sup>+</sup>
            </span>
          )
        }
        return `(${cartCount})`
      }
    const name = 'SHOPPING'
    return ( 
        <div className={style.cart_container}>
            <Image className={style.navbar_img} src="/images/shopping-cart.png" alt="Logo" width={40} height={40}/>
            <div>
                {showCartCount()} 
                {` ${name} `}
            </div>              
        </div>
     );
}

export default ShoppingCartIcon;