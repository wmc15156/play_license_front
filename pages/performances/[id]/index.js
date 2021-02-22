import styled from "styled-components";
import axios from "axios";
import PerformanceDetail from "../../../src/component/PerformanceDetail/PerformanceDetail";
import { API_URL } from "../../../config/API_URL";

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
  return <Container>{detail && <PerformanceDetail item={detail} />}</Container>;
};

export default Performance;
