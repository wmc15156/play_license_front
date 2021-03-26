import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
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

const PL_QuestionDetail = () => {
  const router = useRouter();
  const [questionId, setQuestionId] = useState("");
  const [question, setQuestion] = useState({});
  const { openModal, ModalPortal, closeModal } = useModal();

  const getData = () => {
    console.log(router.query.id);
    axios
      .get(`/question/provider/${router.query.id}`)
      .then((res) => {
        console.log(res);
        setQuestion(res.data);
        setQuestionId(res.data.questionId);
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => getData(), []);

  const next = () => {
    router.push("/provider/question");
  };

  return (
    <>
      {Object.keys(question).length && (
        <Container>
          <NavContainer>
            <Navi />
          </NavContainer>
          <BodyContainer>
            <LogoBar />
            {question.adminCheck && <PL_CheckQnA data={question} next={next} />}
            {!question.adminCheck && (
              <PL_ModifyQnA data={question} next={next} id={questionId} />
            )}
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
