import "@/styles/globals.css";
import Head from "next/head";

import Layout from "@/components/Layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Nextjs Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
