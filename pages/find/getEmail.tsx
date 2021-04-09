 import ContainerWrapper from "@src/component/ContainerWrapper/TopToBottom";
import Comment from "@src/component/Comment/Comment";
import ShadowBox from "@src/component/ShadowBox/ShadowBox";
import { useHomeState } from "@store/homeStore";
import { useRouter } from "next/router";
import styles from "@styles/colors";
import { useEffect } from "react";
import styled from "styled-components";
import OriginalButton from "@src/component/Button/OriginalButton";

const DivWrapper = styled.div`
  width: 100%;
  font-family: "NotoSansCJKkr-Regular";
  color: ${styles.black3};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 16px;
  margin-top: 24px;
`;

const getEmail = () => {
  const state = useHomeState();
  const router = useRouter();
  const { userEmail, passwordCheck } = state;

  useEffect(() => {
    if (!userEmail) {
      router.push("/login");
    }
  });

  const onChangePage = () => {
    router.push("/login");
  };

  const passwordComment = () => {
    return (
      <Comment font={"24px"} margin={"0"}>
        회원님의 아이디(이메일)로&nbsp;<span>임시 비밀번호</span>
        &nbsp;발송되었습니다.
      </Comment>
    );
  };
  return (
    <ContainerWrapper width={"580px"}>
      <Comment font={"24px"} margin={"155px"}>
        {passwordCheck
          ? passwordComment()
          : "회원님의 아이디(이메일)은 다음과 같습니다"}
      </Comment>
      <ShadowBox margin={"64px"} color={styles.orange}>
        {userEmail}
      </ShadowBox>
      {passwordCheck && (
        <DivWrapper>해당 이메일의 수신함을 확인해주세요!</DivWrapper>
      )}
      <OriginalButton
        width={"100%"}
        position={false}
        height={"60px"}
        size={"21px"}
        margin={"64px"}
        background={true}
        onClick={onChangePage}
      >
        로그인 창으로 돌아가기
      </OriginalButton>
    </ContainerWrapper>
  );
};

export default getEmail;
