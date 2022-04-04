import React from 'react'
import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'

const WeatherCard = () => {
    const data = useContext(WeatherContext)
    console.log(data)
  return (
      <div className='cardContainer'>
      
        <div className="city">City</div>
        <div className="tempereture">tempereture</div>
        <div className="description">description</div>
        <div className="minmax">minmax</div>
    </div>
  )
}

export default WeatherCard