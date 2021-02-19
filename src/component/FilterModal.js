import styled from "styled-components";

const FilterModal = () => {
  console.log("필터모달창");
  return <Container>필터 모달입니다</Container>;
};

const Container = styled.div`
  width: 600px;
  height: 100%;
  background-color: #fff;
  z-index: 11;
`;

export default FilterModal;
