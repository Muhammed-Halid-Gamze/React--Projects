import React from 'react'
import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'


const Header = () => {
    const data = useContext(WeatherContext);
    return (
    <div>
        <h1>Hava Durumu</h1>
    </div>
  )
}

export default Header