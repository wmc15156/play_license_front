import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <Arrow />
    </div>
  );
};

const Arrow = styled(IoIosArrowForward)`
  color: #fff;
  cursor: pointer;
  z-index: 10;
  width: 68px;
  height: 34px;
  transition: color 300ms;

  .arrow {
    color: #fff;
    position: absolute;
    cursor: pointer;
    z-index: 10;
  }

  .next {
    right: 0%;
    top: 50%;
  }

  &:hover {
    color: #ff6f69;
  }
`;
export default NextArrow;
