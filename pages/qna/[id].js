import styled from "styled-components";
import QnA_check from "../../src/component/Q&A/Qna";
import QnA_modify from "../../src/component/Q&A/Qna_modify";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const DetailQnA = () => {
  const router = useRouter();
  const { data } = useSWR(`/question/${router.query.id}`, fetcher);

  const next = () => {
    router.push("/mypage/03");
  };

  return (
    <>
      {data && (
        <Container>
          {data.adminCheck && <QnA_check onClickHandler={next} />}
          {!data.adminCheck && <QnA_modify onClickHandler={next} />}
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
