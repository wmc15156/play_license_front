import styled from "styled-components";
const CarouselImg = ({ img }) => {
  return <IMG src={img} />;
};
const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;
export default CarouselImg;
