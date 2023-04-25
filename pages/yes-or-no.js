import Layout from '@components/Layout/Layout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Header } from 'semantic-ui-react';
import style from "./index.module.css"

function YesOrNo() {
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
            setIsLoading(true);
        }  
    );
    return ( 
        <Layout>
            <div className={style.yes_no_container}>
                <Header as="h1" color='green'>
                    Yes
                </Header>
                <p>
                    <Button 
                        color='green' 
                        isLoading={isLoading}
                        //disabled={isLoading}
                    >
                        Intentar de nuevo
                    </Button>
                </p>
                <p>
                    <Button className={style.yes_no_container_2} basic color='grey'>
                        <Link href="/">
                            Volver al inicio
                        </Link>
                    </Button>
                </p>
            </div>
        </Layout>
     );
}

export default YesOrNo;