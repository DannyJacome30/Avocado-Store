import React from 'react'

import fetch from 'isomorphic-fetch'; //tanto para server y cliente

import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

export async function getStaticPaths() {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo') //siempre se renderiza en el cliente
  const {data} = await response.json();
  const paths = data.map(
    ({id}) => ({params:{id}})
  );

  return{
    //genera todos los paths estaticos
    paths,
    //display 404 para todos
    fallback:false,
  }
}

//esto tambien se llama en el build time
export async function getStaticProps ({params}) {
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${params?.id}`) //siempre se renderiza en el cliente
  const product = await response.json();
  //pasa post daa a la pagina via props
  return{
    props: {
      product
    }
  }
} //dentro del servidor

function ProductItemPage({product}) {
    return (
        <Layout>
          {product == null ? null: <ProductSummary product={product}/>}
        </Layout>
      );
}

export default ProductItemPage;