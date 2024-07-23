import { DiceProvider } from "./context/dice-context";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DiceProvider>{children}</DiceProvider>;
}
