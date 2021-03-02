import axios from "axios";
import styled from "styled-components";
import { useEffect, useContext } from "react";
import { HomeContext } from "../../../store/homeStore";
import HotItems from "./HotItems";

const Hot = () => {
  const [state, dispatch] = useContext(HomeContext);

  const getList = () => {
    axios.get("/curation/product").then((res) => {
      dispatch({ type: "fetchHotPerformances", hot: res.data.hot });
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      <HotItems list={state.hot} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 98px;
  margin-bottom: 102px;
`;

export default Hot;
