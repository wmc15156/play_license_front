import styled from "styled-components";
import { Select } from "antd";
import useModal from "../../../utils/useModal";
import FilterModal from "../Modal/FilterModal";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "antd/dist/antd.css";

const Filter = () => {
  const { openModal, ModalPortal } = useModal();
  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Container>
      <Filtering onClick={openModal}>
        필터링 찾기
        <ArrowIcon />
      </Filtering>
      <ModalPortal>
        <FilterModal />
      </ModalPortal>

      <Sorting>
        <>
          <Select
            defaultValue="none"
            style={{ maxWidth: 174 }}
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
          </Select>
        </>
      </Sorting>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 380px;
  margin-left: auto;
`;

const ArrowIcon = styled(IoIosArrowDown)`
  color: #c8c8c8;
  width: 18px;
  height: 11px;
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
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
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

export default Filter;
