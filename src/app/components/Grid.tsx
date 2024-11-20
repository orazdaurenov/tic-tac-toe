import React from "react";

const Grid = () => {
  return (
    <>
      <div className="grid-cols-1">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div className="grid-cols-1">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div className="grid-cols-1">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
    </>
  );
};

const Square = ({ value }) => {
  return (
    <>
      <div className="h-10 w-10 border-2 border-solid border-black">
        {value}
      </div>
    </>
  );
};

export default Grid;
