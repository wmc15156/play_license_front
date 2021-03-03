import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import List from "../../src/component/Market/List";
import Curation from "../../src/component/Curation/CurationBlocks";
import Loader from "../../src/component/Loader";

const Market = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  const getList = () => {
    axios.get(API_URL.market.allItems).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    // getList();
  });

  return (
    <Container>
      {/* category */}
      <Curation />
      {isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      {!isLoading && <List list={list} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

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
