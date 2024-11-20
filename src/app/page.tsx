import Game from "./components/Game";
import Grid from "./components/Grid";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <Game>
      <Header />
      <Grid />
    </Game>
  );
}
