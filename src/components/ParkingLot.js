import './ParkingLot.css';
import Car from './Car.js';

function ParkingLot(props) {
    return (
        <div className="parking-container">
            {props.parkedCars.map((parkedCar) => {
                    return (
                        <Car model={parkedCar.model} color={parkedCar.color} entryTime={parkedCar.entryTime} _id={parkedCar._id} setExitedCars={props.setExitedCars} setParkedCars={props.setParkedCars} setTotalEarnings={props.setTotalEarnings}/>
                    );
            })}
        </div>
    )
}

export default ParkingLot;