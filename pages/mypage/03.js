import styled from "styled-components";
import MyPageHeader from "../../src/component/MyPageHeader";
import QAList from "../../src/component/MyPage/QAList";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const pr = () => {
  const { data: userData, error: err } = useSWR("/auth/me", fetcher);
  const [currentId, setCurrentId] = useState(null);
  const router = useRouter();

  const onChangeId = (id) => {
    setCurrentId(id);
  };

  return (
    <Background>
      <HeadSection>
        <MyPageHeader />
      </HeadSection>
      <Container>
        <QAList currentId={currentId} onChangeId={onChangeId} />,
      </Container>
    </Background>
  );
};
const Background = styled.div`
  padding: 0 1rem;
`;

const HeadSection = styled.div``;

const Container = styled.div`
  max-width: 924px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default pr;
