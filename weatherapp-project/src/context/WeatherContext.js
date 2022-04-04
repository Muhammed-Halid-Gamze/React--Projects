import {createContext} from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    return <WeatherContext.Provider value="null">{children}</WeatherContext.Provider>
}

export default WeatherContext;