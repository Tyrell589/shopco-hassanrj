import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      };
      fetchProducts();
    }, []);

  return (
    <>
      <Categories />
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) :  null }
    </>
    );
}

export default Products
