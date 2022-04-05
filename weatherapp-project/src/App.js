import './App.css';
import Container from './components/Container';
import { WeatherProvider } from './context/WeatherContext';
// import {ApiProvider} from './context/ApiContext';


function App() {
  return (
    <WeatherProvider>
      {/* <ApiProvider> */}
        <Container/>  
      {/* </ApiProvider> */}
    </WeatherProvider>
  );
}

export default App; 
