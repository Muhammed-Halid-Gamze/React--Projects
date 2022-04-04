import React from 'react'
import Header from './Header'
import Button from './Button'
import Profil from './Profil'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Container = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`app ${theme}`}>
      <Header/>
      <hr/>
      <Button/>
      <hr />
      <Profil/>
    </div>
  )
}

export default Container