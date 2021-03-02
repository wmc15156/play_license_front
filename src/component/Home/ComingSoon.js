import axios from "axios";
import styled from "styled-components";
import { useEffect, useContext } from "react";
import { HomeContext } from "../../../store/homeStore";
import UpcomingItems from "./UpcomingItems";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 140px;
  margin-bottom: 117px;
`;

const ComingSoon = () => {
  const [state, dispatch] = useContext(HomeContext);

  const getList = () => {
    axios.get("/curation/product").then((res) => {
      dispatch({ type: "fetchComingSoon", coming: res.data.coming });
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      {/* <UpcomingItems list={state.coming.slice(0, 6)} /> */}
      <UpcomingItems list={state.new.slice(0, 6)} />
    </Container>
  );
};

export default ComingSoon;
