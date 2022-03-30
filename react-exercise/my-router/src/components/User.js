import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const User = () => {

    const[user, setUser] = useState({});
    const {id} = useParams();
   
        
    

    useEffect(()=> {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data));
        const myList = (JSON.stringify(user))
        // console.log(myList);
        // console.log(Object.keys(myList) + Object.values(myList));


    },[]);

  return (
    <div>
        <h1>User Detail</h1>
        
        <code>
            {JSON.stringify(user)}
            
        </code>
    
        

    </div>
  )
}

export default User
