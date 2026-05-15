function Earnings(props) {
  return (
    <div className="bg-white border border-dotted border-[#7D99AA] rounded-[15px] w-full min-h-[150px] p-[1rem] text-[#7D99AA]">
      <h5 className="m-0 mb-[1rem] text-xl font-sans">Day Earnings</h5>
      <p className="text-[1rem] m-0 text-black text-left">Seconds rate: $2</p>
      <div className="flex flex-row gap-0">
        <p className="text-[1rem] m-0 text-black text-left">
          Today's earnings: ${props.totalEarnings}
        </p>
      </div>
    </div>
  );
}

export default Earnings;
