import React from 'react'
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'




const Body = () => {

  const[ratedRestaurants, setRatedRestaurants]=useState([])
  const[filterData, setFilterData] = useState([])
  const[searchItem, setSearchItem] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async() =>{
    const response =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9642353&lng=77.7020419&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const data = await response.json()
    setRatedRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(data)
  }

  if(ratedRestaurants.length === 0){
    return(
      <h1>Loading.....</h1>
    )
  }

  return (
    <div className='body-container'>
      <div className='flex m-4 p-4'>
        <div>
          <input className='border p-1 border-solid border-black rounded-md' type="text" placeholder='Search' 
          value={searchItem} onChange={(e)=>{setSearchItem(e.target.value)}}/>
          <button className='px-4 py-2 bg-green-100 ml-4 rounded-md' onClick={()=>{
            const filterItems = ratedRestaurants.filter((eachres)=>(
              eachres.info.name.toLowerCase().includes(searchItem.toLowerCase())
            ))
            setFilterData(filterItems)
          }}>Search</button>
        </div>
        <div>
          <button className='px-4 py-2 bg-red-400 ml-20 rounded-md' onClick={()=>{
            const filteredData = ratedRestaurants.filter((res)=>(
                res.info.avgRating > 4
            ))
            setFilterData(filteredData)           
          }}
          >Top Rated Restaurants</button>
        </div>
      </div>
      <div className='flex flex-wrap '>
        {
          filterData.map((eachrestaurant) =>(
          <Link key={eachrestaurant.info.id} to={"restaurants/"+eachrestaurant.info.id}>
            <RestaurantCard resData={eachrestaurant}/>  
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default Body
