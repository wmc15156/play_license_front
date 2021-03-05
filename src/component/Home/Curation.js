import styled from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import { useEffect, useContext } from "react";
import {
  HomeContext,
  useGlobalDispatch,
  useHomeState,
} from "../../../store/homeStore";
import image1 from "../../../public/assets/image/curation01.png";
import image2 from "../../../public/assets/image/carousel1.png";
import image3 from "../../../public/assets/image/carousel2.png";
import ShowAll from "../Button/ShowAll";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const images = [image1, image2, image3, image2];

const defaultStyles = {
  transform: "scale(0.5)",
  transition: "transform 2s ease",
  opacity: 0.7,
};
const activeStyles = {
  transform: "scale(1.0)",
  transition: "transform 2s ease",
  opacity: 1,
};

const Curation = () => {
  const { data, error } = useSWR("/curation/product", fetcher, {
    dedupingInterval: 100000,
  });

  let curation = null;
  let keyArr = null;

  const [imageIdx, setImageIdx] = useState(0);
  const [keyArray, setKeyArray] = useState([]);

  const Arrow_Next = ({ currentSlide, slideCount, ...props }) => (
    <ArrowNext {...props} />
  );
  const Arrow_Prev = ({ currentSlide, slideCount, ...props }) => (
    <ArrowPrev {...props} />
  );

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
    centerPadding: "15%",
    nextArrow: <Arrow_Next />,
    prevArrow: <Arrow_Prev />,
    beforeChange: (current, next) => setImageIdx(next),
  };
  console.log(keyArray, ";test");
  return (
    <Container>
      <HeadSection>
        <Title>CURATION</Title>
        <ShowAll text={"모두보기"} path={"/"} />
      </HeadSection>
      <SliderContainer>
        <StyledSlider {...settings}>
          {keyArr.map((keyName, idx) => {
            return (
              <div key={idx}>
                <ImageContainer>
                  <Overlay />
                  <TextContainer>
                    <Text1>[{curation[keyName][0].productTitle}] 등</Text1>
                    <Text2>{keyName}에 추천해요!</Text2>
                    <Text3>{curation[keyName].length}개의 작품 보기</Text3>
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
          {images.map((img, idx) => (
            <div key={idx}>
              <ImageContainer>
                {/* <Overlay /> */}
                <TextContainer>
                  <Text1>[{}] 등</Text1>
                  <Text2>{}에 추천해요!</Text2>
                  <Text3>{}개의 작품 보기</Text3>
                </TextContainer>
                <img
                  src={img}
                  alt={img}
                  style={idx === imageIdx ? activeStyles : defaultStyles}
                />
              </ImageContainer>
            </div>
          ))}
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
  max-width: 924px;
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
  line-height: 2;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  z-index: 10;
  background-color: ${color.black1};
  opacity: 0.6;
  position: absolute;
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

const Text3 = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  letter-spacing: -0.5px;
  line-height: 30px;
  text-align: center;
  padding: 8px 21px;
  color: #000;
  background-color: ${color.white};
  border-radius: 25px;
`;

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

const StyledSlider = styled(Slider)`
  position: relative;
  display: flex;
  align-items: center;
  .slick-slide div {
    outline: none;
  }
  .slick-active :not(.slick-center) div {
    /* transform: scale(0.5); */
    background-color: blue;
  }
  .slick-active.slick-center div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: pink; */
    max-width: 924px;
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
  width: 20%;
  height: 20%;
  transition: color 300ms;
  .slick-arrow.slick-prev {
    left: 0%;
    top: 50%;
  }
  &:hover {
    color: ${color.orange};
  }
`;

const ArrowNext = styled(IoIosArrowForward)`
  color: ${color.white};
  cursor: pointer;
  z-index: 10;
  width: 20%;
  height: 20%;
  transition: color 300ms;
  .slick-arrow.slick-next {
    right: 0%;
    top: 50%;
  }
  &:hover {
    color: ${color.orange};
  }
`;
export default Curation;
