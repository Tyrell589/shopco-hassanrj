import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';

const CategoryProducts = () => {
    const {name} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        const data = await res.json();
        console.log(data);
        setProducts(data);
      };
      fetchProducts();
    }, [name]);

  return (
    <>
      {
        products.length > 0 ? ( <ProductCard products={products} /> ) : ( <div className='flex text-center items-center justify-center min-h-screen'>Loading...</div>)
      }
    </>
  );
}

export default CategoryProducts