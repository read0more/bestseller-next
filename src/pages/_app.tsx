import Layout from "@/components/Layout";
import { server } from "@/msw/server";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // server.listen();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
