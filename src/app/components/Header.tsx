import React from "react";

const Header = () => {
  return (
    <header className="">
      <Logo />
      <Turn />
      <Retry />
    </header>
  );
};

const Logo = () => {
  return (
    <>
      <img src="/imgX.svg" alt="" className="w-5" />
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

const Retry = () => {
  return (
    <>
      <p>RETRY</p>
    </>
  );
};

export default Header;
