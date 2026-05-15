import { useState } from "react";
import Earnings from "./Earnings";
import CarInput from "./CarInput";

export function Header(props) {
  const [model, setModel] = useState("default");
  const [color, setColor] = useState("");

  return (
    <div className="text-center p-[2rem] w-full flex flex-col items-center mb-[1.4rem]">
      <h1 className=" text-amber-800 font-serif text-5xl mb-[1.7rem]">
        VALOT DASHBOARD
      </h1>
      <div className="flex flex-row gap-[1rem]">
        <CarInput
          model={model}
          setModel={setModel}
          color={color}
          setColor={setColor}
          parkedCars={props.parkedCars}
          setParkedCars={props.setParkedCars}
        />
        <div className="border-0 w-full items-center flex flex-col">
          <Earnings totalEarnings={props.totalEarnings} />
        </div>
      </div>
    </div>
  );
}

export default Header;
