import styled from "styled-components";
import color from "../../../../styles/colors";
import { FaCheck } from "react-icons/fa";
import CheckBoxWrapper from "../../../../src/component/CheckBoxWrapper/CheckBoxWrapper";
import { useRouter } from "next/router";
import { useState } from "react";
import Group from "../../../../src/component/Form/Group";
import PerformanceInfo from "../../../../src/component/Form/PerformanceInfo";
import UserInfo from "../../../../src/component/Form/UserInfo";
import Notice from "../../../../src/component/GrayNotice";
import Btn from "../../../../src/component/Button/SignUpButton";
import useModal from "../../../../utils/useModal";
import AlertModal from "../../../../src/component/Modal/AlertModal";

const notice = {
  title: "안내사항",
  body1: "1. 최종 제공 자료는 협의 후 달라질 수 있습니다.",
  body2:
    "2. 협의되지 않은 자료의 복사, 활용은 저작권 침해로 법적 책임을 질 수 있습니다.",
};

const Etc = ({ image }) => {
  const router = useRouter();
  const { openModal, ModalPortal, closeModal } = useModal();
  const [checked, setChecked] = useState(false);

  const next = () => {
    router.push(`/performances/${router.query.id}/buy/complete`);
  };
  const handleChange = (e) => {
    e.persist();
    setChecked((prevState) => !prevState);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!checked) {
      // alert("개인정보 수집 및 이용에 동의해주세요.");
      openModal();
      return;
    }
    next();
  };

  return (
    <Container>
      <HeadSection>
        <T1>작품 구매를 위해 구매문의를 작성해주세요</T1>
        <T2>
          <span>구매정보</span>를 작성해주세요
        </T2>
        <Num>2/2</Num>
      </HeadSection>
      <Divider>
        <Div1 />
      </Divider>
      <BoxSection>
        <Wrap>
          <Group />
        </Wrap>
        <Wrap>
          <PerformanceInfo text={"사용목적"} />
        </Wrap>
        <Wrap>
          <UserInfo />
        </Wrap>
      </BoxSection>
      <Notice title={notice.title} body1={notice.body1} body2={notice.body2} />
      <CheckSection>
        <CheckBoxWrapper
          width={"24px"}
          height={"24px"}
          onChange={handleChange}
          value={checked}
        >
          <FaCheck size={"15px"} color={checked ? "white" : "gray"} />
        </CheckBoxWrapper>
        <Check>안내사항을 확인했습니다</Check>
      </CheckSection>
      <BtnSection>
        <Btn text={"구매문의 완료하기"} onClickHandler={onSubmitHandler} />
      </BtnSection>
      <ModalPortal>
        <AlertModal text={"내용을 모두 입력해주세요"} onClickBtn={closeModal} />
      </ModalPortal>
    </Container>
  );
};

const Container = styled.div`
  max-width: 790px;
  padding: 0 1rem;
  margin: 0 auto;
  font-family: "NotoSansCJKkr-Medium";
  margin-bottom: 143px;
`;

const HeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const T1 = styled.div`
  color: ${color.black3};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
`;
const T2 = styled.div`
  font-size: 24px;
  line-height: 26px;

  & > span {
    color: ${color.orange};
  }
`;
const Num = styled.div`
  margin-left: auto;
  line-height: 28px;
  font-size: 14px;
`;
const Divider = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`;

const Div1 = styled.div`
  background-color: ${color.yellow};
  border-radius: 100px;
  height: 3px;
  width: 100%;
`;
const BoxSection = styled.div`
  height: 100%;
`;
const Wrap = styled.div`
  margin-bottom: 30px;
`;
const CheckSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 33px;
`;
const Check = styled.div``;
const BtnSection = styled.div`
  margin-top: 44px;
`;
export default Etc;
