import React from "react";

const Status: React.FC<{ status: string }> = ({ status }) => {
  let statusStyle: string;
  if (status === "Alive") {
    statusStyle = "bg-green-600";
  } else if (status === "Dead") {
    statusStyle = "bg-red-600";
  } else {
    statusStyle = "bg-orange-300";
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className={`flex flex-row m-2 ${statusStyle} w-3 h-3 rounded-full  `}
      ></div>
      <p className="text-xl">{status}</p>
    </div>
  );
};

export default Status;
