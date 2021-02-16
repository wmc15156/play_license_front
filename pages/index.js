import Head from "next/head";
import styled from "styled-components";
import Slider from "../src/component/Home/Slider";
import Hot from "../src/component/Home/Hot";
import New from "../src/component/Home/New";
import ComingSoon from "../src/component/Home/ComingSoon";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMyInfoThunk } from "../reducers/user";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { useRouter } from "next/router";
import styles from "../styles/colors";

const Container = styled.div`
  max-width: 1024px;
  display: flex;
  min-height: 100%;
  padding: 0 1rem;
  flex-direction: column;
  margin: 0 auto;
`;

const CarouselSection = styled.div`
  width: 100%;
  height: 100%;
`;

const HotSection = styled.div`
  width: 100%;
  height: 500px;
`;

const NewSection = styled.div`
  width: 100%;
  height: 710px;
`;

const UpcomingSection = styled.div`
  width: 100%;
  height: 710px;
`;
const BannerSection = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 115px;
  & > img {
    width: 100%;
  }
`;

const Home = () => {
  const { loading, data, error } = useSelector((state) => state.users?.me);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(loadMyInfoThunk());
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert("재 로그인 해주세요!");
      router.push("/login");
    }
  }, [error]);

  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="상상마루 - 플레이스테이션" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:url" content="https://playlicense.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="상상마루 - 플레이스테이션" />
        <meta property="og:description" content="상상마루 - 플레이스테이션" />
        <meta property="og:image" content="" />
        <title>상상마루 - playlicense</title>
      </Head>
      <CarouselSection>
        <Slider />
      </CarouselSection>
      <BannerSection>
        <img src="/assets/image/Banner_Buyer.png" />
      </BannerSection>
      <HotSection>
        <Hot />
      </HotSection>
      <NewSection>
        <New />
      </NewSection>
      <UpcomingSection>
        <ComingSoon />
      </UpcomingSection>
      <BannerSection>
        <img src="/assets/image/Banner_Provider.png" />
      </BannerSection>
    </Container>
  );
};

export default Home;
