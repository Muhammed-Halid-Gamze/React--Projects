import React from 'react'
import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'


const WeatherCard = () => {
         
  const {card, setCard} = useContext(WeatherContext)
    console.log(card.city)
  return (
      <div className='Container'>
          <label for="cities">Choose City Name</label><br/>
          <select name="cities">
            <option value="Istanbul">Istanbul</option>
            <option value="Izmır">Izmır</option>
            <option value="Ankara">Ankara</option>
            <option value="Trabzon">Trabzon</option>
              
          </select>
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