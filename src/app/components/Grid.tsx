import React from "react";

const Grid = () => {
  return (
    <div className="flex justify-center">
      <div className="grid">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div className="grid">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div className="grid">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
    </div>
  );
};

const Square = ({ value }: { value: string }) => {
  return (
    <>
      <div className="h-10 w-10 border-2 border-solid border-black">
        {value}
      </div>
    </>
  );
};

export default Grid;
