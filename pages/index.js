import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Carousel from "../src/component/Home/Carousel";
import Slider from "../src/component/Home/Slider";
import Hot from "../src/component/Home/Hot";
import New from "../src/component/Home/New";
import Curation from "../src/component/Home/Curation";
import ComingSoon from "../src/component/Home/ComingSoon";
import { useRouter } from "next/router";
import HomeStore from "../store/homeStore";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const Home = () => {
  return (
    <HomeStore>
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
          <Carousel />
        </CarouselSection>
        <BannerSection>
          <Link href="/signup/first">
            <Banner1>
              <img src="/assets/image/Banner_Buyer.png" />
            </Banner1>
          </Link>
          <Banner1_1>
            <img src="/assets/image/HO_PL provider.png" />
          </Banner1_1>
        </BannerSection>
        <HotSection>
          <Hot />
        </HotSection>
        <Divider />
        <NewSection>
          <New />
        </NewSection>
        <CurationSection>
          <Curation />
        </CurationSection>
        <UpcomingSection>
          <ComingSoon />
        </UpcomingSection>
        <BannerSection>
          <Banner2>
            <img src="/assets/image/Banner_Provider.png" />
          </Banner2>
        </BannerSection>
      </Container>
    </HomeStore>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const CarouselSection = styled.div`
  width: 100%;
  height: 100%;
`;

const BannerSection = styled.div`
  width: 100%;
  max-height: 180px;
  height: auto;
  margin-bottom: 115px;
  max-width: 924px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
`;

const Banner1 = styled.div`
  width: 75%;
  cursor: pointer;
  margin-top: 99px;
  & > img {
    width: 100%;
  }
`;

const Banner1_1 = styled.div`
  width: 23%;
  cursor: pointer;
  margin-top: 99px;
  margin-left: 2%;
  & > img {
    width: 100%;
  }
`;

const HotSection = styled.div`
  width: 100%;
  max-width: 924px;
  margin: 0 auto;
`;

const Divider = styled.div`
  height: 2px;
  background-color: #e6e6e6;
  width: 100%;
  max-width: 924px;
  margin: 0 auto;
`;
const NewSection = styled.div`
  width: 100%;
  max-width: 924px;
  margin: 0 auto;
`;
const CurationSection = styled.div`
  width: 100%;
  background-color: #f5f5f5;
`;
const UpcomingSection = styled.div`
  width: 100%;
  max-width: 924px;
  margin: 0 auto;
`;

const Banner2 = styled.div`
  max-height: 180px;
  cursor: pointer;
  margin-bottom: 163px;
  padding: 0 1rem;
  & > img {
    width: 100%;
  }
`;

export default Home;
