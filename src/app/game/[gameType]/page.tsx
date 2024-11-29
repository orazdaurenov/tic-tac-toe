export default async function page({
  params,
}: {
  params: Promise<{ gameType: "cpu" | "player" }>;
}) {
  const type = (await params).gameType;
  if (type === "cpu") {
    return <p>Run game as CPU</p>;
  }
  if (type === "player") {
    return <p>Run game as Player vs Player</p>;
  }
}
