import styled from "styled-components";
import color from "../../../styles/colors";

const Loader = ({ color }) => {
  return (
    <Container>
      <LoaderStyle color={color ? color : null} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const LoaderStyle = styled.div`
  position: absolute;
  border: 3px solid ${color.black5};
  border-radius: 50%;
  border-top: ${(props) =>
    props.color ? `3px solid ${props.color}` : `3px solid ${color.orange}`};
  width: 12px;
  height: 12px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  z-index: 11;

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

export default Loader;
