"use client";

import React from "react";
import { type ValidValues } from "./Grid";

const Header = ({ resetGame, turn }: RetryProps & TurnProps) => {
  return (
    <header className="flex gap-2 p-4">
      <Logo />
      <Turn turn={turn} />
      <Retry resetGame={resetGame} />
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
  resetGame: () => void;
};

const Retry = ({ resetGame }: RetryProps) => {
  return (
    <>
      <button
        onClick={() => {
          resetGame();
        }}
      >
        RETRY
      </button>
    </>
  );
};

export default Header;
