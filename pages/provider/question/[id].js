import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";
import PL_CheckQnA from "../../../src/PL_Component/Question/CheckQnA";
import PL_ModifyQnA from "../../../src/PL_Component/Question/ModifyQnA";
import Btn_left from "../../../src/component/Button/GrayShortBtn";
import Btn_right from "../../../src/component/Button/OriginalButton";
import useModal from "../../../utils/useModal";
import AlertModal from "../../../src/component/Modal/AlertModal";

const data = {
  adminCheck: true,
  name: "상상마루",
  email: "abcde@naver.com",
  phone: "010-1234-5678",
  title: "작품판매에 관련하여 궁금한 점이 있습니다",
  comment: `현재 플레이라이선스에서 작품을 판매할 때
  해당사항이
  감사합니다`,
};

// export async function getServerSideProps(context) {
//   const id = context.params.id;
//   const url = `/question/provider/${id}`;
//   const res = await axios.get(url);
//   const respData = res.data;
//   return {
//     props: { data: respData },
//   };
// }

const PL_QuestionDetail = ({}) => {
  const router = useRouter();
  const { openModal, ModalPortal, closeModal } = useModal();
  const next = () => {
    router.push("/provider/question");
  };
  return (
    <>
      {data && (
        <Container>
          <NavContainer>
            <Navi />
          </NavContainer>
          <BodyContainer>
            <LogoBar />
            {data.adminCheck && <PL_CheckQnA data={data} next={next} />}
            {!data.adminCheck && <PL_ModifyQnA data={data} next={next} />}
          </BodyContainer>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  ${PageContainer};
`;

const NavContainer = styled.div`
  width: 220px;
`;

const BodyContainer = styled.div`
  flex-direction: column;
  ${PageContentContainer};
  height: 100%;
`;

export default PL_QuestionDetail;
