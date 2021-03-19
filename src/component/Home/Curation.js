import styled from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import { useEffect } from "react";
import ShowAll from "../Button/ShowAll";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import Link from "next/link";

const defaultStyles = {
  transform: "scale(0.8)",
  transition: "transform 2s ease",
  width: "100%",
  height: "400px",
  filter: "brightness(50%)",
};
const activeStyles = {
  transform: "scale(1.0)",
  transition: "transform 2s ease",
  opacity: 1,
  width: "100%",
  height: "400px",
  objectFit: "cover",
};

const Curation = () => {
  const { data, error, mutate } = useSWR("/curation/product", fetcher, {
    dedupingInterval: 100000,
  });

  let curation = null;
  let keyArr = null;

  const [imageIdx, setImageIdx] = useState(0);

  const Arrow_Next = ({ currentSlide, slideCount, ...props }) => {
    // console.log(currentSlide, slideCount, props);
    return <ArrowNext {...props} />;
  };

  const Arrow_Prev = ({ currentSlide, slideCount, ...props }) => (
    <ArrowPrev {...props} />
  );

  useEffect(() => {
    axios.get("/curation/product", fetcher).then((res) => {
      mutate(res.data);
    });
  });

  if (!data) {
    return null;
  }

  if (data) {
    const { special } = data;
    curation = special;
    keyArr = Object.keys(special);
  }

  const settings = {
    infinite: true, // cycle
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "17%",
    nextArrow: <Arrow_Next />,
    prevArrow: <Arrow_Prev />,
    beforeChange: (current, next) => setImageIdx(next),
  };
  return (
    <Container>
      <HeadSection>
        <Title>CURATION</Title>
        <ShowAll text={"모두보기"} path={"모든작품"} />
      </HeadSection>
      <SliderContainer>
        <StyledSlider {...settings}>
          {keyArr.map((keyName, idx) => {
            return (
              <div key={idx}>
                <ImageContainer>
                  <TextContainer>
                    <Text1>[{curation[keyName][0].productTitle}] 등</Text1>
                    <Text2>{keyName}에 추천해요!</Text2>
                    <Link
                      href={{
                        pathname: "/market",
                        query: { curation: keyName },
                      }}
                    >
                      <Text3>{curation[keyName].length}개의 작품 보기</Text3>
                    </Link>
                  </TextContainer>
                  <img
                    src={curation[keyName][0].curationImage}
                    alt={curation[keyName][0].productTitle}
                    style={idx === imageIdx ? activeStyles : defaultStyles}
                  />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </SliderContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const HeadSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 72px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Gotham Bold";
  font-size: 24px;
  line-height: 24px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: ${color.white};
  z-index: 11;
`;

const Text1 = styled.p`
  margin: 0;
  font-family: "NotoSansCJKkr-Bold";
  /* font-size: 1.28%; */
  font-size: 18px;
  letter-spacing: -0.5px;
  line-height: 27px;
  margin-bottom: 11px;
`;
const Text2 = styled.p`
  margin: 0;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 36px;
  letter-spacing: -0.5px;
  line-height: 53px;
  margin-bottom: 40px;
`;

const Text3 = styled.span`
  display: inline-block;
  font-family: "NotoSansCJKkr-Regular";
  letter-spacing: -0.5px;
  line-height: 30px;
  text-align: center;
  padding: 8px 21px;
  color: #000;
  background-color: ${color.white};
  border-radius: 25px;
  cursor: pointer;
`;

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  .slick-cloned p {
    display: none;
  }
  .slick-slide p {
    display: none;
  }
  .slick-slide p {
    display: none;
  }
  .slick-slide span {
    display: none;
  }
  .slick-active p {
    display: block;
  }
  .slick-active span {
    display: inline-block;
  }
`;

const StyledSlider = styled(Slider)`
  position: relative;
  display: flex;
  align-items: center;
  .slick-slide div {
    outline: none;
  }

  .slick-active.slick-center div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 994px;
    height: auto;
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    max-width: 100%;
    height: 100%;
    border-radius: 14px;
  }
`;

const ArrowPrev = styled(IoIosArrowBack)`
  color: ${color.white};
  cursor: pointer;
  z-index: 10;
  width: 13%;
  height: 20%;
  transition: color 300ms;
  /* .slick-arrow.slick-prev {
    left: 0%;
    top: 50%;
  } */
  &:hover {
    color: ${color.orange};
  }
`;

const ArrowNext = styled(IoIosArrowForward)`
  color: ${color.white};
  cursor: pointer;
  z-index: 10;
  width: 13%;
  height: 20%;
  transition: color 300ms;
  /* .slick-arrow.slick-next {
    right: 0%;
    top: 50%;
  } */
  &:hover {
    color: ${color.orange};
  }
`;
export default Curation;
