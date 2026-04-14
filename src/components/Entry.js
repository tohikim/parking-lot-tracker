import { format } from 'date-fns';
import './Entry.css';

function Entry(props) {
    return (
        <tr className="entered-rows">
            <td>{props.model}</td>
            <td>{props.color}</td>
            <td>{format(props.entryTime, 'yyyy-MM-dd HH:mm:ss')}</td>
            <td>{format(props.exitTime, 'yyyy-MM-dd HH:mm:ss')}</td>
            <td>{props.duration}</td>
        </tr>
    )
}

export default Entry;