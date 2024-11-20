import React, { ReactNode } from "react";
interface GameProps {
  children: ReactNode;
}

const Game = ({ children }: GameProps) => {
  return (
    <div className="flex w-80 items-center justify-center">{children}</div>
  );
};

export default Game;
