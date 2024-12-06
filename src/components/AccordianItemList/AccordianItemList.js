import React from 'react'
import { addItem } from '../../utils/cartSlice'
import { useDispatch } from 'react-redux'

const AccordianItemList = ({items}) => {
    console.log(items)
    
    const dispatch = useDispatch()

    const handleAddItem = (item) =>{

      dispatch(addItem(item))
    }
  return (
    <div>
      {
        items.map((item)=>(
            <div className='flex p-2 m-2 border-gray-200 border-b-2' key={item.card.info.id}>
                <div className='w-9/12'> 
                    <h1 className='font-bold text-xl py-2'>{item.card.info.name}</h1>
                    <p className='font-bold py-2'>₹ {item.card.info.price/100 || item.card.info.defaultPrice/100 || item.card.info.finalPrice/100}</p>
                    <p className='text-gray-500 py-4'>{item.card.info.description}</p>
                </div>
                <div className='w-3/12 p-4'>
                    <div className='absolute ml-[78px]'>
                        <button onClick={()=>handleAddItem(item)} className='text-green-700 font-extrabold bg-white shadow-lg p-1 hover:bg-gray-300 border-solid'>ADD +</button>
                    </div>    
                    <img alt='items' className='w-full h-44 rounded-xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} />
                </div>    
            </div>
        ))
      }
    </div>
  )
}

export default AccordianItemList
