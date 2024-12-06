import React from 'react'

const RestaurantCard = (props) => {
  const {resData} = props

  const {name,costForTwo,avgRating,cuisines,sla,locality,cloudinaryImageId} = resData?.info

  return (
    <div className='m-4 p-1 w-[250px] bg-gray-50 rounded-lg hover:bg-gray-300'>
      <div>
        <img className='w-[100%] h-[200px] rounded-lg' alt='biryani' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId} />
      </div>
      <div className='details'>
        <h1 className='font-bold py-4 text-lg'>{name}</h1>
        <h4 className='font-mono py-2'>{cuisines.join(', ')}</h4>
        <h1 className='font-mono py-2'>{avgRating} stars    {sla.slaString}</h1>
        <h4 className='font-mono py-2'>{costForTwo}</h4>
        <h4 className='font-mono py-2'>{locality}</h4>
      </div>
    </div>
  )
}

export default RestaurantCard
 