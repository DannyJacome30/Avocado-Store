import React from 'react'

import fetch from 'isomorphic-fetch'; //tanto para server y cliente

import ProductList from '@components/ProductList/ProductList'
import Layout from '@components/Layout/Layout';

import Link from "next/link";

import style from "./index.module.css"

export async function getStaticProps () {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo') //siempre se renderiza en el cliente
  const {data : productList} = await response.json();

  return{
    props: {
      productList,
    }
  }
} //dentro del servidor

function HomePage({productList}) {
  return (
    <Layout>
      <div>
        <h1 className={style.section_center}>Avocado Store</h1>
        <section className={style.section_center}>
          <Link href="/yes-or-no">
            ¿Deberia comer un avo hoy?
          </Link>
        </section>
      </div>
      
      <ProductList products={productList}/>
    </Layout>
   
  )
}

export default HomePage;