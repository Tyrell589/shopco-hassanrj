import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({products}) => {
  return (
    <section className="text-gray-600 body-font mt-5 px-5 sm:px-12 lg:px-20">
      <div className="flex flex-col text-center w-full mt-7 sm:mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        {(products.length>12) ? <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1> 
        :  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>}
      </div>
      <div className="px-5 py-12 sm:py-16 lg:py-20 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          {products?.map((product) => {
            console.log(product, "product");
            const { id, title, price, category, image } = product;
            return (
              <Link  to ={`/products/${id}`} className="hover:scale-105 sm:w-1/2 lg:w-1/4 md:w-1/3 p-4 w-full border border-opacity-150 mb-4 cursor-pointer">
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                    src={image}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  <p className="mt-1 text-md font-semibold">${price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard