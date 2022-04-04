import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profil = () => {
    const data = useContext(UserContext);
    console.log(data)
  return (
    <div>
        <code>
            {JSON.stringify(data)}
        </code>
    </div>
  )
}

export default Profil