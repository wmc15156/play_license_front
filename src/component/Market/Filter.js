import styled from "styled-components";
import color from "../../../styles/colors";
import useModal from "../../../utils/useModal";
import FilterModal from "../Modal/FilterModal";
import Selector from "../Input/SelectOption";
import FilterBar from "../Input/Bar_ShowSeletedOptions";
import { useState } from "react";

const Filter = ({
  count,
  selectedOption,
  setOption,
  filterListHandler,
  sortListHandler,
}) => {
  const [filterValue, setFilterValue] = useState("선택해주세요");
  const { openModal, closeModal, ModalPortal } = useModal();

  return (
    <Container>
      <Row1>
        <Title>
          새로 등록된 작품<span>{count}개</span>
        </Title>
        <Wrapper>
          <Filtering onClick={openModal}>필터링 찾기</Filtering>
          <ModalPortal>
            <FilterModal
              closeModal={closeModal}
              filterListHandler={filterListHandler}
              selectedOption={selectedOption}
              setOption={setOption}
            />
          </ModalPortal>
          <Selector
            radius={"6px"}
            height={"48px"}
            value={filterValue}
            options={[
              "선택해주세요",
              "문의 많은 순",
              "최신 작품 순",
              "최신 등록 순",
            ]}
            onChange={(e) => {
              setFilterValue(e.target.value);
              sortListHandler(e.target.value);
            }}
          />
        </Wrapper>
      </Row1>
      <FilterBarSection>
        <FilterBar selectedOption={selectedOption} setOption={setOption} />
      </FilterBarSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row1 = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 24px;
  line-height: 48px;
  text-transform: uppercase;

  & > span {
    opacity: 0.3;
    margin-left: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 360px;
  margin-left: auto;
`;

const Filtering = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 20px);
  height: 48px;
  border-radius: 6px;
  border: 1px solid ${color.black5};
  padding-left: 20px;
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
`;

const FilterBarSection = styled.div`
  width: 100%;
`;

export default Filter;
