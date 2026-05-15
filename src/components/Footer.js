import Entry from "./Entry.js";

function Footer(props) {
  if (props.exitedCars.length) {
    return (
      <div>
        <table className="w-full text-left text-[1rem] h-fit">
          <thead>
            <tr>
              <th>Model: </th>
              <th>Color: </th>
              <th>Enthy time: </th>
              <th>Exit time: </th>
              <th>Duration: </th>
            </tr>
          </thead>
          <tbody>
            {props.exitedCars.map((exitedCar) => {
              return (
                <Entry
                  key={exitedCar._id}
                  model={exitedCar.model}
                  color={exitedCar.color}
                  entryTime={exitedCar.entryTime}
                  exitTime={exitedCar.exitTime}
                  duration={exitedCar.duration}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <p className="text-center text-xl ">Exited cars will appear here.</p>
    );
  }
}

export default Footer;
