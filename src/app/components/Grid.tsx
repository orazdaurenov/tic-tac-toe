"use client";
import React, { useState, type ReactNode } from "react";
import { string } from "zod";

export type SquaresState = {
  squares: Array<ValidValues>;
  lastSquare: ValidValues;
  setSquares: (input: Array<ValidValues>) => void;
  setLastSquare: (input: ValidValues) => void;
};

const Grid = ({
  squares,
  lastSquare,
  setSquares,
  setLastSquare,
}: SquaresState) => {
  function fillCell(Currinput: ValidValues) {
    if (Currinput === " ") {
      const nextSquare = lastSquare === "X" ? "O" : "X";
      setLastSquare(nextSquare);
      return nextSquare;
    }
    return Currinput;
  }
  function handleClick(squareIndex: number) {
    // [x,x,x,x,x]
    // [x,x,o,x,x]
    const nextSquares = squares.map((square, index) => {
      if (index === squareIndex) {
        return fillCell(square);
      }
      return square;
    });
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
export type ValidValues = "X" | " " | "O";
export interface SquareProps {
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
