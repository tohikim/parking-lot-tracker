import { carModels } from "../constants/car-models";

function CarInput(props) {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const parkedCar = {
      model: props.model,
      color: props.color,
      entryTime: new Date(),
      _id: Math.floor(Math.random() * 1000),
    };

    if (props.parkedCars.length < 9) {
      props.setParkedCars((prevState) => {
        return [...prevState, parkedCar];
      });
      props.setModel("default");
      props.setColor("");
    } else {
      alert(`This parking lot is full!`);
    }
  };

  return (
    <div className="w-full border border-dotted border-[#7D99AA] p-4 rounded-[15px] items-start">
      <h3 className="font-sans text-[#7D99AA] text-xl m-0 mb-[1rem]">
        Click to add car details!
      </h3>
      <form
        onSubmit={handleOnSubmit}
        className="border-0 rounded-2xl flex flex-col text-left text-[1rem] max-w-[300px] items-start gap-[1rem]"
      >
        <label>
          Model:{" "}
          <select
            value={props.model}
            onChange={(e) => props.setModel(e.target.value)}
            className="border-2 rounded-md border-gray-200 w-full"
          >
            <option value="default"></option>
            {carModels.map((car) => {
              return (
                <option key={car.id} value={car.id}>
                  {car.label}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Color:{" "}
          <textarea
            placeholder="Blue"
            value={props.color}
            onChange={(e) => props.setColor(e.target.value)}
            className="border-2 rounded-md border-gray-200 w-full"
          />
        </label>
        <button
          type="submit"
          className="cursor-pointer rounded-[10px] border bg-[#7D99AA] hover:bg-[#FFC067] transition-colors text-[whitesmoke] text-base font-bold w-full p-4"
        >
          CHECK IN CAR
        </button>
      </form>
    </div>
  );
}

export default CarInput;
