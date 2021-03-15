import { useState, useEffect } from "react";
import styled from "styled-components";
import color from "../../styles/colors";
import axios from "axios";
import List from "../../src/component/Market/List";
import Curation from "../../src/component/Curation/CurationBlocks";
import Pagination from "../../src/component/Pagination/Pagination";
import Loader from "../../src/component/Loader";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { useRouter } from "next/router";

const Market = () => {
  const router = useRouter();
  const { data, error, mutate } = useSWR("/curation/product", fetcher);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [curation, setCuration] = useState([]); // curation blocks
  const [count, setCount] = useState(0);
  const [selectedOption, setOption] = useState({
    numberOfMembers: "",
    category: "",
    genre: "",
    sizeOfPerformance: "",
    mainAudience: "",
  });
  // console.log("선택된 필터옵션s>>", selectedOption);

  const getAllProducts = () => {
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
  };
  useEffect(() => {
    if (data) {
      const first = ["모든작품"].concat(Object.keys(data.special));
      setCuration((prevState) => prevState.concat(first));
    }
  }, [data]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const indexOfLast = currentPage * postsPerPage; // 16
  const indexOfFirst = indexOfLast - postsPerPage; // 0
  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts; // 한 페이지에 뿌릴 작품들
  };

  useEffect(() => {
    const {
      numberOfMembers,
      category,
      genre,
      sizeOfPerformance,
      mainAudience,
    } = selectedOption;
    if (
      numberOfMembers.length ||
      category.length ||
      genre.length ||
      sizeOfPerformance.length ||
      mainAudience.length
    ) {
      getFilteredList();
    } else if (
      numberOfMembers === "" &&
      category === "" &&
      genre === "" &&
      sizeOfPerformance === "" &&
      mainAudience === ""
    ) {
      getAllProducts();
    }
  }, [selectedOption]);

  const getFilteredList = () => {
    console.log("필터된 리스트 가져오기 클릭", selectedOption);
    axios
      .get("/product/filter", {
        params: selectedOption,
      })
      .then((res) => {
        console.log(res, "???");
        setCount(res.data.length);
        setList(res.data);
      });
  };

  const getSortList = (sortName) => {
    if (!(sortName === "선택해주세요")) {
      switch (sortName) {
        case "문의 많은 순":
          sortName = "inquiry";
          break;
        case "최신 등록 순":
          sortName = "register";
          break;
        case "최신 작품 순":
          sortName = "latest";
          break;
      }

      // console.log("sort 선택된 항목이름", sortName);
      axios.get(`/product/filter/${sortName}`).then((res) => {
        setCount(res.data.length);
        setList(res.data);
      });
    }
  };

  const getCurationInfo = () => {
    axios
      .get("/curation/filter", {
        params: {
          page: 1,
          q: router.query.curation,
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
            list={showCurrentPosts(list)}
            count={count}
            sortListHandler={getSortList}
            filterListHandler={getFilteredList}
            selectedOption={selectedOption}
            setOption={setOption}
          />
          <Pagination
            itemsPerPage={postsPerPage}
            totalItems={list.length}
            paginate={setCurrentPage}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 135px;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default Market;
