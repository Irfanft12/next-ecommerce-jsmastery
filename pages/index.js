import React from 'react'
import { HeroBanner, Product, FooterBanner } from "../components"
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroData={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Branded smart watches</p>
      </div>

      <div className='products-container'>
        {
          products?.map((product, key) => <Product key={key} product={product} />)
        }
      </div>

      <FooterBanner />
    </>
  )
}


export async function getServerSideProps() {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }

}

export default Home
