import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../CartItems/CartItems'
import { clearCart } from '../../utils/cartSlice'

const Cart = () => {

    const dispatch = useDispatch()

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold '>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button onClick={handleClearCart} className='p-2 m-2 bg-rose-600 text-white font-bold rounded-lg'>Clear Cart</button>
        {cartItems.length === 0 && <h1 className='py-40'>Cart is Empty Add Items to the Cart </h1>}
        <CartItems items={cartItems} />
      </div>
    </div>
  )
}

export default Cart
