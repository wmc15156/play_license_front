import styled from "styled-components";
import color from "../../../styles/colors";
import useModal from "../../../utils/useModal";
import FilterModal from "../Modal/FilterModal";
import Selector from "../Input/SelectOption";
import FilterBar from "../Input/Bar_ShowSeletedOptions";
import { MdFilterList } from "react-icons/md";
import { useState } from "react";

const Filter = ({
  listTitle,
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
          {listTitle}
          <span>{count}개</span>
        </Title>
        <Wrapper>
          <Filtering onClick={openModal}>
            필터링 찾기
            <span>
              <MdFilterList size="18px" color={color.black4} />
            </span>
          </Filtering>
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
        <FilterBar
          selectedOption={selectedOption}
          setOption={setOption}
          filterListHandler={filterListHandler}
        />
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
  width: 50%;

  & > span {
    color: ${color.black3};
    margin-left: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  max-width: 360px;
  margin-left: auto;
`;

const Filtering = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 20px);
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${color.black5};
  padding-left: 20px;
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 16px;
  margin-right: 12px;
  & > span {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const FilterBarSection = styled.div`
  width: 100%;
`;

export default Filter;
