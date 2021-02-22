import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const TOTAL_IMG = 3;
const Slider = () => {
  const [show, setShow] = useState(0);
  const imgRef = useRef(null);

  const nextImg = () => {
    if (show >= TOTAL_IMG - 1) {
      setShow(0);
    } else {
      setShow(show + 1);
    }
  };

  const images = {
    0: <Img src="/assets/image/carousel1.png" alt="" />,
    1: <Img src="/assets/image/carousel2.png" alt="" />,
    2: <Img src="/assets/image/carousel1.png" alt="" />,
  };

  const switchImg = (e) => {
    setShow(e.target.attributes[0].value);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("실행");
      nextImg();
      // imgRef.current.style.transform = `translateX(-${show}00%)`;
      imgRef.current.style.transition = "all 1s ease-in-out";
    }, 3000);
  }, [show]);

  return (
    <SliderContainer>
      <Slides ref={imgRef}>
        {images[show]}
        {/* <div name="slide-1" id="slide-1"> 
          <Img src="/assets/image/carousel1.png" alt="" />
        </div>
        <div name="slide-2" id="slide-2">
          <Img src="/assets/image/carousel2.png" alt="" />
        </div>
        <div name="slide-3" id="slide-3">
          <Img src="/assets/image/carousel1.png" alt="" />
        </div> */}
      </Slides>
      <Navi name={0} currImage={show} onClick={switchImg}></Navi>
      <Navi name={1} currImage={show} onClick={switchImg}></Navi>
      <Navi name={2} currImage={show} onClick={switchImg}></Navi>
      {/* <Link href="#slide-1" scroll={false}>
        <Navi></Navi>
      </Link>
      <Link href="#slide-2" scroll={false}>
        <Navi></Navi>
      </Link>
      <Link href="#slide-3" scroll={false}>
        <Navi></Navi>
      </Link>
      <Link href="#slide-4" scroll={false}>
        <Navi></Navi>
      </Link>
      <Link href="#slide-5" scroll={false}>
        <Navi></Navi>
      </Link> */}
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: block;
  margin-bottom: 100px;
`;
const Slides = styled.div`
  border-radius: 14px;
  display: flex;
  margin-bottom: 30px;

  overflow-x: auto;
  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  & > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    margin-right: 50px;
    border-radius: 10px;
    background: #eee;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  & > div:target {
    /*   transform: scale(0.8); */
  }
`;

const Navi = styled.div`
  border-radius: 50%;
  border: 0.5px solid gray;
  width: 6px;
  height: 6px;
  display: inline-block;
  margin: 0 6px;
  background: ${(props) => {
    if (Number(props.currImage) === props.name) {
      return "gray";
    } else {
      return "#fff";
    }
  }};
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default Slider;
