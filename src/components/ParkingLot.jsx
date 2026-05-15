import Car from "./Car.js";

function ParkingLot(props) {
  return (
    <div className="flex flex-col flex-wrap border-[6px] border-dashed border-amber-800 rounded-[25px] bg-gray-200 min-h-[250px] h-[510px] gap-[2rem] p-[2rem] mb-[2rem]">
      {props.parkedCars.map((parkedCar) => {
        return (
          <Car
            key={parkedCar._id}
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

export default ParkingLot;
