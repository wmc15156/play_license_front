import styled from "styled-components";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import { useRouter } from "next/router";
import axios from "axios";

const MyInfo = () => {
  const { data, error, mutate } = useSWR("/auth/me", fetcher);
  const router = useRouter();
  console.log("data", data, "daadata");
  const onLogOut = () => {
    axios.post("/auth/logout").then((res) => {
      // mutate(false, false);
      router.push("/");
    });
  };

  if (!data) {
    return router.push("/login");
  }

  return (
    <Container>
      <Box>
        <Content>
          <Item>
            <SubTitle>이름</SubTitle>
            <Data>김솔</Data>
          </Item>
          <Item>
            <SubTitle>휴대폰번호</SubTitle>
            <PhoneNumber>
              <Data>
                <Num>010-0000-0000</Num> <ChangeBtn>변경</ChangeBtn>
              </Data>
            </PhoneNumber>
          </Item>
          <Item>
            <SubTitle>이메일</SubTitle>
            <Data>playlicense</Data>
          </Item>
          <Item>
            <SubTitle>비밀번호</SubTitle>
            <Data>
              <ChangeBtn>변경</ChangeBtn>
            </Data>
          </Item>
          <Item>
            <SubTitle>간편로그인 여부</SubTitle>
            <SocialLogin>
              <Google>
                <Data>구글</Data>
              </Google>
              <Naver>
                <Data>네이버</Data>
              </Naver>
              <Kakao>
                <Data>카카오</Data>
              </Kakao>
            </SocialLogin>
          </Item>
        </Content>
        <Btn onClick={onLogOut}>로그아웃</Btn>
      </Box>
      <Unsubscribe>회원탈퇴하기</Unsubscribe>
    </Container>
  );
};

const Container = styled.div``;
const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  padding: 61px 0 67px 67px;
`;
const Item = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 35px;
  justify-content: center;
`;
const SubTitle = styled.div`
  width: 30%;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  line-height: 16px;
  color: #0d0d0c;
`;
const Data = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  line-height: 16px;
  color: #0d0d0c;
  width: 70%;
`;

const Num = styled.div`
  margin-right: 23px;
  display: flex;

  align-items: center;
`;
const PhoneNumber = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const Google = styled.div`
  display: flex;
  margin-bottom: 29px;
`;

const Naver = styled.div`
  display: flex;
  margin-bottom: 29px;
`;
const Kakao = styled.div`
  display: flex;
`;

const Btn = styled.div`
  position: absolute;
  border-radius: 4px;
  background-color: #96ceb4;
  width: 76px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  letter-spacing: -0.5px;
  line-height: 12px;
  top: 55px;
  right: 63px;
  cursor: pointer;
`;

const ChangeBtn = styled.div`
  border-radius: 4px;
  background-color: #ff6f69;
  width: 38px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  letter-spacing: -0.5px;
  line-height: 12px;
`;

const Unsubscribe = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  font-size: 14px;
  line-height: 14px;
  color: #0d0d0c;
  text-decoration: underline;
  opacity: 0.4;
  margin-top: 43px;
  margin-bottom: 67px;
`;
export default MyInfo;
