import './Header.css';
import { useState } from 'react';
import { carModels } from '../constants/car-models';

function Header(props) {
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const parkedCar = {
            model: model,
            color: color,
            entryTime: new Date(),
            _id: Math.floor(Math.random() * 1000)
        }
        props.setParkedCars((prevState) => {
            if (prevState.length < 9) {
                return [...prevState, parkedCar];
            } else {
                alert(`This parking lot is full!`);
                return prevState;
            }
        });
        setModel('default');
        setColor('');
    }

    const [model, setModel] = useState('default');
    const [color, setColor] = useState('');

    return (
        <div className="header-container">
            <h3>Click to add car details!</h3>
            <form onSubmit={handleOnSubmit}>
                <label>
                    Model: {' '}
                    <select
                        value={model}
                        onChange={e => setModel(e.target.value)}>
                        <option value="default"></option>
                        {carModels.map((car) => {
                            return (
                                <option value={car.id}>{car.label}</option>
                            );
                        })}
                    </select>
                </label>
                <label>
                    Color: {' '}
                    <textarea
                        placeholder="Blue"
                        value={color}
                        onChange={e => setColor(e.target.value)}
                    />
                </label>
                <button type="submit">ADD CAR</button>
            </form>
        </div>
    )
}

export default Header;