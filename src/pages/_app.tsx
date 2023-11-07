import "@/styles/globals.css";
import "@/assets/scss/styles.scss";
import DefaultLayout from "@/layouts/DefaultLayout";
import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import MantineTheme from "@/plugins/theme";
import "@/config/i18n";
import Head from "next/head";

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout?: React.ComponentType<any>;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <>
      <Head>
        <title>docprep</title>
      </Head>
      <MantineTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineTheme>
    </>
  );
}
