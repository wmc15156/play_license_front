import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <Arrow />
    </div>
  );
};

const Arrow = styled(IoIosArrowBack)`
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
  .prev {
    left: 0%;
    top: 50%;
  }

  &:hover {
    color: #68edff;
  }
`;

export default PrevArrow;
