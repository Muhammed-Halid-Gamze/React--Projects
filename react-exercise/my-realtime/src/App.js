
import './App.css';
import Palette from './components/Palette';
import {init} from "./components/socketApi";
import {useEffect} from "react";

function App() {
  useEffect(()=> {
    init();
  },[])
  return (
    <div className="App">
    <Palette/>
    </div>
  );
}

export default App;
