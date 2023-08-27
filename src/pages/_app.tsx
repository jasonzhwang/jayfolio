import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../layout";
import { SessionProvider } from "next-auth/react";

const JayfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>JayJay Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jayfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider refetchInterval={5 * 60}>
        <main className="bg-[#FE5943]">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </SessionProvider>
    </>
  );
};
export default JayfolioApp;
