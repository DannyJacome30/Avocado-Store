import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Container } from 'semantic-ui-react';

function Layout({children}) {
    return ( 
        <>
            <Navbar/>
            <Container as="main" text>
                    {children}
            </Container>
            <Footer/>
        </>
     );
}

export default Layout;