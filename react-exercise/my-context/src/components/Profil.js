import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profil = () => {
    const{user, setUser} = useContext(UserContext);
    
   
    const [loading, setLoading] = useState(false)
    const handleLogin = () => {
        setLoading(true)
        setTimeout(()=> {
            setUser({id:1, userName:"Mhalid", bio:"Lorem ipsum"})
            setLoading(false)
        }, 1500);
    }
    const handleLogout = () => {
        setUser(null)

    }
  return (
    <div>
        {
            !user && <button onClick={handleLogin}>{loading ? "loading..." : "Login" }</button>
        }
        <br/>
        <code>
            {JSON.stringify(user)}
        </code>
        <br/>
        {user && <button onClick={handleLogout}>Logout</button> }
    </div>
  )
}

export default Profil