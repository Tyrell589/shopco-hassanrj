import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'

const Home = () => {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await res.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    },[])

  return (
    <>
      <Hero />
      <Categories/>
      {
        products.length > 0 ? <ProductCard products={products}/> : null
      }
    </>
  );
}

export default Home