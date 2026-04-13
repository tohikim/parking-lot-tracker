import './Entry.css';

function Entry(props) {
    return (
        <div className="entry-container">
            <p>Model:{' '}</p>
            <p>{props.model}</p>
            <p>Color:{' '}</p>
            <p>{props.color}</p>
            <p>Entry time:{' '}</p>
            <p>{props.entryTime.toISOString()}</p>
            <p>Exit time:{' '}</p>
            <p>{props.exitTime.toISOString()}</p>
            <p>Duration:{' '}</p>
            <p>{props.duration}</p>
        </div>
    )
}

export default Entry;