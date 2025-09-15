import React, { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard';

const Categories = () => {
 const [categories, setCategories] = useState([]);

 useEffect(() => {
   const fetchCategories = async () => {
     const res = await fetch("https://fakestoreapi.com/products/categories");
     const data = await res.json();
     console.log(data);
     setCategories(data);
   };
   fetchCategories();
 }, []);

 if (categories.length === 0) return <div className='flex text-center items-center justify-center min-h-screen'>Loading...</div>;

 return (
    
    <FeatureCard cards={categories} />
 );
}

export default Categories