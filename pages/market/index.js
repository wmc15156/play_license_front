import { useState, useEffect } from "react";
import styled from "styled-components";
import color from "../../styles/colors";
import axios from "axios";
import List from "../../src/component/Market/List";
import Curation from "../../src/component/Curation/CurationBlocks";
import Loader from "../../src/component/Loader";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const Market = () => {
  const { data, error, mutate } = useSWR("/curation/product", fetcher);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [curation, setCuration] = useState([]); // curation blocks
  const [count, setCount] = useState(0);
  const [selectedOption, setOption] = useState({
    numberOfMembers: "", // 출연인원
    category: "",
    genre: "",
    sizeOfPerformance: "",
    mainAudience: "",
  });
  // console.log("선택된 필터옵션s>>", selectedOption);

  useEffect(() => {
    if (data) {
      const first = ["모든작품"].concat(Object.keys(data.special));
      setCuration((prevState) => prevState.concat(first));
    }
  }, [data]);

  useEffect(() => {
    axios
      .get("/curation/filter", {
        params: {
          page: 1,
          q: "모든작품",
        },
      })
      .then((res) => {
        setCount(res.data.count);
        setList(res.data.result);
      });
  }, []);

  const getFilteredList = () => {
    console.log("필터된 리스트 가져오기 클릭", selectedOption);
  };

  const getSortList = (sortName) => {
    if (!(sortName === "선택해주세요")) {
      console.log("sort 선택된 항목이름", sortName);
      // axios
      //   .get("", {
      //     params: {
      //       page: 1,
      //       q: sortName,
      //     },
      //   })
      //   .then((res) => {
      //     setCount(res.data.count);
      //     setList(res.data.result);
      //   });
    }
  };

  const getCurationInfo = (curation) => {
    axios
      .get("/curation/filter", {
        params: {
          page: 1,
          q: curation,
        },
      })
      .then((res) => {
        setCount(res.data.count);
        setList(res.data.result);
      });
  };

  if (!data) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      {data && (
        <>
          <Curation curation={curation} getCurationInfo={getCurationInfo} />
          <List
            list={list}
            count={count}
            sortListHandler={getSortList}
            filterListHandler={getFilteredList}
            selectedOption={selectedOption}
            setOption={setOption}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 924px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default Market;
