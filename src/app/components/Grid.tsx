"use client";
import React, { type ReactNode } from "react";

export type SquaresState = {
  squares: Array<ValidValues>;
  lastSquare: ValidValues;
  allowplay: boolean;
  defineWinner: (input: Array<ValidValues>) => void;
  setSquares: (input: Array<ValidValues>) => void;
  setLastSquare: (input: ValidValues) => void;
};

const Grid = ({
  defineWinner,
  allowplay,
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
    if (allowplay) {
      const nextSquares = squares.map((square, index) => {
        if (index === squareIndex) {
          return fillCell(square);
        }
        return square;
      });
      defineWinner(nextSquares);
      setSquares(nextSquares);
    }
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
  let ImgJSX: string | ReactNode = " ";
  if (value == "X") {
    ImgJSX = <img src="/imgX.svg" alt="ImageX" />;
  } else if (value == "O") {
    ImgJSX = <img src="/ImgO.svg" alt="ImageO" />;
  }
  return (
    <div
      onClick={handleClick}
      className="m-1 h-10 w-10 rounded-md border-none bg-btn-color"
    >
      {ImgJSX}
    </div>
  );
};

export default Grid;
