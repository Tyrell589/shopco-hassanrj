import React from 'react'
import { Link } from 'react-router-dom';

const FeatureCard = ({cards}) => {
  return (
    <section className="text-gray-600 body-font cursor-pointer px-5 sm:px-16 lg:px-20">
      <div className="container px-2 py-10 sm:py-16 mx-auto ">
        <div className="flex flex-col text-center w-full mb-10 sm:mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Search by Categories
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards.map((card)=>{
              return(
          <Link to={`/categories/${card}`} className="p-4 sm:w-1/2 lg:w-1/4 md:w-1/2 ">
            <div className=" text-center items-center flex rounded-lg h-full bg-gray-100 p-6 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-900 text-2xl title-font font-medium capitalize">
                  {card || 'Example'}
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  {`Get all exclusive ${card} items at a reasonable price.`}
                </p>
                <div className="mt-3 text-indigo-500 inline-flex items-center">
                  Buy Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </Link>

              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default FeatureCard