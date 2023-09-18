import React from 'react';

import Link from 'next/link'
import Image from 'next/image'

import style from "./ProductList.module.css"

import { Card } from 'semantic-ui-react'

const mapProductsToCards = (products) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} className={style.product_card} passHref>
        <Card
          header={name}
          image={{children:<Image src={"/Avocado-Store/"+image} width={280} height={280}/>}}
          meta={{
          children: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
          }}/>
    </Link>
  )
)

function ProductList({ products }) {
  console.log(products.image)
  return ( 
    <Card.Group itemsPerRow={2} stackable className={style.product_container_list}>
      {mapProductsToCards(products)}
    </Card.Group>  
  );
}

export default ProductList;