function Earnings(props) {
  return (
    <div className="bg-white border border-dotted border-[#7D99AA] rounded-[15px] w-full min-h-[150px] p-[1rem] text-[#7D99AA] text-center items-center shadow-sm shadow-orange-900/5">
      <h5 className="m-0 mb-[1rem] text-xl font-sans">Day Earnings</h5>
      <p className="text-4xl font-bold text-amber-800 mt-[1rem] mb-[1rem]">
        ${props.totalEarnings}
      </p>
      <p className="text-[1rem] m-0 text-black text-center">Rate: $2/sec</p>
    </div>
  );
}

export default Earnings;
