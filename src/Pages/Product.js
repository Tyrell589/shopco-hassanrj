import React,{ useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'

const Product = () => {
const { id } = useParams()
const [product, setProduct] = useState({})
const navigate = useNavigate()
const cart = JSON.parse(localStorage.getItem('cart')) || []

useEffect(()=>{
    const fetchProduct = async ()=>{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        console.log(data)
        setProduct(data)
    }
    fetchProduct()
},[id])

const handleCart = (product) =>{
  console.log(product)
  const isProductExist = cart.find(item =>item.id === product.id)
  if(isProductExist ){
    const updatedCart =  cart.map(item =>{
      if(item.id === product.id){
          return {
            ...item,quantity:item.quantity+1
          }
      }
      return item
    })
    localStorage.setItem('cart',JSON.stringify(updatedCart))
    navigate(`/products/${product.id}`);
  }else{
    localStorage.setItem('cart',JSON.stringify([...cart,{...product,quantity:1}]))
    navigate(`/products/${product.id}`);
  }
  alert('Product added to cart')
}
const handlePurchase = (product) =>{
  const isProductExist = cart.find(item =>item.id === product.id)
  if(isProductExist){
    navigate('/cart')
  }else{
    localStorage.setItem('cart',JSON.stringify([...cart,{...product,quantity:1}]))
    navigate('/cart')
  }
}

if(!Object.keys(product).length > 0) return <div className='flex text-center items-center justify-center min-h-screen'>Loading...</div>;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 pt-20 pb-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt={product.title} className="lg:w-1/2 w-full lg:h-auto max-h-[500px] h-64 object-contain object-center rounded" src={product?.image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{product?.category} </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center mt-3">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">{product?.rating.count} Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-around">
              <span className="title-font font-medium text-2xl text-gray-900">${product?.price}</span>
              <button className="flex ml-4  text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded md:mr-2 px-4" onClick={()=>handlePurchase(product)}>Buy Now</button>
              {
                cart.find(item =>item.id === product.id) ?  <Link to='/cart' className="flex ml-2 border border-indigo-500 p-2 focus:outline-none hover:bg-indigo-600 hover:text-white rounded md:mr-2 px-4" >Go to cart</Link>
                :  <button className="flex ml-2 border border-indigo-500 p-2 focus:outline-none hover:bg-indigo-600 hover:text-white rounded md:mr-2 px-4" onClick={()=>handleCart(product)}>Add to cart</button>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product