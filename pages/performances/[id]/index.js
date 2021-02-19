import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PerformanceDetail from "../../../src/component/Detail/PerformanceDetail";
import { API_URL } from "../../../config/API_URL";
import Loader from "../../../src/component/Loader";

const LoaderContainer = styled.div`
  /* align-items: center; */
`;
const Container = styled.div`
  max-width: 924px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export async function getServerSideProps(context) {
  const performanceId = context.params.id;
  const url = `${API_URL.market.item}/${performanceId}.json`;
  const res = await axios.get(url);
  const data = res.data;
  return {
    props: { detail: data }, // will be passed to the page component as props
  };
}

const Performance = ({ detail }) => {
  // const [item, setItem] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();
  // const { id } = router.query;

  // const getData = () => {
  //   axios.get(`${API_URL.market.item}/${id}.json`).then((res) => {
  //     // console.log(res.data);
  //     setItem(res.data);
  //     setIsLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData();
  //   }
  // }, []);

  return (
    <Container>
      {/* 공연 ID: {id} */}
      {/* {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : ( */}
      {detail && <PerformanceDetail item={detail} />}
      {/* )} */}
    </Container>
  );
};

export default Performance;
