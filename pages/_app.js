// 공통 레이아웃 적용
import Head from "next/head";
import Layout from "../src/component/Layout/Layout";
import PL_Layout from "../src/component/Layout/PL_Layout";
import Header from "../src/component/Nav/Header";
import Footer from "../src/component/Footer";
import axios from "axios";
import wrapper from "../store/configureStore";
import { useRouter } from "next/router";
import { useState } from "react";
import HomeStore, { useHomeState } from "../store/homeStore";
import AdminLayout from "../src/component/admin/AdminLayout/AdminLayout";
import AdminHeader from "../src/component/admin/AdminHeader/AdminHeader";

const url =
  process.env.NODE_ENV === "production"
    ? "https://api.shortlysoftware.com/api"
    : "http://localhost:8000/api";
console.log(url);
axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;
console.log(process.env.NODE_ENV, "test");

// tslint:disable-next-line: no-empty
const noop = () => {};

if (process.env.NODE_ENV === "production") {
  console.log = noop;
  console.warn = noop;
  console.error = noop;
}

console.log("build?");
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const providerWeb = router.pathname.includes("/provider");
  const adminWeb = router.pathname.includes("/admin");

  const onCloseHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const providerPath = [
    "/provider",
    "/provider/login",
    "/provider/find/email",
    "/provider/find/getAccount",
    "/provider/find/password",
    "/provider/inquiry",
  ];

  const buyerPath = [
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
    "/find/email",
    "/find/password",
    "/find/getEmail",
    "/admin",
  ];

  const removeFooter = buyerPath.includes(router.pathname);
  const removePLlayout = providerPath.includes(router.pathname);
  return (
    <HomeStore>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>상상마루 - playlicense</title>
      </Head>
      {/* buyer */}
      {!providerWeb && !adminWeb && (
        <Layout>
          <Header menuStatus={isMenuOpen} onCloseHandler={onCloseHandler} />
          {!isMenuOpen && <Component {...pageProps} />}
          {!isMenuOpen && !removeFooter && <Footer />}
          <div id="modal" />
        </Layout>
      )}

      {/* provider */}
      {providerWeb && !removePLlayout && (
        <PL_Layout>
          <Component {...pageProps} />
          <div id="modal" />
        </PL_Layout>
      )}

      {adminWeb && (
        <AdminLayout>
          <AdminHeader />
          <Component {...pageProps} />
          <div id="modal" />
        </AdminLayout>

      {providerWeb && removePLlayout && (
        <Layout>
          <Component {...pageProps} />
          <div id="modal" />
        </Layout>

      )}
    </HomeStore>
  );
};

export default wrapper.withRedux(MyApp);
