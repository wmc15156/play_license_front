import axios from "axios";
import styled from "styled-components";
import { useEffect, useContext } from "react";
import NewItems from "./NewItems";
import { HomeContext } from "../../../store/homeStore";

const Hot = () => {
  const [state, dispatch] = useContext(HomeContext);

  const getList = () => {
    axios.get("/curation/product").then((res) => {
      dispatch({ type: "fetchNewPerformances", ...state, new: res.data.new });
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      <NewItems list={state.new} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 105px;
  margin-bottom: 170px;
`;

export default Hot;
