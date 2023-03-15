import "../styles/globals.sass";
import type { AppProps } from "next/app";
import background from "../assets/background.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(https://i.hizliresim.com/1r28rpw.jpg)` }}
    >
      <Component {...pageProps} />
    </div>
  );
}
