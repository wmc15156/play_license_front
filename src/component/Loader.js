import styled from "styled-components";
import color from "../../styles/colors";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const LoaderSt = styled.div`
  position: absolute;
  top: 30%;
  border: 10px solid ${color.gray1};
  border-radius: 50%;
  border-top: 10px solid ${color.orange};
  width: 100px;
  height: 100px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  z-index: 100;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <LoaderSt />
    </Container>
  );
};

export default Loader;
