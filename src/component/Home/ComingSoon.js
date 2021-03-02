import axios from "axios";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import { HomeContext } from "../../../store/homeStore";
import UpcomingItems from "./UpcomingItems";
import Nothing from "./Nothing";

const ComingSoon = () => {
  const [state, dispatch] = useContext(HomeContext);
  const [isExist, setIsExist] = useState(false);

  const getList = () => {
    axios
      .get("/curation/product")
      .then((res) => {
        if (Array.isArray(res.data.coming)) {
          if (res.data.coming.length > 0) {
            setIsExist(true);
            dispatch({ type: "fetchComingSoon", coming: res.data.coming });
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
      {isExist && <UpcomingItems list={state.coming} />}
      {!isExist && <Nothing title={"coming soon"} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 140px;
  margin-bottom: 117px;
`;

export default ComingSoon;
