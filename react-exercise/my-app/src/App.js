import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import { useState } from "react";

const myFamily = [
  "Halem",
  "Selami",
  "Kamil",
  "Hülya",
  "Fatma",
  "Bilal",
  "Emre",
  "Safa",
  "Büşra",
  "Bilal",
  "Esra",
];

function App() {
  const [ad, setAd] = useState("Muhammed");
  const [yas, setYas] = useState(25);
  const [arkadaslar, setArkadaslar] = useState(["Mesut", "Onur"]);
  const [address, setAddress] = useState({city:"Izmir", zip:"35190"})
  console.log(ad, yas);
  return (
    <div className="App">
      <h1>Merhaba {ad}</h1>
      <h2>Yaşınız {yas}</h2>
      <button onClick={() => setAd("Muhammed Halid Gamze")}>Change name</button>
      <button onClick={() => setYas(28)}>Change age</button>

      <hr />

      {
        arkadaslar.map((arkadas, key)  => <div key={key}> {arkadas}</div>)
      }
      <button onClick={() => setArkadaslar([...arkadaslar,"Sıtkı"])}>Add New Friends</button>
      <hr/>
      <br/>
      <h2>Address
      </h2>
      <div> {address.city} {address.zip} </div>
      <button onClick={() => setAddress({...address, zip:"35180", city:"Istanbul" })}>Add New Address</button>

      {/* <Header/> */}

      

      <User
        name={"Halid"}
        surName="Gamze"
        isLoggedIn={true}
        friends={["Ahmet", "Tayfun", "Ayşe", "Gökhan", "Fatma"]}
        myFamily={myFamily}
      />
      


    </div>
  );
}

export default App;
