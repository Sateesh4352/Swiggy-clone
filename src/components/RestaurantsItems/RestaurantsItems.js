import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AccordianItem from '../AccordianItem/AccordianItem'

const RestaurantsItems = () => {

    const [resItems,setResItem] = useState('')
    const {resid} = useParams()

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9642353&lng=77.7020419&restaurantId="+resid);
        const data = await response.json()
        console.log(data)
        setResItem(data.data)
    }

    if (!resItems) {
        return <div>Loading...</div>; 
    }

    const{name, avgRating, totalRatingsString, costForTwoMessage, cuisines} = resItems?.cards[2]?.card?.card?.info;
    console.log(resItems)

    console.log("some",resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categeories = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>(
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
    ))

    console.log("care",categeories)

  return (
    <div>
        <div className='text-center'>
            <h1 className='font-bold text-4xl py-4'>{name}</h1>
            <h3 className='font-bold py-2'>{avgRating} . ({totalRatingsString}) . {costForTwoMessage}</h3>
            <h3 className='text-orange-500 font-bold underline'>{cuisines.join(', ')}</h3>
        </div>
        {
            categeories.map((eachItem,index)=>
                <AccordianItem key={index} data={eachItem?.card?.card}/>
            )
        }
    </div>
  )
}

export default RestaurantsItems
