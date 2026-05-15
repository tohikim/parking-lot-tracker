import Header from "./components/Header.js";
import ParkingLot from "./components/ParkingLot.jsx";
import Footer from "./components/Footer.js";
import { useState } from "react";

function App() {
  const [parkedCars, setParkedCars] = useState([]);
  const [exitedCars, setExitedCars] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  return (
    <div className="bg-[#FDFBF7] p-[10%] flex flex-col items-center gap-[2rem]">
      <Header
        setParkedCars={setParkedCars}
        parkedCars={parkedCars}
        totalEarnings={totalEarnings}
      />
      <ParkingLot
        parkedCars={parkedCars}
        setParkedCars={setParkedCars}
        setExitedCars={setExitedCars}
        setTotalEarnings={setTotalEarnings}
      />
      <Footer
        exitedCars={exitedCars}
        setTotalEarnings={setTotalEarnings}
        totalEarnings={totalEarnings}
        setExitedCars={setExitedCars}
      />
    </div>
  );
}

export default App;
