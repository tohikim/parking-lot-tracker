import Car from "./Car.js";

function ParkingLot(props) {
  return (
    <div className="flex flex-col flex-wrap border-[6px] border-dashed border-amber-800 rounded-[25px] bg-slate-100 min-h-[250px] h-[580px] w-full gap-10 p-10 mb-[1rem]">
      {props.parkedCars.map((parkedCar) => {
        return (
          <Car
            key={parkedCar._id}
            model={parkedCar.model}
            sirname={parkedCar.sirname}
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
