import './Earnings.css';

function Earnings(props) {
    return (
        <div className="earnings-box">
            <h5>DAY EARNINGS</h5>
            <p>Seconds rate: $2</p>
            <div className="total-earnings">
                <p>Today's earnings: ${' '}</p>
                <p>{props.totalEarnings}</p>
            </div>
        </div>
    )
}

export default Earnings;