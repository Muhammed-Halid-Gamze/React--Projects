import './App.css';
import Header from './components/Header';
import User from './components/User'; 

const myFamily = ["Halem","Selami", "Kamil",  "Hülya", "Fatma",  "Bilal", "Emre",  "Safa", "Büşra", "Bilal", "Esra"]

function App() {
  return(
  <div className="App">
    <h1>Merhaba</h1>
    {/* <Header/> */}
    <User  name="Halid"surName="Gamze" isLoggedIn = {true} friends={["Ahmet", "Tayfun", "Ayşe", "Gökhan","Fatma"]} myFamily = {myFamily} /> 
  </div>

  )
}

export default App;
