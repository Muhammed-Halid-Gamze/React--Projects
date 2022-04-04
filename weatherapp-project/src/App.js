import './App.css';
// import WeatherProvider from './context/WeatherContext';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
// import WeatherContext from './context/WeatherContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Header/>
      <WeatherCard/>
    </WeatherProvider>
  );
}

export default App;
