import Entry from "./Entry.js";

function Footer(props) {
  if (props.exitedCars.length) {
    return (
      <div>
        <table className="text-left text-[1rem] h-fit rounded-[15px] border-collapse table-fixed w-full">
          <thead>
            <tr className="pl-[1rem] pr-[1rem] max-h-[50px] font-bold bg-slate-200">
              <th>Model</th>
              <th>Sirname</th>
              <th>Entry time</th>
              <th>Exit time</th>
              <th>Duration (S)</th>
            </tr>
          </thead>
          <tbody>
            {props.exitedCars.map((exitedCar) => {
              return (
                <Entry
                  key={exitedCar._id}
                  model={exitedCar.model}
                  sirname={exitedCar.sirname}
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
      <p className="text-center text-xl">Checked out cars will appear here.</p>
    );
  }
}

export default Footer;
