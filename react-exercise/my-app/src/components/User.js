import React from 'react';

function User(props) {
    console.log(props);
  return (
    <div>
        <h1>{
            props.isLoggedIn ? `${props.name} ${props.surName}`: "Giriş Yapmadınız"
            }  
            </h1>
    </div>
  )
}

export default User;