import axios from "axios";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import NewItems from "./NewItems";
import {
  HomeContext,
  useGlobalDispatch,
  useHomeState,
} from "../../../store/homeStore";
import Nothing from "./Nothing";

const New = () => {
  const state = useHomeState();
  const dispatch = useGlobalDispatch();
  const [isExist, setIsExist] = useState(false);

  const getList = () => {
    axios
      .get("/curation/product")
      .then((res) => {
        if (Array.isArray(res.data.new)) {
          if (res.data.new.length > 0) {
            setIsExist(true);
            dispatch({
              type: "fetchNewPerformances",
              ...state,
              new: res.data.new,
            });
            return;
          } else {
            setIsExist(false);
            return;
          }
        } else {
          setIsExist(false);
          return;
        }
      })
      .catch((err) => {
        setIsExist(false);
        console.error(err);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      {isExist && <NewItems list={state.new} />}
      {!isExist && <Nothing title={"new"} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 170px;
`;

export default New;
