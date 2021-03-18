import styled from "styled-components";
import axios from "axios";
import PerformanceDetail from "../../../src/component/PerformanceDetail/PerformanceDetail";

export async function getServerSideProps(context) {
  // const performanceId = encodeURI(context.params.id);
  const performanceId = context.params.id;
  const url = `/product/info/${performanceId}`;
  const res = await axios.get(url);
  const data = res.data;
  return {
    props: { detail: data },
  };
}
const Performance = ({ detail }) => {
  console.log(detail, "작품디테일");
  return <Container>{detail && <PerformanceDetail item={detail} />}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Performance;
