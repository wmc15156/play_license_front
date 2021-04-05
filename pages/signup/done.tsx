import ContainerWrapper from "@src/component/ContainerWrapper/TopToBottom";
import ProcessCircle from "@src/component/molecules/ProcessCircle/ProcessCircle";
import Comment from "@src/component/Comment/Comment";
import styled from "styled-components";
import OriginalButton from "@src/component/Button/OriginalButton";
import { useRouter } from "next/router";
import styles from "@styles/colors";
import { useCallback } from "react";
import { useHomeState } from "../../store/homeStore";

const PWrapper = styled.p`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-family: "FreightSansBlackSC";
  line-height: 45px;
`;

const DivWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  margin-top: 20px;
  color: ${styles.black3};
  font-family: "NotoSansCJKkr-Regular";
  cursor: pointer;
`;

function Done() {
  const router = useRouter();
  //
  const state = useHomeState();
  const { userName } = state;
  const onChangeMainPage = useCallback(() => {
    router.push("/");
  }, []);

  const onChangeLoginPage = useCallback(() => {
    router.push("/login");
  }, []);

  // if (!userName) {
  //   router.push("/signup/third");
  //   return;
  // }

  return (
    <ContainerWrapper width={"580px"}>
      <ProcessCircle process={4} lineWidth={"100px"} />
      <Comment font={"36px"} margin={"64px"}>
        <span>회원가입이 완료</span>되었습니다.
      </Comment>
      <PWrapper>
        {userName}님
        <br /> <span>PLAY LICENSE</span>에 오신걸 환영해요!
      </PWrapper>
      <OriginalButton
        margin={"64px"}
        width={"580px"}
        background={true}
        height={"60px"}
        size={"21px"}
        onClick={onChangeMainPage}
      >
        메인으로 돌아가기
      </OriginalButton>
      <DivWrapper onClick={onChangeLoginPage}>
        로그인/회원가입 전 페이지로 돌아가기
      </DivWrapper>
      <hr style={{ width: "220px", marginRight: "0px" }} />
    </ContainerWrapper>
  );
}
export default Done;
