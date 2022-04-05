// import { createContext, useState } from "react";

// const ApiContext = createContext();

// export const ApiProvider = ({children}) => {
//     const [apiInfo, setApiInfo]=useState({});

//     const apiKey = "cf508a59c29a6ce45e24528978f01937"

//     const url = `http://api.openweathermap.org/geo/1.0/direct?q=Izmir=&appid=${apiKey}&units=metric`
//     // const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=Izmir&cnt=7&appid=${apiKey}`
    
//     // const url2 = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${apiKey}`
//     fetch(url).then(
//         response => response.json()
//       ).then(responseJson => {
//         //   setApiInfo(responseJson)
//         // console.log(responseJson[0])
//         console.log(responseJson[0].lat)
//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${responseJson[0].lat}&lon=${responseJson[0].lon}&units=metric&lang=tr&appid=${apiKey}`)
//         .then(res => res.json)
//         .then(res => console.log(res))

        

//       })

//       console.log(apiInfo.lat);

    

//     const infos = {
//         apiInfo,
//         setApiInfo
//     }

//     return <ApiContext.Provider value={infos}>{children}</ApiContext.Provider>
// }

// export default ApiContext;
