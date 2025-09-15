import React, { useEffect, useState ,useMemo} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const [total,setTotal] = useState(0)
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const calculateTotal = useMemo(() => {
      return cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    }, [cart]);
    
    useEffect(() => {
      setTotal(calculateTotal);
    }, [calculateTotal]);

    const handleInc = (id) =>{
        const updatedCart =  cart.map(item =>{
          if(item.id === id){
              return {
                ...item,quantity:item.quantity+1
              }
          }
          return item
        })
        localStorage.setItem('cart',JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const handleDec = (id) =>{
        const updatedCart =  cart.map(item =>{
          if(item.id === id && item.quantity >1){
              return {
                ...item,
                quantity:item.quantity-1
              }
          }
          return item
        })
        localStorage.setItem('cart',JSON.stringify(updatedCart))
        navigate("/cart");
    }
    const removeProduct = (id) => {
        const updatedCart = cart.filter(item => item.id !== id)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        navigate("/cart");
    };

    const emptyCart = () => {
        localStorage.setItem("cart", JSON.stringify([]))
        navigate("/cart");
    };

    if(cart.length === 0) return <div className=' flex justify-center items-center text-4xl min-h-[48vh]'>Cart is Empty</div>

  return (
    <div className="mx-2 mt-7 md:mx-7">
        <div className="shadow-md my-5 md:flex flex-row">
            <div className="bg-white p-7 md:w-3/4 md:p-4">
                <div className="flex justify-between border-b pb-8 ">
                    <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 className="font-semibold text-2xl">{cart?.length} items </h2>
                </div>
                <div className="flex my-5 ">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-4/5 md:w-2/5">Product Details</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase pl-4 w-1/5 md:w-1/5">Quantity</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase pl-7 w-1/5 md:w-1/5">Price</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase -mr-2 ml-2 w-1/5 md:w-1/5">Total</h3>
                </div>
                {
                    cart.map(item=>{
                        return (
                            <div className="flex px-3 py-2 items-center hover:bg-gray-100 md:px-6 -mx-8">
                                <div className="flex w-4/5 md:w-2/5">
                                    <Link to={`/products/${item?.id}`} className="w-20">
                                        <img className="h-24" src={item?.image}alt={item?.title}  />
                                    </Link>
                                    <div className="flex flex-col justify-between ml-4 lg:w-full">
                                        <span className="font-bold text-sm">{item?.title}</span>
                                        <span className="text-red-500 text-xs capitalize">{item?.category}</span>
                                        <div className="font-semibold hover:text-red-500 to-gray-500 text-xs cursor-pointer" onClick={()=>removeProduct(item?.id)}>Remove</div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                    <svg onClick={()=>handleDec(item?.id)} className="fill-current text-gray-600 w-3 cursor-pointer"  viewBox='0 0 448 512'><path  d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
                                    <input type="text" className=" border text-center w-8 md:mx-2" value={item?.quantity} />
                                    <svg onClick={()=>handleInc(item?.id)} className="fill-current text-gray-600 w-3 cursor-pointer" viewBox='0 0 448 512'><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">${item?.price}</span>
                                <span className="text-center w-1/5 font-semibold text-sm">${item?.price * item?.quantity}</span>
                            </div>
                        )
                    })
                }
                <Link to='/products' className="flex font-semibold text-indigo-600 text-sm mt-7">
                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox='0 0 448 512'><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H124.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>Continue Shopping
                </Link>
            </div>
            <div id='summary' className="px-8 py-5 md:w-1/4 md:px-4">
                <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div className="flex justify-between mt-10 mb-5">
                    <span className=" font-semibold text-sm uppercase">Items {cart?.length}</span>
                    <span className=" font-semibold text-sm">${(total.toFixed(2))}</span>
                </div>
                <div>
                    <label  className="mb-3 font-medium inline-block text-sm uppercase">Shipping</label>
                    <select  className="block p-2 text-gray-600 w-full text-sm" >
                        <option>Standard Shipping -$10.00</option>
                    </select>
                </div>
                <label htmlFor="promo" className="font-semibold inline-block  mt-3 text-sm uppercase">Promo Code</label>
                <div className="py-10 flex">
                    <input type="text" id='promo' placeholder='Enter your code'  className="w-3/4 p-2 text-sm " />
                    <button className="bg-red-500 w-1/4 hover:bg-red-600 pr-2 pl-1 py-2 text-sm text-white text-center uppercase ml-2">Apply</button>
                </div>
                <div className="border-t">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">                    
                    <span>Total Cost</span>
                    <span>${(total + 10).toFixed(2)}</span></div>
                </div>
                <button onClick={()=>emptyCart()} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart