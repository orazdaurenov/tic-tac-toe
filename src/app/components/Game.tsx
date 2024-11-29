"use client";
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Grid, { ValidValues } from "./Grid";
import Results from "./Results";

const Game = () => {
  const defaultSquare: Array<ValidValues> = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ];
  const [squares, setSquares] = useState(defaultSquare);
  const [lastSquare, setLastSquare] = useState<ValidValues>(" ");

  const outputArr: string[] = [];

  const Winner = () => {
    const Xwon = "XXX";
    const Owon = "OOO";
    //in ts, the "!" tell ts to ignore undefined
    const firstRow = squares[0]! + squares[1]! + squares[2]!;
    const secondRow = squares[3]! + squares[4]! + squares[5]!;
    const thirdRow = squares[6]! + squares[7]! + squares[8]!;
    const firstColumn = squares[0]! + squares[3]! + squares[6]!;
    const secondColumn = squares[1]! + squares[4]! + squares[7]!;
    const thirdColumn = squares[2]! + squares[5]! + squares[8]!;
    const leftDiagonal = squares[0]! + squares[4]! + squares[8]!;
    const rightDiagonal = squares[2]! + squares[4]! + squares[6]!;
    const allRowsAndCols = [
      firstRow,
      secondRow,
      thirdRow,
      firstColumn,
      secondColumn,
      thirdColumn,
      leftDiagonal,
      rightDiagonal,
    ];
    for (let i = 0; i < allRowsAndCols.length; i++) {
      const wonStrg = allRowsAndCols[i];
      if (wonStrg == Xwon) return "X";
      if (wonStrg == Owon) return "O";
    }
  };

  console.log(Winner());
  function changeIndex(replaceIndex: number, replace: string, arr: string[]) {
    //code below:
    for (let i = 0; i <= arr.length - 1; i++) {
      const currentElement = arr[i] as string;
      //give a console.log that says "last loop" when its the last loop

      if (i === replaceIndex) {
        console.log("last loop");
        outputArr.push("O");
      } else outputArr.push(currentElement);
    }
  }

  console.log("RESULTS: ", outputArr);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded border-2 border-solid border-lime-600 p-3">
        <Header
          clearSquares={() => setSquares(defaultSquare)}
          turn={lastSquare}
        />
        <Grid
          squares={squares}
          lastSquare={lastSquare}
          setSquares={setSquares}
          setLastSquare={setLastSquare}
        />
        <Results />
      </div>
    </div>
  );
};

export default Game;
