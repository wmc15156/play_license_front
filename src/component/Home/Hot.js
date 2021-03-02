import axios from "axios";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import { HomeContext } from "../../../store/homeStore";
import HotItems from "./HotItems";
import Nothing from "./Nothing";

const Hot = () => {
  const [state, dispatch] = useContext(HomeContext);
  const [isExist, setIsExist] = useState(false);

  const getList = () => {
    axios
      .get("/curation/product")
      .then((res) => {
        if (Array.isArray(res.data.hot)) {
          if (res.data.hot.length > 0) {
            setIsExist(true);
            dispatch({ type: "fetchHotPerformances", hot: res.data.hot });
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
      {isExist && <HotItems list={state.hot} />}
      {!isExist && <Nothing title={"hot"} />}
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
