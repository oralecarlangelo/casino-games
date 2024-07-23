import { CoinProvider } from "./context/coin-context";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CoinProvider>{children}</CoinProvider>;
}
