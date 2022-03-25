import './App.css';
import Header from './components/Header';
import User from './components/User'; 
function App() {
  return(
  <div className="App">
    <h1>Merhaba</h1>
    {/* <Header/> */}
    <User  name="Halid"surName="Gamze" isLoggedIn = {true} friends={["Ahmet", "Tayfun", "Ayşe", "Gökhan","Fatma"]}/> 
  </div>

  )
}

export default App;
