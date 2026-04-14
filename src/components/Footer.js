import './Footer.css';
import Entry from './Entry.js';
import Earnings from './Earnings.js';


function Footer(props) {
    return (
        <div className="output-container">
            <table className="entries-container">
                <tr>
                    <th>Model:{' '}</th>
                    <th>Color:{' '}</th>
                    <th>Entry time:{' '}</th>
                    <th>Exit time:{' '}</th>
                    <th>Duration:{' '}</th>
                </tr>
                {props.exitedCars.map((exitedCar) => {
                    return (
                            <Entry model={exitedCar.model} color={exitedCar.color} entryTime={exitedCar.entryTime} exitTime={exitedCar.exitTime} duration={exitedCar.duration} />
                    );
                })}
            </table>
            <div className="earnings-container">
                <Earnings totalEarnings={props.totalEarnings} />
            </div>
        </div>
    )
}

export default Footer;