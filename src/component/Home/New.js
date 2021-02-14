import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import NewItems from "./NewItems";
import { API_URL } from "../../../config/API_URL";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Hot = () => {
  const [item, setItem] = useState([]);

  const getList = () => {
    axios.get(API_URL.home.newItems).then((res) => {
      setItem(res.data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      <NewItems list={item.slice(0, 6)} />
    </Container>
  );
};

export default Hot;
