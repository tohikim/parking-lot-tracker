import { carModels } from "../constants/car-models";

function CarInput(props) {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const parkedCar = {
      model: props.model,
      sirname: props.sirname,
      entryTime: new Date(),
      _id: Math.floor(Math.random() * 1000),
    };

    if (props.model === "default" || props.sirname === "") {
      alert(`Please enter both the car brand and the owner's sirname.`);
    } else if (
      props.model !== "default" &&
      props.sirname !== "" &&
      props.parkedCars.length < 6
    ) {
      props.setParkedCars((prevState) => {
        return [...prevState, parkedCar];
      });
      props.setModel("default");
      props.setSirname("");
    } else {
      alert(`This parking lot is full!`);
    }
  };

  return (
    <div className="w-full min-w-[300px] border border-dotted border-[#7D99AA] p-4 rounded-[15px] items-start shadow-sm shadow-orange-900/5">
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
          Sirname:{" "}
          <textarea
            placeholder="Blue"
            value={props.sirname}
            onChange={(e) => props.setSirname(e.target.value)}
            className="border-2 rounded-md border-gray-200 w-full"
          />
        </label>
        <button
          type="submit"
          className="cursor-pointer rounded-[10px] border bg-[#7D99AA] hover:bg-amber-800 transition-colors text-[whitesmoke] text-base font-bold w-full p-4"
        >
          CHECK IN CAR
        </button>
      </form>
    </div>
  );
}

export default CarInput;
