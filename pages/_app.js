// 공통 레이아웃 적용
import { useState } from "react";
import Head from "next/head";
import Layout from "../src/component/Layout";
import Header from "../src/component/Header";
import Footer from "../src/component/Footer";
import Menu from "../src/component/Menu";

const MyApp = ({ Component, pageProps }) => {
  const [menu, setMenu] = useState(false);

  const open = () => {
    setMenu(true);
  };

  const close = () => {
    setMenu(false);
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>상상마루 - playlicense</title>
      </Head>
      <Layout>
        <Header open={open} close={close} status={menu} />
        {menu === true ? (
          <>
            <Menu close={close} status={menu} />
          </>
        ) : (
          <></>
        )}
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  );
};

export default MyApp;
