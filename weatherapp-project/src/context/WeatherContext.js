import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [card, setCard] = useState({
    city: "izmir",
    tempereture: 23,
    description: "Parçalı bulutlu",
    minTemp: 13,
    maxTemp: 27,
  });

  const values = {
    card,
    setCard,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
