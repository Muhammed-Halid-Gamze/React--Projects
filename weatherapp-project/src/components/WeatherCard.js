import React from 'react'
import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'


const WeatherCard = () => {
         
  const {card, setCard} = useContext(WeatherContext)  


    
  return (
      <div className='Container'>
          <label htmlFor="cities">Enter City Name</label><br/>
          <input type="text" id='searchBar' name='cities' ></input>
         
        <div className='cardContainer'>
            <div className="city">{card.city}</div>
            <div className="tempereture">{card.tempereture}°C</div>
            <div className="description">{card.description}</div>
            <div className="minmax">{card.minTemp}/{card.maxTemp}</div>
        </div>
    </div>
  )
}


export default WeatherCard