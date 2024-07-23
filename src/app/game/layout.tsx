import { GameProvider } from "./context/game-context";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GameProvider>{children}</GameProvider>;
}
