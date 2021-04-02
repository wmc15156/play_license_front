import styled from "styled-components";
import color from "../../styles/colors";
import logoImage from "../../public/assets/image/logo.png";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  const onClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Background>
      <Container>
        <LeftSection>
          <Logo>
            <li>
              <div>
                <LogoImg />
              </div>
              <LogoText>
                PLAY
                <br />
                LICENSE
              </LogoText>
            </li>
          </Logo>
          <About>
            <About_li>
              <Strong>관리자</Strong>
              <Strong>주소</Strong>
              <Strong>TEL</Strong>
              <Strong>E-MAIL</Strong>
            </About_li>
            <About_li>
              <About_Content>(주)문화공작소 상상마루</About_Content>
              <About_Content>서울시 강동구 고덕로 53, 3층</About_Content>
              <About_Content>(02) 6956 3370</About_Content>
              <About_Content>sangsang5557@naver.com</About_Content>
            </About_li>
          </About>
        </LeftSection>
        <RightSection>
          <QuickMenu>
            <li>
              <Menu>챗봇</Menu>
            </li>
            <Divider />
            <li>
              <Link href="/faq">
                <Menu>자주 묻는 질문</Menu>
              </Link>
            </li>
            <Divider />
            <li>
              <Link href="/policy">
                <Menu>개인정보처리방침</Menu>
              </Link>
            </li>
            <Divider />
            <li>
              <Link href="/terms">
                <Menu>이용약관</Menu>
              </Link>
            </li>
          </QuickMenu>
          <BtnWapper>
            <Button onClick={onClickHandler}>
              Back to the TOP
              <span>
                <IoIosArrowUp />
              </span>
            </Button>
          </BtnWapper>
        </RightSection>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  background-color: ${color.gray1};
  height: 410px;
`;
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding-top: 40px;
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  height: 100%;
`;
const Logo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  & > li {
    display: flex;
    align-items: center;
  }
`;
const LogoImg = styled.img.attrs({
  src: logoImage,
})`
  width: 56px;
  height: 40px;
  display: block;
  margin-right: 12px;
  margin-bottom: 30px;
`;
const LogoText = styled.div`
  font-family: "FreightSansBlackSC";
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: normal;
  margin-bottom: 30px;
`;

const About = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const About_li = styled.li`
  display: flex;
  flex-direction: column;
  &:nth-child(1) {
    margin-right: 20px;
  }
`;

const About_Content = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  line-height: 25px;
  font-style: normal;
  color: ${color.black3};
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  margin-left: auto;
  align-items: flex-end;
`;

const QuickMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 70px 0;
  padding: 0;
`;

const Strong = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  line-height: 25px;
  font-style: normal;
`;

const Menu = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  line-height: 25px;
  font-style: normal;
  cursor: pointer;
`;

const Divider = styled.span`
  margin: 0 12px;
  height: 100%;
  width: 1px;
  background-color: ${color.black4};
`;

const BtnWapper = styled.div`
  width: 50%;
  margin-left: auto;
`;
const Button = styled.button`
  width: 100%;
  font-family: "Gotham Medium";
  line-height: 26px;
  border-radius: 14px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};
  color: ${color.black3};
  padding: 5%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  & > span {
    display: flex;
    align-items: center;
    margin-left: 3%;
  }
`;

export default Footer;
