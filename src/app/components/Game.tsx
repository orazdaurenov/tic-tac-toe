"use client";
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Grid, { ValidValues } from "./Grid";
import Results from "./Results";

export type ResultObj = {
  oplayer: number;
  xplayer: number;
  ties: number;
};

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
  const [results, setResults] = useState<ResultObj>({
    oplayer: 0,
    xplayer: 0,
    ties: 0,
  });
  const [allowPlay, setAllowPlay] = useState(true);

  const defineTies = (nextSquares: ValidValues[]): boolean => {
    // if there's no empty cells, call it a tie
    return !nextSquares.some((square) => {
      return square === " ";
    });
  };
  const defineWinner = (nextSquares: ValidValues[]) => {
    console.log(nextSquares);
    let winner = getWinner(nextSquares);
    if (winner === "X") {
      const nextResults = { ...results, xplayer: results.xplayer + 1 };
      setResults(nextResults);
      setAllowPlay(false);
      console.log("X won");
    } else if (winner === "O") {
      const nextResults = { ...results, oplayer: results.oplayer + 1 };
      setResults(nextResults);
      setAllowPlay(false);
      console.log("O won");
    } else if (defineTies(nextSquares)) {
      const nextResults = { ...results, ties: results.ties + 1 };
      setResults(nextResults);
      setAllowPlay(false);
      console.log("Ties");
      //only runs after checking winner
    }
  };

  const outputArr: string[] = [];

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
          allowplay={allowPlay}
          defineWinner={defineWinner}
          squares={squares}
          lastSquare={lastSquare}
          setSquares={setSquares}
          setLastSquare={setLastSquare}
        />
        <Results result={results} />
      </div>
    </div>
  );
};

const getWinner = (nextSquares: ValidValues[]) => {
  const Xwon = "XXX";
  const Owon = "OOO";
  //in ts, the "!" tell ts to ignore undefined
  const firstRow = nextSquares[0]! + nextSquares[1]! + nextSquares[2]!;
  const secondRow = nextSquares[3]! + nextSquares[4]! + nextSquares[5]!;
  const thirdRow = nextSquares[6]! + nextSquares[7]! + nextSquares[8]!;
  const firstColumn = nextSquares[0]! + nextSquares[3]! + nextSquares[6]!;
  const secondColumn = nextSquares[1]! + nextSquares[4]! + nextSquares[7]!;
  const thirdColumn = nextSquares[2]! + nextSquares[5]! + nextSquares[8]!;
  const leftDiagonal = nextSquares[0]! + nextSquares[4]! + nextSquares[8]!;
  const rightDiagonal = nextSquares[2]! + nextSquares[4]! + nextSquares[6]!;
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

export default Game;
