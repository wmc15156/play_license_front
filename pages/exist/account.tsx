import ContainerWrapper from "@src/component/ContainerWrapper/TopToBottom";
import Comment from "@src/component/Comment/Comment";
import ShadowBox from "@src/component/ShadowBox/ShadowBox";
import OriginalButton from "@src/component/Button/OriginalButton";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { useCallback } from "react";
import axios from "axios";

function ExistAccount() {
  const router = useRouter();
  const { data, error } = useSWR("/auth/me", fetcher, {
    refreshInterval: 1000000,
  });

  const onChangeLoginPage = useCallback(() => {
    router.push("/login");
  }, []);

  if (data) {
    return router.push("/login");
  }

  return (
    <>
      <ContainerWrapper width={"580px"}>
        <Comment font={"24px"} margin={"152px"}>
          이 번호로&nbsp;<span>등록된 계정</span>이 있습니다
        </Comment>
        <ShadowBox margin={"64px"}>아이디(이메일) 찾기</ShadowBox>
        <ShadowBox margin={"20px"}>비밀번호 찾기</ShadowBox>
        <OriginalButton
          margin={"64px"}
          width={"580px"}
          background={true}
          height={"60px"}
          size={"21px"}
          onClick={onChangeLoginPage}
        >
          로그인 창으로 돌아가기
        </OriginalButton>
      </ContainerWrapper>
    </>
  );
}

export default ExistAccount;
