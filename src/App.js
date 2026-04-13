import Header from './components/Header.js';
import ParkingLot from './components/ParkingLot.js';
import Footer from './components/Footer.js';
import './App.css';
import { useState } from 'react';


function App() {
  const [parkedCars, setParkedCars] = useState([]);
  const [exitedCars, setExitedCars] = useState([]);
  return (
    <div className="App">
      <Header setParkedCars={setParkedCars} />
      <ParkingLot parkedCars={parkedCars} setParkedCars={setParkedCars} setExitedCars={setExitedCars} />
      <Footer exitedCars={exitedCars}/>
    </div>
  );
}

export default App;
