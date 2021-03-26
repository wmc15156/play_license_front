import styled from "styled-components";
import color from "../../../styles/colors";
import Navi from "../../../src/component/Nav/Navigation";
import LogoBar from "../../../src/component/Nav/LogoBar";
import { PageContainer, PageContentContainer } from "../../../styles/PL_Frame";
import Btn from "../../../src/component/Button/GrayShortBtn";
import { AiFillWallet } from "react-icons/ai";
import { HiClock } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";

const date = new Date();
const currMonth = date.getMonth() + 1;
const list = [
  {
    id: 1,
    date_payment: "2021.02.01",
    title: "로빈슨 크루소",
    money: "123,000",
    date_scheduled: "2021.03.01",
  },
  {
    id: 2,
    date_payment: "2021.02.01",
    title: "로빈슨 크루소",
    money: "123,000",
    date_scheduled: "2021.03.01",
  },
  {
    id: 3,
    date_payment: "2021.02.01",
    title: "로빈슨 크루소",
    money: "123,000",
    date_scheduled: "2021.03.01",
  },
];

// export async function getServerSideProps() {
//   const url = `/${currMonth}`;
//   const res = await axios.get(url);
//   const respData = res.data;
//   return {
//     props: { data: respData },
//   };
// }

function pl_money({ data }) {
  // const getPrevMonthData = ()=>{
  //   axios.get(`${currMonth-1}`).then(res=>console.log(res))
  // }

  return (
    <Container>
      <NavContainer>
        <Navi />
      </NavContainer>
      <BodyContainer>
        <LogoBar />
        <Title>정산내역</Title>
        <Box>
          <Box_Item>
            <Box_Item_Name>정산 방식</Box_Item_Name>
            <Box_Item_Desc>
              <AiFillWallet
                size={20}
                style={{ opacity: 0.4, marginRight: 12 }}
              />
              계좌 이체
            </Box_Item_Desc>
          </Box_Item>

          <Divider />

          <Box_Item>
            <Box_Item_Name>정산 주기</Box_Item_Name>
            <Box_Item_Desc>
              <HiClock size={22} style={{ opacity: 0.4, marginRight: 12 }} />월
              1회
            </Box_Item_Desc>
          </Box_Item>

          <Divider />

          <Box_Item>
            <Box_Item_Name>정산 날짜</Box_Item_Name>
            <Box_Item_Desc>
              <FaCalendarAlt
                size={18}
                style={{ opacity: 0.4, marginRight: 12 }}
              />
              매월 1일
            </Box_Item_Desc>
          </Box_Item>
        </Box>
        <Table>
          <Table_Head>
            <Table_Head_Item>
              {currMonth}월 정산 예정 건 <span>{"5"}</span>건
            </Table_Head_Item>
            <Divider width={"2px"} color={color.black5} />
            <Table_Head_Item>
              {currMonth}월 정산 금액 <span>{"615,000"}</span>원
            </Table_Head_Item>
          </Table_Head>
          <Table_Subtitle>
            <Table_Subtitle_Item>결제일</Table_Subtitle_Item>
            <Table_Subtitle_Item>작품명</Table_Subtitle_Item>
            <Table_Subtitle_Item>정산액</Table_Subtitle_Item>
            <Table_Subtitle_Item>정산예정일</Table_Subtitle_Item>
          </Table_Subtitle>
          {list.map((performance) => {
            return (
              <Table_Item key={performance.id}>
                <Table_Item_Items>{performance.date_payment}</Table_Item_Items>
                <Table_Item_Items>{performance.title}</Table_Item_Items>
                <Table_Item_Items>{performance.money}원</Table_Item_Items>
                <Table_Item_Items>
                  {performance.date_scheduled}
                </Table_Item_Items>
              </Table_Item>
            );
          })}
        </Table>
        <BtnSection>
          <Btn
            text={`${currMonth - 1}월 정산`}
            size={"12px"}
            height={"36px"}
            // onClickHandler={getPrevMonthData}
            fontColor={color.black2}
          />
        </BtnSection>
      </BodyContainer>
    </Container>
  );
}

const Container = styled.div`
  ${PageContainer};
`;

const NavContainer = styled.div`
  width: 220px;
`;

const BodyContainer = styled.div`
  flex-direction: column;
  ${PageContentContainer};
`;
const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black2};
  margin-bottom: 30px;
`;

const Box = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 30px 0;
  background-color: ${color.gray1};
  border-radius: 14px;
  margin-bottom: 30px;
`;

const Box_Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
`;

const Box_Item_Name = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 20px;
`;
const Box_Item_Desc = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  line-height: 16px;
  color: ${color.blue};
  display: flex;
  align-items: center;
`;

const Table = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 14px;
  border: 2px solid ${color.gray1};
`;

const Table_Head = styled.li`
  width: 100%;
  display: flex;
  padding: 20px 0;
`;

const Table_Head_Item = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  color: ${color.black2};
  padding: 20px 0;

  & > span {
    margin-left: 20px;
    font-family: "NotoSansCJKkr-Regular";
    color: ${color.orange};
  }
`;
const Divider = styled.div`
  width: ${(props) => (props.width ? props.width : "1px")};
  height: 100%;
  background-color: ${(props) => (props.color ? props.color : color.blue_2)};
`;
const Table_Subtitle = styled.li`
  width: 100%;
  padding: 21px 0;
  font-family: "NotoSansCJKkr-Bold";
  background-color: ${color.gray1};
  display: flex;
`;

const Table_Subtitle_Item = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table_Item = styled.li`
  width: 100%;
  padding: 21px 0;
  display: flex;
`;
const Table_Item_Items = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnSection = styled.div`
  margin-top: 30px;
  width: 69px;
  display: flex;
`;
export default pl_money;
