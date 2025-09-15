import React from 'react'
import {Link } from 'react-router-dom'

const About = () => {
    return (
      <>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="p-2">
            <div className="md:flex flex-row  ">
              <div className="p-7 md:w-1/2 lg:w-2/3 md:p-10 flex flex-col items-start">
                <h2 className="sm:text-xl md:text-3xl title-font font-medium text-gray-900 mt-4 mb-4">Pinterest DIY dreamcatcher gentrify single-origin coffee</h2>
                <p className="leading-relaxed mb-8 text-lg sm:text-xl"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi repellendus officiis saepe, labore, ipsam dignissimos ex eum, molestiae aliquid quisquam rem dolor reprehenderit voluptate earum. Dolor veritatis soluta eos praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores ut quae nesciunt ex nostrum, iusto deserunt maxime pariatur consequuntur soluta dolorem aspernatur? Labore quam autem officia accusantium quae dolores.</p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 w-full">
                  <Link  to='/contact' className="text-indigo-500 inline-flex items-center">Know More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex items-center p-2 md:w-1/2 lg:w-213 md:pb-5 ">
                <img className='lg:w-3/4' src="./about.png" alt="..."  />
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default About
