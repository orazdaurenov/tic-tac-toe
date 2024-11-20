"use client";
import React, { useState, type ReactNode } from "react";

const Grid = () => {
  const defaultSquare: Array<ValidValues> = [
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ];
  const [squares, setSquares] = useState(defaultSquare);
  function handleClick(i: number) {
    const nextSquares = squares.map((square, index) => {
      if (index === i) {
        return "O";
      }
      return square;
    });
    console.log(squares[i]);
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            handleClick={() => {
              handleClick(i);
            }}
          />
        ))}
      </div>
    </>
  );
};
// ts funcitons have this pattern: funName(props:propsType):retrunType{}
// default empty type is any
// implicit retun type: whatever the fn retuns becomes its return type
type ValidValues = "X" | " " | "O";
interface SquareProps {
  value: ValidValues;
  handleClick: () => void;
}

const Square = ({ value, handleClick }: SquareProps): ReactNode => {
  return (
    <>
      <div
        onClick={handleClick}
        className="h-10 w-10 border-2 border-solid border-black"
      >
        {value}
      </div>
    </>
  );
};

export default Grid;
