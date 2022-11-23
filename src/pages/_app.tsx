import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

const inter = Inter({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
