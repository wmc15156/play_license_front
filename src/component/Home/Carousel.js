import styled from "styled-components";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image2 from "../../../public/assets/image/carousel1.png";
import image3 from "../../../public/assets/image/carousel2.png";

const images = [image2, image3, image2, image3];
const defaultStyles = {
  borderRadius: "50%",
  background: "#000000",
  opacity: 0.4,
  width: "0.5rem",
  height: "0.5rem",
};
const focusStyles = {
  // focus
  borderRadius: "50%",
  width: "0.5rem",
  height: "0.5rem",
  background: "#ff6f69",
};
const activeImgStyles = {
  transition: "opacity 3s ease",
  opacity: 1,
};
const defaultImgStyles = {
  transition: "opacity 3s ease",
  opacity: 0.2,
};

const Carousel = () => {
  const [imageIdx, setImageIdx] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: 0,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setImageIdx(next),
    appendDots: (dots) => {
      return (
        <div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {dots.map((item, idx) => {
              return (
                <li
                  style={{
                    margin: "0 6px",
                    display: "flex",
                  }}
                  key={idx}
                >
                  {item.props.children}
                </li>
              );
            })}
          </ul>
        </div>
      );
    },
    customPaging: (i) => {
      return <div style={i === imageIdx ? focusStyles : defaultStyles}></div>;
    },
  };
  return (
    <Container>
      <StyledSlider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <ImageContainer>
              <img
                src={img}
                alt={img}
                style={idx === imageIdx ? activeImgStyles : defaultImgStyles}
              />
            </ImageContainer>
          </div>
        ))}
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 924px;
  padding: 0 1rem;
  height: auto;
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;
  & > img {
    width: 100%;
    height: auto;
    border-radius: 14px;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

export default Carousel;
