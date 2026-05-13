import "./Entry.css";
import { format } from "date-fns";

function Entry(props) {
  return (
    <tr style={styles.entryContainer}>
      <td>{props.model}</td>
      <td>{props.color}</td>
      <td>{format(props.entryTime, "yyyy-MM-dd HH:mm:ss")}</td>
      <td>{format(props.exitTime, "yyyy-MM-dd HH:mm:ss")}</td>
      <td>{props.duration}</td>
    </tr>
  );
}

const styles = {
  entryContainer: {
    color: "black",
    height: "fit-content",
  },
};

export default Entry;
