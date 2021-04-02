import styled from "styled-components";
import color from "../../../styles/colors";
import { HiMinusCircle } from "react-icons/hi";

const InputTextAndImg = ({
  mode,
  imgSrc,
  readOnly,
  borderStyle,
  height,
  background,
  clickIconHandler,
}) => {
  return (
    <Container
      contentEditable={!readOnly}
      borderStyle={borderStyle}
      height={height}
      background={background}
    >
      {imgSrc && (
        <ImgWrapper>
          <Image>
            <img src={imgSrc} />
            {mode === "modify" && (
              <Icon onClick={clickIconHandler}>
                <HiMinusCircle color={color.blue} size={29} />
              </Icon>
            )}
          </Image>
        </ImgWrapper>
      )}
      <br />
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 26px);
  height: 333px;
  padding: 13px;
  border-radius: 8px;
  border: ${(props) => (props.borderStyle ? props.borderStyle : "none")};
  background-color: ${(props) =>
    props.background ? props.background : color.white};
`;

const ImgWrapper = styled.div`
  width: 100%;
  /* position: relative; */
`;

const Image = styled.div`
  position: relative;
  display: inline-block;
  & > img {
    max-width: 100%;
    max-height: 112px;
    height: auto;
  }
`;

const Icon = styled.div`
  position: absolute;
  right: -15px;
  bottom: -15px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
export default InputTextAndImg;
