import styled from "styled-components";
import QnA_check from "../../src/component/Modal/Qna";
import QnA_modify from "../../src/component/Modal/Qna_modify";

import Btn from "../../src/component/Button/SignUpButton";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useModal from "../../utils/useModal";
import AlertModal from "../../src/component/Modal/AlertModal";

const DetailQnA = () => {
  const router = useRouter();
  const [detail, setDetail] = useState({});

  const next = () => {
    router.push("/mypage");
  };

  const getDetail = () => {
    const GET_URL = `question/${router.query.id}`;
    axios.get(GET_URL).then((res) => {
      console.log(res);
      setDetail(res.data);
    });
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Container>
      {detail.adminCheck && (
        <QnA_check details={detail} onClickHandler={next} />
      )}
      {!detail.adminCheck && (
        <QnA_modify details={detail} onClickHandler={next} />
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 790px;
  margin: 0 auto;
  padding: 0 1rem;
  font-family: "NotoSansCJKkr-Medium";
`;

export default DetailQnA;
