import styled from "styled-components";

const Filter = () => {
  return (
    <Container>
      <Filtering>필터링 찾기</Filtering>
      <Sorting>
        <Select id="sort" name="sort">
          <option value="">선택하세요</option>
          <option value="mango">문의 많은 순</option>
          <option value="melon">최신 순</option>
        </Select>
      </Sorting>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  display: flex;
  width: 380px;
  margin-left: auto;
`;
const Filtering = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  padding-left: 20px;
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 48px;
  opacity: 0.8;
`;

const Sorting = styled.form`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  margin-left: 33px;
`;

const Select = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  padding-left: 20px;
  background-color: #ffffff;
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 48px;
  opacity: 0.8;

  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: none;

  &:focus {
    color: #222;
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
