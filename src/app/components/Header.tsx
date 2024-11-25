"use client";

import React from "react";

const Header = () => {
  return (
    <header className="flex gap-2 p-4">
      <Logo />
      <Turn />
      <Retry clearSquares={() => console.log("squares cleared")} />
    </header>
  );
};

const Logo = () => {
  return (
    <>
      <img src="/imgX.svg" alt="" className="w-4" />
    </>
  );
};

const Turn = () => {
  return (
    <>
      <p>X TURN</p>
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
