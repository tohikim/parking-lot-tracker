import { useState } from "react";
import Earnings from "./Earnings";
import CarInput from "./CarInput";

export function Header(props) {
  const [model, setModel] = useState("default");
  const [sirname, setSirname] = useState("");

  return (
    <div className="text-center  w-full flex flex-col items-center mb-[1.4rem]">
      <h1 className=" text-amber-800 font-serif text-5xl mb-[1.7rem]">
        VALET DASHBOARD
      </h1>
      <div className="flex flex-row gap-[3rem]">
        <CarInput
          model={model}
          setModel={setModel}
          sirname={sirname}
          setSirname={setSirname}
          parkedCars={props.parkedCars}
          setParkedCars={props.setParkedCars}
        />
        <div className="border-0 w-full items-center flex flex-col text-center">
          <Earnings totalEarnings={props.totalEarnings} />
        </div>
      </div>
    </div>
  );
}

export default Header;
