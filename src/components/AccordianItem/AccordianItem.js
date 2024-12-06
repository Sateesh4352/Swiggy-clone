import React, { useState } from 'react'
import AccordianItemList from '../AccordianItemList/AccordianItemList'

const AccordianItem = ({data}) => {
    console.log(data)
    const [accordianOpen, setAccordianopen] = useState(false)

    const handleAccordian = () =>{
        setAccordianopen(!accordianOpen)
    }

    

  return (
    <div>   
        <div className='w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4'>
            <div className='flex justify-between'> 
                <span className='font-bold text-lg '>{data.title} ({data.itemCards.length})</span>
                <span onClick={handleAccordian}>⌄</span>
            </div>
            {accordianOpen && <AccordianItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default AccordianItem
