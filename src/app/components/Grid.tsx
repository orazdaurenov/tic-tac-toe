import React from "react";

const Grid = () => {
  return (
    <>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </>
  );
};

const Square = () => {
  return (
    <>
      <div className="h-10 w-10 border-2 border-solid border-black"></div>
    </>
  );
};

export default Grid;
