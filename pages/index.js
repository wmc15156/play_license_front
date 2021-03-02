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

const Home = () => {
  const { data: loginData, error: loginError, mutate } = useSWR(
    "/auth/me",
    fetcher
  );

  const router = useRouter();

  setTimeout(() => {
    if (loginData && loginError) {
      mutate(false, false);
      router.push("/login");
    }
  }, 2000);

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
  /* padding: 0 1rem; */
  flex-direction: column;
`;

const CarouselSection = styled.div`
  width: 100%;
  /* max-width: 924px; */
  /* margin: 0 auto; */
`;

const Banner1 = styled.div`
  cursor: pointer;
  margin-top: 99px;
  padding: 0 1rem;
  & > img {
    width: 100%;
  }
`;

const HotSection = styled.div`
  width: 100%;
  max-width: 924px;
  margin: 0 auto;
  padding: 0 1rem;
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
  padding: 0 1rem;
`;
const CurationSection = styled.div`
  width: 100%;
  background-color: #f5f5f5;
`;
const UpcomingSection = styled.div`
  width: 100%;
  max-width: 924px;
  padding: 0 1rem;
  margin: 0 auto;
`;
const BannerSection = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 115px;
  max-width: 924px;
  margin: 0 auto;
`;

const Banner2 = styled.div`
  cursor: pointer;
  margin-bottom: 163px;
  padding: 0 1rem;
  & > img {
    width: 100%;
  }
`;

export default Home;
