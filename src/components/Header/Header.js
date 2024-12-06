import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Header = () => {

  const[btnName, setBtnName] = useState('login')

  const cartItems = useSelector((store)=>store.cart.items)

  return (
    <div className="flex justify-between bg-yellow-400 shadow-lg">
      <Link to='/'>
        <div className='flex '>
          <img className='w-28' alt='logo' src='https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg'/>
        </div>
      </Link>
      <div className='flex items-center'>
        <ul className='flex p-5 m-4 font-bold'>
          <li className='px-4'>
            <Link to="/">Home</Link>
          </li>
          <li className='px-4'>
            <Link to="/about">About Us</Link>
          </li>
          <li className='px-4'>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className='px-4'>
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button className='px-4 py-1 bg-blue-50 rounded-md ' onClick={()=>{
            btnName === "login" ? setBtnName('logout') : setBtnName('login')
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
