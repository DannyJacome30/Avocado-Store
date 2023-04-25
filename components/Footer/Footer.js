import React from 'react';
import Link from "next/link";
import style from "./Footer.module.css"
import { Container, Grid, Header, Icon, List, ListItem, Segment } from 'semantic-ui-react';

function Footer (){
    return (
    <Segment as='footer' vertical secondary style={{marginTop:'64px'}}>
        <Container text className={style.footer_menu_grid}>
            <Grid stackable >
                <Grid.Row centered>
                    <Grid.Column centered width={4}>
                        <Header as="h4">
                         Nosotros
                        </Header>
                        <List>
                            <ListItem>
                                <Link href="/">Conoce más</Link>
                            </ListItem>
                        </List>
                    </Grid.Column>
                    <Grid.Column centered width={4}>
                        <Header as="h4">
                         Servicios
                        </Header>
                        <List>
                            <ListItem>
                                <Link href="/">Productos</Link>
                            </ListItem>
                        </List>
                    </Grid.Column>
                    <Grid.Column centered width={6}>
                        <Header as="h4">
                            Hecho para
                        </Header>
                        <p> Hecho por
                                <a> @DannyJacome</a>
                             </p>
                        <div className={style.footer_menu_contact_list}>
                            <div className={style.footer_menu_contact_list_item}>
                                <Icon name='github'/>
                                <a href='https://github.com/DannyJacome30'> Github
                                    </a>
                            </div>
                            <div className={style.footer_menu_contact_list_item}>
                                <Icon name='linkedin'/>
                                <a href='https://www.linkedin.com/in/daniela-jacome30/'> Linkedin
                                    </a>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row textAlign='center' centered padded className={style.footer_menu_desc}>
                <div >
                            <p className={style.footer_menu_desc_cred}>Icons made by
                                <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik</a>
                                from 
                                <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                            </p>
                            <p className={style.footer_menu_desc_cred}>Avocado images taken from Avocado 101 at California Avocado</p>
                        </div>
                </Grid.Row>
            </Grid>
            

                  
        </Container>
       
       
    </Segment>
    );
}
 
export default Footer;