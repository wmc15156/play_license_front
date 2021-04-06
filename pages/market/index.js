import { useState, useEffect } from "react";
import styled from "styled-components";
import color from "../../styles/colors";
import axios from "axios";
import List from "../../src/component/Market/List";
import Curation from "../../src/component/Curation/CurationBlocks";
import Pagination from "../../src/component/Pagination/Pagination";
import Loader from "../../src/component/Loader/Loader";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { useRouter } from "next/router";

const Market = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [sortName, setSortName] = useState("");
  const [curationBlock, setCurationBlock] = useState([]); // curation blocks
  const [count, setCount] = useState(0);
  const [curation, setCuration] = useState("모든작품");
  const [selectedOption, setOption] = useState({
    numberOfMembers: "",
    category: "",
    genre: "",
    sizeOfPerformance: "",
    mainAudience: "",
  });
  // console.log("선택된 필터옵션s>>", selectedOption);

  const getAllProducts = () => {
    setIsLoading(true);
    axios
      .get("/curation/filter", {
        params: {
          page: 1,
          q: "모든작품",
        },
      })
      .then((res) => {
        console.log(res.data, "jhereererer");
        setCount(res.data.count);
        setList(res.data.result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        setIsLoading(true);
        console.log(err.response);
      });
  };

  const getCurationInfo = (c) => {
    console.log("get 큐레이션", c);
    setIsLoading(true);
    axios
      .get("/curation/filter", {
        params: {
          page: 1,
          q: c,
        },
      })
      .then((res) => {
        setCount(res.data.count);
        setList(res.data.result);
        setIsLoading(false);
      });
  };

  const indexOfLast = currentPage * postsPerPage; // 16
  const indexOfFirst = indexOfLast - postsPerPage; // 0
  const showCurrentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts; // 한 페이지에 뿌릴 작품들
  };

  const getFilteredList = () => {
    console.log("필터된 리스트 가져오기 클릭", selectedOption);
    setIsLoading(true);
    axios
      .get("/product/filter", {
        params: selectedOption,
      })
      .then((res) => {
        if (res.status === 200) {
          // console.log(res, "???");
          setCount(res.data.length);
          setList(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err.response));
  };

  const getSortList = (sortName) => {
    console.log("sort통과 sortname", sortName);
    setIsLoading(true);
    if (!sortName) {
      sortName = "";
      getAllProducts();
    } else if (sortName) {
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

      console.log("sort통과 sortname", sortName);
      axios.get(`/product/filter/${sortName}`).then((res) => {
        setCount(res.data.length);
        setList(res.data);
        setIsLoading(false);
      });
    }
  };

  useEffect(() => {
    if (!!router.query.curation) {
      setCuration(router.query.curation);
    } else {
      setCuration("모든작품");
    }
    getCurationInfo(router.query.curation);
  }, [curation]);

  useEffect(() => {
    axios.get("/curation/product").then((res) => {
      if (res.data) {
        const first = ["모든작품"].concat(Object.keys(res.data.special));
        setCurationBlock((prevState) => prevState.concat(first));
      }
    });
  }, []);

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

  return (
    <Container>
      <Curation
        curation={curation}
        setCuration={setCuration}
        curationBlock={curationBlock}
      />
      {isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      {!isLoading && (
        <>
          <List
            listTitle={curation}
            list={showCurrentPosts(list)}
            count={count}
            sortListHandler={getSortList}
            filterListHandler={getFilteredList}
            selectedOption={selectedOption}
            setOption={setOption}
            sortName={sortName}
            setSortName={setSortName}
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
  height: calc(100vh - 467px);
  width: 100%;
`;

export default Market;
