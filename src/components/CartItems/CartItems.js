import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../utils/cartSlice'

const CartItems = ({items}) => {

    const dispatch = useDispatch()

    const handleCartRemove = () =>{
        dispatch(removeItem())
    }


  return (
    <div>
      {
        items.map((item)=>(
            <div className='flex border-gray-200 border-b-2' key={item.card.info.id}>
                <div className='w-9/12 flex-col'> 
                    <h1 className='font-bold text-xl py-2'>{item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100 || item.card.info.finalPrice/100}</h1>
                    <p className='text-gray-500 py-4'>{item.card.info.description}</p>
                </div>
                <div className='w-3/12 p-4'>
                    <div className='absolute ml-[73px]'>
                        <button onClick={handleCartRemove} className='text-green-700 font-extrabold bg-white shadow-lg p-1 hover:bg-gray-300 border-solid'>Remove</button>
                    </div>    
                    <img alt='items' className='w-full h-44 rounded-xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} />
                </div>    
            </div>
        ))
      }
    </div>
  )
}

export default CartItems
