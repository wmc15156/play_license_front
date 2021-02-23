import styled from "styled-components";
import stylesCuration from "../../../styles/Curation.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import image1 from "../../../public/assets/image/curation01.png";
import image2 from "../../../public/assets/image/carousel1.png";
import image3 from "../../../public/assets/image/carousel2.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import NextArrow from "../Button/NextArrow";
import PrevArrow from "../Button/PrevArrow";
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
  const [imageIdx, setImageIdx] = useState(0);
  // const [imageIdx2, setImageIdx2] = useState(0);

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };

  const settings = {
    infinite: true, // cycle
    lazyload: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    beforeChange: (current, next) => setImageIdx(next),
  };

  return (
    <>
      <Title>CURATION</Title>
      <Container>
        <div className={stylesCuration.container}>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div>
                <img
                  src={img}
                  alt={img}
                  style={idx === imageIdx ? activeStyles : defaultStyles}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 94px;
`;
const Title = styled.div`
  font-family: "Gotham Bold";
  font-size: 24px;
  line-height: 2;
  margin: 0 auto;
  max-width: 924px;
  margin-bottom: 70px;
  margin-top: 96px;
  padding: 0 1rem;
`;

const ArrowPrev = styled(IoIosArrowBack)`
  color: #fff;
  cursor: pointer;
  z-index: 10;
  width: 20%;
  height: 20%;
  transition: color 300ms;

  &:hover {
    color: #ff6f69;
  }
`;

const ArrowNext = styled(IoIosArrowForward)`
  color: #fff;
  cursor: pointer;
  z-index: 10;
  width: 20%;
  height: 20%;
  transition: color 300ms;

  &:hover {
    color: #ff6f69;
  }
`;
export default Curation;
