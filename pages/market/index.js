import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../../config/API_URL";
import List from "../../src/component/List";
import Category from "../../src/component/Category";
import Loader from "../../src/component/Loader";

const Market = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);

  const getList = () => {
    axios.get(API_URL.market.allItems).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getList();
  });

  return (
    <Container>
      {/* category */}
      <Category />
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
