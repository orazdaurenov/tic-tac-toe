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
  const arr = ["X", "X", "X"];
  // index,str => arr[index]=strg
  // [X,X,X] => (2,"O") => [X,X,O]
  const outputArr: string[] = [];
  changeIndex(1, "7", arr);

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
        <Header clearSquares={() => setSquares(defaultSquare)} />
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
