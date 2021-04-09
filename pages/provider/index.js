import styled from "styled-components";
import color from "../../styles/colors";
import ContainerWrapper from "../../src/component/ContainerWrapper/TopToBottom";
import OriginalButton from "../../src/component/Button/OriginalButton";
import { useRouter } from "next/router";

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 126px;

  & > img {
    display: inline-block;
    width: 100%;
    height: 188px;
  }
`;

const GrayBox = styled.div`
  width: 100%;
  height: 88px;
  font-size: 12px;
  margin-top: 76px;
  background-color: ${color.gray1};
  color: ${color.black3};
  font-family: "NotoSansCJKkr-Bold";
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > p > span {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Comment = styled.div`
  width: 100%;
  font-size: 14px;
  color: ${color.black3};
  font-family: "NotoSansCJKkr-Regular";
  text-align: center;
  margin-top: 22px;
`;

function provider() {
  const router = useRouter();
  const movePage = (page, skip = true) => () => {
    const url = skip ? `provider/${page}` : "/";
    router.push(url);
  };

  return (
    <ContainerWrapper width={"765px"}>
      <ImageWrapper>
        <img src={"/assets/image/title.png"} />
      </ImageWrapper>
      <GrayBox margin={"48px"} height={"88px"} fontSize={"12px"}>
        <p>
          <span>PL제작사 센터</span>란 '작품 및 제작사 등록 문의'를 통해 인증된
          공연 제작사 혹은 창작사만 이용할 수 있는 제작사 전용 웹사이트 이며,
          <br />
          저작권 보호와 정당한 경제적 가치 창출을 보장합니다.
          <span
            style={{ color: color.pink, cursor: "pointer" }}
            onClick={movePage("", false)}
          >
            {" "}
            작품이 판매되는 PLAYLICENSE 바로가기
          </span>
        </p>
      </GrayBox>
      <OriginalButton
        width={"580px"}
        margin={"64px"}
        background={color.yellow}
        height={"60px"}
        size={"21px"}
        onClick={movePage("login")}
      >
        로그인하기
      </OriginalButton>
      <OriginalButton
        width={"580px"}
        margin={"12px"}
        background={color.blue}
        height={"60px"}
        size={"21px"}
        onClick={movePage("inquiry")}
      >
        작품 및 제작사 등록 문의
      </OriginalButton>
      <Comment>
        첫 방문이신가요? 작품 및 제작사 등록 문의를 통해 계정을 부여받고
        서비스를 이용해보세요!
      </Comment>
    </ContainerWrapper>
  );
}

export default provider;
