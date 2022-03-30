import React from 'react'
import {useParams, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const User = () => {

    const[user, setUser] = useState({});
    const[loading, setLoading] = useState(true)
    const {id} = useParams();
   
        
    

    useEffect(()=> {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .finally(()=> setLoading(false));
        // const myList = (JSON.stringify(user))
        // console.log(myList);
        // console.log(Object.keys(myList) + Object.values(myList));


    },[id]);

  return (
    <div>
        <h1>User Detail</h1>
        {loading && <div>Loading...</div>}
        {!loading && <code>{JSON.stringify(user)}</code>}
        <br/>
        <br/>
        <Link to={`/user/${parseInt(id) + 1}`}>Next User({parseInt(id) + 1})</Link>

    </div>
  )
}

export default User
