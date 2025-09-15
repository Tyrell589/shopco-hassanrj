import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font px-5 mt-4 sm:mt-10 sm:px-10">
      <div className="container mx-auto flex px-5 py-7 sm:py-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-gray-900">
            Unwrap happiness with every purchase.
            </h1>
          <h3 className="mb-8 text-xl">
             Shop with confidence knowing that
            we offer a 100% satisfaction guarantee on all our products.
          </h3>
          <div className="flex justify-center">
            <Link
              to="/products"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Start Shopping
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./bg.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero