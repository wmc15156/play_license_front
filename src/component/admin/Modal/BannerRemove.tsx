import styled from "styled-components";
import colors from "@styles/colors";
import OriginalButton from "@src/component/Button/OriginalButton";
import { VFC } from "react";

const Wrapper = styled.div`
  width: 100%;
  max-width: 340px;
  height: 180px;
  background-color: ${colors.white};
  z-index: 1;
  border-radius: 14px;
  
  & > div {
    display: flex;
    width: 100%;
    max-width: 360px;
    justify-content: center;
  }
  
  & > div:first-child {
    width: 100%;
    max-width: 340px;
    display: flex;
    justify-content: center;
    margin-top: 44px;
  }

  & > div > span {
    font-family: "NotoSansCJKkr-Regular";
    font-size: 1.15rem;
  }
`;

type Props = {
  closeModal: () => void;
  onRemove: () => void;
  id?: number;
};

const BannerRemoveModal: VFC<Props> = ({ closeModal, onRemove, id }) => {
  return (
    <Wrapper>
      <div>
        <span>삭제하시겠습니까?</span>
      </div>
      <div>
        <OriginalButton
          width={"120px"}
          position={false}
          height={"40px"}
          size={"14px"}
          margin={"36px"}
          background={colors.black5}
          onClick={closeModal}
          fontColor={colors.black3}
          marginRight={'12px'}
        >
          아니오
        </OriginalButton>
        <OriginalButton
          width={"120px"}
          position={false}
          height={"40px"}
          size={"14px"}
          margin={"36px"}
          background={colors.orange}
          onClick={onRemove}
        >
          네
        </OriginalButton>
      </div>
    </Wrapper>
  );
};
export default BannerRemoveModal;
