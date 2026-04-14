import './Car.css';
import { differenceInSeconds } from "date-fns";
import { format } from "date-fns";

function Car(props) {
    const handleClick = () => {
        const exitTime = new Date();

        const exitedCar = {
            model: props.model,
            color: props.color,
            entryTime: props.entryTime,
            _id: props._id,
            exitTime: exitTime,
            duration: differenceInSeconds(exitTime, props.entryTime)
        }

        props.setExitedCars((prevState) => {
            return [...prevState, exitedCar];
        })

        props.setTotalEarnings((prevState) => {
            const currentRate = exitedCar.duration * 2;
            const totalRate = prevState + currentRate;
            return totalRate;
        })

        props.setParkedCars((prevState) => {
            const filteredArray = prevState.filter((parkedCar) => parkedCar._id !== props._id);
            return filteredArray;
        })
    }
    return (
        <div className="car-container">
            <div className="car-content">
                <p>Model:{' '}</p>
                <p>{props.model}</p>
            </div>
            <div className="car-content">
                <p>Color:{' '}</p>
                <p>{props.color}</p>
            </div>
            <div className="car-content">
                <p>Entry time:{' '}</p>
                <p>{format(props.entryTime, 'yyyy-MM-dd HH:mm:ss')}</p>
            </div>
            <button className="button-two" onClick={handleClick}>EXIT</button>
        </div>
    )
}

export default Car;