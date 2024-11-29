import Link from "next/link";
import Game from "./components/Game";

// File based routing is the idea that each file maps to an URL
// localhost/games -> dir called games, inside the directory you will have a page.tsx
// next will the url, serving the page.tsx file

// "/": menu (this file)
// "/game": tic tac to (/game/page.tsx)
export default function HomePage() {
  // homework: finshish home page (get text, dont worry too much about styles)
  return (
    <>
      <h1>Menu page</h1>
      <Link href="/game">Start Game</Link>
      <Link
        href="/game/cpu"
        className="my-2 w-1/6 rounded-md border-2 border-solid border-lime-300 p-2 text-yellow-500"
      >
        NEW GAME (VS CPU)
      </Link>
      <Link
        href="/game/player"
        className="w-1/6 rounded-md border-2 border-solid border-lime-300 p-2 text-yellow-500"
      >
        NEW GAME (VS PLAYER)
      </Link>
    </>
  );
}
