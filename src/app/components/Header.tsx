"use client";

import React from "react";
import { type ValidValues } from "./Grid";

const Header = ({ clearSquares, turn }: RetryProps & TurnProps) => {
  return (
    <header className="flex gap-2 p-4">
      <Logo />
      <Turn turn={turn} />
      <Retry clearSquares={clearSquares} />
    </header>
  );
};

const Logo = () => {
  return (
    <>
      <img src="/imgX.svg" alt="ImageX" className="w-4" />
    </>
  );
};

type TurnProps = {
  turn: ValidValues;
};

const Turn = ({ turn }: TurnProps) => {
  let nextTurn = " ";
  if (turn === "X") {
    nextTurn = "O";
  } else {
    nextTurn = "X";
  }

  return (
    <>
      <p>{nextTurn} turn</p>
    </>
  );
};

export type RetryProps = {
  clearSquares: () => void;
};

const Retry = ({ clearSquares }: RetryProps) => {
  return (
    <>
      <button onClick={clearSquares}>RETRY</button>
    </>
  );
};

export default Header;
