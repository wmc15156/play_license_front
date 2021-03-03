// 공통 레이아웃 적용
import Head from "next/head";
import Layout from "../src/component/Layout";
import Header from "../src/component/Header2";
import Footer from "../src/component/Footer";
import axios from "axios";
import wrapper from "../store/configureStore";
import { useRouter } from "next/router";
import { useState } from "react";
import { Html } from "next/document";
import HomeStore from "../store/homeStore";

const url =
  process.env.NODE_ENV === "production"
    ? "https://api.shortlysoftware.com/api"
    : "http://localhost:8000/api";
console.log(url);
axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;
console.log(process.env_NODE_ENV, "test");

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onCloseHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const path = [
    "/login",
    "/signup",
    "/signup/first",
    "/signup/second",
    "/user/help",
    "/signup/sns",
    "/login/select",
    "/signup/third",
    "/signup/done",
    "/exist/account",
  ];

  const removeFooter = path.includes(router.pathname);
  return (
    <HomeStore>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>상상마루 - playlicense</title>
      </Head>
      <Layout>
        <Header menuStatus={isMenuOpen} onCloseHandler={onCloseHandler} />
        {!isMenuOpen && <Component {...pageProps} />}
        {!isMenuOpen && !removeFooter && <Footer />}
        <div id="modal" />
      </Layout>
    </HomeStore>
  );
};

export default wrapper.withRedux(MyApp);
