import "./Header.css";
import { useState } from "react";
import { carModels } from "../constants/car-models";

function Header(props) {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const parkedCar = {
      model: model,
      color: color,
      entryTime: new Date(),
      _id: Math.floor(Math.random() * 1000),
    };

    if (props.parkedCars.length < 9) {
      props.setParkedCars((prevState) => {
        return [...prevState, parkedCar];
      });
      setModel("default");
      setColor("");
    } else {
      alert(`This parking lot is full!`);
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const [model, setModel] = useState("default");
  const [color, setColor] = useState("");

  return (
    <div style={styles.headerContainer}>
      <h1 style={styles.h1}>PARKING LOT TRACKER</h1>
      <div style={styles.instruction}>
        <h3 style={styles.h3}>Click to add car details!</h3>
        <form onSubmit={handleOnSubmit} style={styles.form}>
          <label>
            Model:{" "}
            <select value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="default"></option>
              {carModels.map((car) => {
                return <option value={car.id}>{car.label}</option>;
              })}
            </select>
          </label>
          <label>
            Color:{" "}
            <textarea
              placeholder="Blue"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              ...styles.button,
              backgroundColor: isHovered ? "#FFC067" : "#7D99AA",
              cursor: "pointer",
            }}
          >
            ADD CAR
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  headerContainer: {
    textAlign: "center",
    padding: "2%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1.4rem",
  },
  instruction: {
    border: "1px dotted #7D99AA",
    padding: "1rem",
    borderRadius: "15px",
  },
  form: {
    borderRadius: "5%",
    gap: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    textAlign: "left",
    maxWidth: "300px",
  },

  h1: {
    fontSize: "3rem",
    color: "#66C4FF",
    marginBottom: "1rem",
  },

  h3: {
    fontSize: "1.2rem",
    margin: "0px",
    marginBottom: "1rem",
    color: "#7D99AA",
  },
  button: {
    border: "1px",
    borderRadius: "10px",
    backgroundColor: "#7D99AA",
    color: "whitesmoke",
    fontSize: "1rem",
    fontWeight: "700",
    width: "100%",
    padding: "1rem",
  },
};

export default Header;
