import Entry from "./Entry.js";
import Earnings from "./Earnings.js";

function Footer(props) {
  if (props.exitedCars.length) {
    return (
      <div style={styles.outputContainer}>
        <table style={styles.entriesContainer}>
          <tr>
            <th>Model: </th>
            <th>Color: </th>
            <th>Entry time: </th>
            <th>Exit time: </th>
            <th>Duration: </th>
          </tr>
          {props.exitedCars.map((exitedCar) => {
            return (
              <Entry
                model={exitedCar.model}
                color={exitedCar.color}
                entryTime={exitedCar.entryTime}
                exitTime={exitedCar.exitTime}
                duration={exitedCar.duration}
              />
            );
          })}
        </table>
        <div style={styles.earningsContainer}>
          <Earnings totalEarnings={props.totalEarnings} />
        </div>
      </div>
    );
  } else {
    return <p style={styles.p}>Exited cars will appear here.</p>;
  }
}

const styles = {
  outputContainer: {
    display: "flex",
  },

  entriesContainer: {
    textAlign: "left",
    fontSize: "1rem",
    width: "70%",
    height: "fit-content",
  },

  earningsContainer: {
    border: "1px",
    fontSize: "2rem",
    width: "30%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  p: {
    textAlign: "center",
    fontSize: "1.5rem",
  },
};

export default Footer;
