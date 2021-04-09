import styled from "styled-components";
import color from "../../../styles/colors";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalDispatch, useHomeState } from "../../../store/homeStore";
import image2 from "../../../public/assets/image/carousel1.png";
import image3 from "../../../public/assets/image/carousel2.png";
import { useRouter } from "next/router";

const images = [
  { img: image2, link: `/about` },
  { img: image3, link: `/market` },
];
const defaultStyles = {
  borderRadius: "50%",
  background: color.black1,
  opacity: 0.4,
  width: "0.5rem",
  height: "0.5rem",
};
const focusStyles = {
  // focus
  borderRadius: "50%",
  width: "0.5rem",
  height: "0.5rem",
  background: color.orange,
};
const activeImgStyles = {
  transition: "opacity 3s ease",
  opacity: 1,
  cursor: "pointer",
};
const defaultImgStyles = {
  transition: "opacity 3s ease",
  opacity: 0.2,
};

const Carousel = () => {
  const router = useRouter();
  const state = useHomeState();
  const dispatch = useGlobalDispatch();
  const [isExist, setIsExist] = useState(true);
  const [imageIdx, setImageIdx] = useState(0);

  // const getList = () => {
  //   axios
  //     .get("/curation/product")
  //     .then((res) => {
  //       console.log(res);
  //       if (Array.isArray(res.data.banner)) {
  //         if (res.data.banner.length > 0) {
  //           setIsExist(true);
  //           dispatch({ type: "fetchBannerImages", banners: res.data.banner });
  //           return;
  //         } else {
  //           setIsExist(false);
  //           return;
  //         }
  //       } else {
  //         setIsExist(false);
  //         return;
  //       }
  //     })
  //     .catch((err) => {
  //       setIsExist(false);
  //       console.log(err.response);
  //     });
  // };

  // useEffect(() => {
  //   getList();
  // }, []);

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

  const onClickImage = (href) => {
    router.push(href);
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {/* API 완성 후 images 응답데이터 객체로 변경 */}
        {isExist &&
          images.map((img, idx) => (
            <div key={idx}>
              <ImageContainer>
                <img
                  src={img.img}
                  alt={img.img}
                  style={idx === imageIdx ? activeImgStyles : defaultImgStyles}
                  onClick={() => onClickImage(img.link)}
                />
              </ImageContainer>
            </div>
          ))}
        {/* {!isExist && images.map((img, idx) => (
          <div key={idx}>
            <ImageContainer>
              <img
                src={img.img}
                alt={img.img}
                style={idx === imageIdx ? activeImgStyles : defaultImgStyles}
                onClick={() => onClickImage(img.link)}
              />
            </ImageContainer>
          </div>
        ))} */}
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
  height: auto;
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: auto;
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

  .slick-dots li {
    bottom: -20px;
  }
`;

export default Carousel;
