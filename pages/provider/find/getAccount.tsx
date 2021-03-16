import ContainerWrapper from "@src/component/ContainerWrapper/ContainerWrapper";
import ProviderHeader from "@src/component/Provider/Header";
import Comment from "@src/component/Comment/Comment";
import { useHomeState } from "@store/homeStore";
import styles from "@styles/colors";
import ShadowBox from "@src/component/ShadowBox/ShadowBox";
import styled from "styled-components";
import OriginalButton from "@src/component/Button/OriginalButton";
import color from "@styles/colors";
import Link from "next/link";

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

const PasswordWrapper = styled.div`
  color: ${color.black3};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 22px;
  cursor: pointer;
`;

function GetAccount() {
  const state = useHomeState();
  const { userEmail, passwordCheck } = state;

  const passwordComment = () => {
    return (
      <Comment font={"24px"} margin={"0"}>
        회원님의 이메일로&nbsp;<span>임시 비밀번호</span>
        &nbsp;발송되었습니다.
      </Comment>
    );
  };

  return (
    <ContainerWrapper width={"580px"}>
      <ProviderHeader />
      <Comment font={"24px"} margin={"200px"}>
        {passwordCheck
          ? passwordComment()
          : "회원님의 이메일은 다음과 같습니다"}
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
        background={color.blue}
      >
        로그인 창으로 돌아가기
      </OriginalButton>
      <Link href={"/provider/find/password"}>
        <PasswordWrapper>
          <a>비밀번호 찾기</a>
        </PasswordWrapper>
      </Link>
    </ContainerWrapper>
  );
}

export default GetAccount;
