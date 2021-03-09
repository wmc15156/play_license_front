import styled from "styled-components";
import { useState, memo } from "react";

const EmailType = ({ type }) => {
  // let initialStatus;
  // if (type === "google") {
  //   console.log("통과local", type);
  //   initialStatus = "google";
  // } else if (type === "naver") {
  //   console.log("통과naver");
  //   initialStatus = "naver";
  // } else if (type === "kakao") {
  //   console.log("통과kko");
  //   initialStatus = "kakao";
  // } else if (type === "local") {
  //   console.log("통과pl");
  //   initialStatus = "PL";
  // }

  // const [status, setStatus] = useState(initialStatus);

  return (
    <Container>
      <Box src={`/assets/image/MP_${type} login.png`} alt={type} />
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  height: 30px;
`;

const Box = styled.img`
  width: 104px;
  height: 28px;
`;

export default memo(EmailType);
