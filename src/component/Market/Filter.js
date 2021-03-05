import styled from "styled-components";
import { Select } from "antd";
import useModal from "../../../utils/useModal";
import FilterModal from "../Modal/FilterModal";
import "antd/dist/antd.css";

const Filter = () => {
  const { openModal, ModalPortal } = useModal();
  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Container>
      <Filtering onClick={openModal}>필터링 찾기</Filtering>
      <ModalPortal>
        <FilterModal />
      </ModalPortal>

      {/* <Sorting> */}
      <>
        <SelectBox
          defaultValue="none"
          dropdownStyle={{ borderRadius: 6 }}
          onChange={handleChange}
        >
          <Option value="none" style={{ fontSize: 16 }}>
            선택하세요
          </Option>
          <Option value="hot" style={{ fontSize: 16 }}>
            문의 많은 순
          </Option>
          <Option value="latest_work" style={{ fontSize: 16 }}>
            최신 작품 순
          </Option>
          <Option value="latest_regi" style={{ fontSize: 16 }}>
            최신 등록 순
          </Option>
        </SelectBox>
      </>
      {/* </Sorting> */}
    </Container>
  );
};

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

const SelectBox = styled(Select)`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  margin-left: 33px;
  /* -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #ffffff; */
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  line-height: 48px;
  opacity: 0.8;

  &:focus {
    color: #222;
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  .ant-select-selector {
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
`;

export default Filter;
