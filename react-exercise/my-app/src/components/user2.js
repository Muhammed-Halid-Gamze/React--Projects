import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

const User2 = () => {
    const[users, setUsers] = useState([])
    const[isLoading, setIsLoading] =useState(true)

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/albums ")
        .then(res => {
            console.log(res)
            setUsers(res.data);
            setIsLoading(false);
        })
        .catch((e) => console.log(e));
        
        
    },[])
  return (
      
    <div>
        <h1>User</h1>

        {isLoading && <div>Loading...</div>}
        {
            users.map(user => <div key={user.userId}>{user.title}</div>)
        }
        
    </div>
  )
}

export default User2