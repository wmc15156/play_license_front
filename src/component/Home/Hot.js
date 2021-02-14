import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import HotItems from "./HotItems";
import { API_URL } from "../../../config/API_URL";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Hot = () => {
  const [item, setItem] = useState([]);

  const getList = () => {
    axios.get(API_URL.home.hotItems).then((res) => {
      setItem(res.data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      <HotItems list={item.slice(0, 5)} />
    </Container>
  );
};

export default Hot;
