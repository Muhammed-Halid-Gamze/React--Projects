// import React from 'react'
// import { useState, useEffect } from "react";


// const Counter2 = () => {
//     const [number, setNumber] = useState(0);
//   useEffect(() => {
//     console.log("Güncellendi")
//   })

//   useEffect(() => {
//     console.log("Component did mount")

//     const interval = setInterval(() => {
//         setNumber((n) => n + 1)

//     }, 1000);

//     return () => clearInterval(interval); 
//     // burada component unmount oluyor bu yüzden intervali kapatıyoruz
//   },[])


//   useEffect(() => {
//     console.log("Numara güncellendi")
//   },[number])
//   const increaseNumber = () => {
//     setNumber(number + 1)
//   }
//   return (
//     <div>

// <h1>Sayac</h1>
//       <h1>{number}</h1>
//       <button onClick={increaseNumber}>Arttır</button>




//     </div>
//   )
// }

// export default Counter2