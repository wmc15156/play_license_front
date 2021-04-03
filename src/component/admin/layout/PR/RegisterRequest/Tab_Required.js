import styled, { css } from "styled-components";
import color from "../../../../../../styles/colors";
import StatusBox from "../../../../../../src/component/Tag/Purchase_AnswerStatus";
import FileUploader from "../../../../../../src/component/Input/FileUploader";
import { useState } from "react";

const required = {
  select: [
    {
      id: 1,
      name: "필수자료1",
      price: "라이선스 비용에 포함",
      originalMaterial: { url: "url.com", filename: "filename1" },
      agreement: { url: "url.com", filename: "filename1" },
      isDeleted: false,
    },
  ],
};

const Tab_Required = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [selected, setSelected] = useState([
    {
      id: 1,
      name: "필수자료1",
      price: "라이선스 비용에 포함",
      originalMaterial: { url: "url.com", filename: "filename1" },
      agreement: { url: "url.com", filename: "filename1" },
      isDeleted: false,
    },
  ]);
  return (
    <Container>
      <Table>
        <Table_Title>
          <TitleText1>분류</TitleText1>
          <TitleText2>종류</TitleText2>
          <TitleText3>가격</TitleText3>
          <TitleText3>원본자료</TitleText3>
          <TitleText3>위탁동의서</TitleText3>
          <TitleText>자료삭제</TitleText>
        </Table_Title>
        {selected.map((item, idx) => {
          return (
            <List key={idx}>
              <Text1>필수</Text1>
              <Text2>{item.name}</Text2>
              <Text3>{item.price}</Text3>
              <Text3>
                <FileUploader
                  icon={false}
                  readOnly={isReadOnly}
                  data={item.originalMaterial}
                  isInactive={item.isDeleted}
                />
              </Text3>
              <Text3>
                <FileUploader
                  icon={false}
                  readOnly={isReadOnly}
                  data={item.agreement}
                  isInactive={item.isDeleted}
                />
              </Text3>
              <Text>
                <StatusBox
                  status={item.isDeleted}
                  background={color.white}
                  fontColor={color.black1}
                  borderColor={color.black2}
                  onClick={() => {
                    console.log("자료삭제");
                    let arr = [...selected];
                    arr[idx] = { ...selected[idx], isDeleted: true };
                    setSelected(arr);
                  }}
                >
                  {"자료삭제"}
                </StatusBox>
              </Text>
            </List>
          );
        })}
      </Table>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`;

const Table = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid ${color.gray1};
  margin-top: 30px;
`;
const Table_Title = styled.li`
  display: flex;
  width: 100%;
  background-color: ${color.gray1};
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 60px;
`;

const List = styled.li`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${color.black5};
  height: 60px;
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const TitleTextStyle = css`
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black1};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TitleText = styled.div`
  ${TitleTextStyle}
  width: calc(21% - 20px);
`;

const TitleText1 = styled.div`
  ${TitleTextStyle};
  padding-left: 20px;
  width: calc(9% - 20px);
`;

const TitleText2 = styled.div`
  ${TitleTextStyle};
  width: 19%;
`;
const TitleText3 = styled.div`
  ${TitleTextStyle};
  width: 17%;
`;

const TextStyle = css`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black1};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.div`
  ${TextStyle} /* padding-left: 20px; */
  width: calc(21% - 20px);
`;
const Text1 = styled.div`
  ${TextStyle};
  padding-left: 20px;
  width: calc(9% - 20px);
`;

const Text2 = styled.div`
  ${TextStyle};
  width: 19%;
`;

const Text3 = styled.div`
  ${TextStyle};
  width: 17%;
`;

export default Tab_Required;
