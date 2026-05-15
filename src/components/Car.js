import { differenceInSeconds } from "date-fns";
import { format } from "date-fns";

function Car(props) {
  const handleClick = () => {
    const exitTime = new Date();

    const exitedCar = {
      model: props.model,
      sirname: props.sirname,
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
    <div className="rounded-[15px] max-h-[130px] h-fit max-w-[40%] w-fit">
      <div className="flex flex-row gap-[10px]">
        <p className="m-0 pb-[0.3rem] text-amber-800">Model: {props.model}</p>
      </div>
      <div className="flex flex-row gap-[10px]">
        <p className="m-0 pb-[0.3rem] text-amber-800">
          Sirname: {props.sirname}
        </p>
      </div>
      <div className="flex flex-row gap-[10px]">
        <p className="m-0 pb-[0.3rem] text-amber-800">
          Entry time: {format(props.entryTime, "PPpp")}
        </p>
      </div>
      <button
        className="p-[0.4rem] text-white bg-amber-800 rounded-[10px] w-full mb-[0.3rem]"
        onClick={handleClick}
      >
        CHECK OUT
      </button>
    </div>
  );
}

export default Car;
