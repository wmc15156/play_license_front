import styled from "styled-components";
import QnA_check from "../../src/component/Q&A/Qna";
import QnA_modify from "../../src/component/Q&A/Qna_modify";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { useState } from "react";

const DetailQnA = () => {
  const router = useRouter();
  const { data } = useSWR(`/question/${router.query.id}`, fetcher);
  const [detail, setDetail] = useState({});

  const next = () => {
    router.push("/mypage");
  };

  return (
    <>
      {data && (
        <Container>
          {detail.adminCheck && (
            <QnA_check details={detail} onClickHandler={next} />
          )}
          {!detail.adminCheck && (
            <QnA_modify details={detail} onClickHandler={next} />
          )}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  max-width: 790px;
  margin: 0 auto;
  padding: 0 1rem;
  font-family: "NotoSansCJKkr-Medium";
`;

export default DetailQnA;
