import Header from './components/Header.js';
import ParkingLot from './components/ParkingLot.jsx';
import Footer from './components/Footer.js';
import './App.css';
import { useState } from 'react';


function App() {
  const [parkedCars, setParkedCars] = useState([]);
  const [exitedCars, setExitedCars] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  return (
    <div className="App">
      <Header setParkedCars={setParkedCars} parkedCars={parkedCars}/>
      <ParkingLot parkedCars={parkedCars} setParkedCars={setParkedCars} setExitedCars={setExitedCars} setTotalEarnings={setTotalEarnings}/>
      <Footer exitedCars={exitedCars} setTotalEarnings={setTotalEarnings} totalEarnings={totalEarnings} setExitedCars={setExitedCars}/>
    </div>
  );
}

export default App;
