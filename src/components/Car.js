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
      duration: differenceInSeconds(exitTime, props.entryTime),
    };

    props.setExitedCars((prevState) => {
      return [...prevState, exitedCar];
    });

    props.setTotalEarnings((prevState) => {
      const currentRate = exitedCar.duration * 2;
      const totalRate = prevState + currentRate;
      return totalRate;
    });

    props.setParkedCars((prevState) => {
      const filteredArray = prevState.filter(
        (parkedCar) => parkedCar._id !== props._id,
      );
      return filteredArray;
    });
  };
  return (
    <div className="bg-no-repeat bg-contain rounded-[15px] max-h-[130px] max-w-[350px] p-[1rem]">
      <div style={styles.carContent}>
        <p style={styles.p}>Model: </p>
        <p style={styles.p}>{props.model}</p>
      </div>
      <div style={styles.carContent}>
        <p style={styles.p}>Color: </p>
        <p style={styles.p}>{props.color}</p>
      </div>
      <div style={styles.carContent}>
        <p style={styles.p}>Entry time: </p>
        <p style={styles.p}>{format(props.entryTime, "yyyy-MM-dd HH:mm:ss")}</p>
      </div>
      <button style={styles.buttonTwo} onClick={handleClick}>
        EXIT
      </button>
    </div>
  );
}

const styles = {
  carContent: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },

  p: {
    margin: 0,
    paddingBottom: "0.5rem",
    color: "white",
  },

  buttonTwo: {
    padding: "0.3rem",
  },
};

export default Car;
