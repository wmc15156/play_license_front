import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import List from "../../src/component/Market/List";
import Curation from "../../src/component/Curation/CurationBlocks";
import Loader from "../../src/component/Loader";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const Market = (props) => {
  const { data, error, mutate } = useSWR("/curation/product", fetcher);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [curation, setCuration] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (data) {
      const first = ["모든작품"].concat(Object.keys(data.special));
      setCuration((prevState) => prevState.concat(first));
    }
  }, [data]);

  useEffect(() => {
    axios
      .get("/curation/filter", {
        params: {
          page: 1,
          q: "모든작품",
        },
      })
      .then((res) => {
        setCount(res.data.count);
        setList(res.data.result);
      });
  }, []);

  const getCurationInfo = (curation) => {
    axios
      .get("/curation/filter", {
        params: {
          page: 1,
          q: curation,
        },
      })
      .then((res) => {
        setCount(res.data.count);
        setList(res.data.result);
      });
  };

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      {/* category */}
      <Curation curation={curation} getCurationInfo={getCurationInfo} />
      {isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      {!isLoading && <List list={list} count={count} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  max-width: 924px;
  margin: 0 auto;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default Market;
