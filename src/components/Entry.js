import { format } from "date-fns";

function Entry(props) {
  return (
    <tr className="text-black h-fit p-[1rem] max-h-[50px] bg-slate-50 m-0">
      <td>{props.model}</td>
      <td>{props.sirname}</td>
      <td>{format(props.entryTime, "PPpp")}</td>
      <td>{format(props.exitTime, "PPpp")}</td>
      <td>{props.duration}</td>
    </tr>
  );
}

export default Entry;
