import './Footer.css';
import Entry from './Entry.js';
import Earnings from './Earnings.js';


function Footer(props) {
    return (
        <div className="output-container">
            <div className="entries-container">
                {props.exitedCars.map((exitedCar) => {
                    return (
                        <Entry model={exitedCar.model} color={exitedCar.color} entryTime={exitedCar.entryTime} exitTime={exitedCar.exitTime} duration={exitedCar.duration} />
                    );
                })}
            </div>
            <div className="earnings-container">
                <Earnings totalEarnings={props.totalEarnings}/>
            </div>
        </div>
    )
}

export default Footer;