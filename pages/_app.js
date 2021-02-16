// 공통 레이아웃 적용
import Head from "next/head";
import Layout from "../src/component/Layout";
import Header from "../src/component/Header";
import Footer from "../src/component/Footer";
import Menu from "../src/component/Menu";
import axios from "axios";
import wrapper from "../store/configureStore";
import { useRouter } from "next/router";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;

const MyApp = ({ Component, pageProps }) => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const path = [
    "/login",
    "/signup",
    "/signup/first",
    "/signup/second",
    "/user/help",
    "/signup/sns",
    "/login/select",
  ];

  const removeFooter = path.includes(router.pathname);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>상상마루 - playlicense</title>
      </Head>
      <Layout>
        <Header />
        <Component {...pageProps} />
        {!removeFooter && <Footer />}
      </Layout>
    </>
  );
};

export default wrapper.withRedux(MyApp);
