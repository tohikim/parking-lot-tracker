import Car from "./Car.js";

function ParkingLot(props) {
  return (
    <div style={styles.parkingContainer}>
      {props.parkedCars.map((parkedCar) => {
        return (
          <Car
            model={parkedCar.model}
            color={parkedCar.color}
            entryTime={parkedCar.entryTime}
            _id={parkedCar._id}
            setExitedCars={props.setExitedCars}
            setParkedCars={props.setParkedCars}
            setTotalEarnings={props.setTotalEarnings}
          />
        );
      })}
    </div>
  );
}

const styles = {
  parkingContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    border: "10px dashed yellow",
    borderRadius: "25px",
    backgroundColor: "gray",
    minHeight: "250px",
    height: "510px",
    gap: "2rem",
    padding: "2rem",
    marginBottom: "3%",
  },
};

export default ParkingLot;
