import React from 'react';



function User(props) {
    console.log(props);
  return (
    <div>
        <h1>{
            props.isLoggedIn ? `${props.name} ${props.surName}`: "Giriş Yapmadınız"
            }  
            {
              props.myFamily.map( (ferd, index) => <div key={index}>{index}-{ferd}</div>)
            }
            </h1>
            

            <div style={{fontSize:'30px'}}>
              {
                `${props.friends}`
                
              }
            </div>
    </div>
  )
}

export default User;