import styled from "styled-components";
import Link from "next/link";

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  display: block;

  margin-bottom: 100px;
`;
const Slides = styled.div`
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

const Navi = styled.a`
  border-radius: 50%;
  border: 0.5px solid gray;
  width: 6px;
  height: 6px;
  display: inline-block;
  margin: 0 6px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Slider = () => (
  <SliderContainer>
    <Slides>
      <div name="slide-1" id="slide-1">
        {/* 요청으로 받은 이미지주소를 여기에 */}
        <Img src="/assets/image/carousel1.png" alt="" />
      </div>
      <div name="slide-2" id="slide-2">
        2
      </div>
      <div name="slide-3" id="slide-3">
        3
      </div>
      <div name="slide-4" id="slide-4">
        4
      </div>
      <div name="slide-5" id="slide-5">
        5
      </div>
    </Slides>
    <Link href="#slide-1" scroll={false}>
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
    </Link>
  </SliderContainer>
);

export default Slider;
