import styled from "styled-components";
import Purchase_check from "../../../../src/component/Q&A/PurchaseQnA";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../../../utils/fetcher";

const Detail_PurchaseRequest = () => {
  const router = useRouter();
  const URL = `/user/inquiry/${
    router.query.category === "공연목적" ? "performance" : "education"
  }/${router.query.id}`;
  const { data } = useSWR(URL, fetcher);

  const next = () => {
    router.push("/mypage/01");
  };

  console.log(data);

  return (
    <>
      {data && (
        <Container>
          <Purchase_check data={data} onClickHandler={next} />
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
