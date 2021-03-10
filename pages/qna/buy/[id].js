import styled from "styled-components";
import Purchase_check from "../../../src/component/Q&A/PurchaseQnA";
import Purchase_modify from "../../../src/component/Q&A/PurchaseQnA_modify";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";

const Detail_PurchaseRequest = () => {
  const router = useRouter();
  // api연결할 때 밑에 지우기
  const data = { adminCheck: true };
  // const { data } = useSWR(`/구매문의/${router.query.id}`, fetcher);
  // data에 공연목적 /교육목적 / 기타목적 구분할수있는게 있는지?

  const next = () => {
    router.push("/mypage/01");
  };

  return (
    <>
      {data && (
        <Container>
          {data.adminCheck && <Purchase_check onClickHandler={next} />}
          {!data.adminCheck && <Purchase_modify onClickHandler={next} />}
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

export default Detail_PurchaseRequest;
