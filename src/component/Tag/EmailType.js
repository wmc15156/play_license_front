import styled from "styled-components";
import color from "../../../styles/colors";
import { useState } from "react";

const EmailType = ({ type }) => {
  let initialStatus;

  if (type.includes("google")) {
    initialStatus = "google";
  } else if (type.includes("naver")) {
    initialStatus = "naver";
  } else if (type.includes("kakao")) {
    initialStatus = "kakao";
  } else {
    initialStatus = "PL";
  }

  const [status, setStatus] = useState(initialStatus);

  return (
    <Container>
      <Box src={`/assets/image/MP_${status} login.png`} alt={status} />
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

export default EmailType;
