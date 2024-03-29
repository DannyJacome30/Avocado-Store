import Link from "next/link";
import style from "./Navbar.module.css"
import ShoppingCartIcon from "./ShoppingCartIcon.js"
import Image from "next/image";
import { Container, Menu } from "semantic-ui-react";
import { useRouter } from 'next/router';
import { useCart } from "store/Cart";

function Navbar (){
    const { pathname } = useRouter();
    const {count} = useCart();
                /*style.menu */
    return (
        <Menu borderless size='huge' pointing as='header'>
            <Link target="_blank" href="https://dannyjacome30.github.io/DannyJacome/" passHref>
                <Image className={`${style.menu_item_logo} ${style.navbar_img_logo}`} src="/Avocado-Store/images/Logo_DJ_2.svg" alt="Logo" width={100} height={100}/>  
            </Link>
                
            <Container text textAlign="center" className={style.menu}>
                <Link href="/" passHref>
                    <Menu.Item active={pathname === '/'} className={style.menu_store}>
                        <Image className={style.navbar_img} src="/Avocado-Store/images/palta.png" alt="Logo" width={50} height={50}/>
                        STORE
                    </Menu.Item>   
                </Link>
                <Menu.Menu>
                    <Link href="/cart" passHref>
                        <Menu.Item active={pathname === '/cart'} position="right">
                            <ShoppingCartIcon cartCount={count}/>
                        </Menu.Item>   
                    </Link>
                </Menu.Menu>
            </Container>  
        </Menu>  
    );
}
 
export default Navbar;