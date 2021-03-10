import styled from "styled-components";
import color from "../../../styles/colors";
import { IoMdClose } from "react-icons/io";
import CheckBoxWrapper from "../CheckBoxWrapper/CircleCheckBoxWrapper";
import { useState, useEffect } from "react";

const Bar_ShowSeletedOptions = ({ selectedOption, setOption }) => {
  const [isExist, setIsExist] = useState(false);
  const stateNames = Object.keys(selectedOption);

  useEffect(() => {
    const isEven = (el) => {
      return el !== "";
    };
    const values = Object.values(selectedOption);
    // console.log(values.some(isEven));
    setIsExist(values.some(isEven));
  }, [isExist, selectedOption]);

  return (
    <Container>
      {isExist && (
        <Bar>
          <List>
            {stateNames.map((item, i) => {
              let itemName;
              if (selectedOption[item] !== "") {
                itemName = selectedOption[item];
                return (
                  <ListItem key={i}>
                    <Item>
                      <CheckBoxWrapper
                        widthHeight={"20px"}
                        checked={true}
                        onClick={
                          (e) => console.log("삭제", e)
                          // 삭제
                          //   radioButtonHandler("sizeOfPerformance", label)
                        }
                      >
                        <IoMdClose size={"15px"} color={color.white} />
                      </CheckBoxWrapper>
                      <Item_Text>{itemName}</Item_Text>
                    </Item>
                  </ListItem>
                );
              } else {
                return;
              }
            })}
          </List>
        </Bar>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 34px;
`;

const Bar = styled.div`
  width: calc(100% - 84px);
  display: flex;
  padding: 18px 42px;
  border-radius: 30px;
  background-color: ${color.gray1};
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 40px;
`;

const Item = styled.div`
  display: flex;
`;
const Item_Text = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

export default Bar_ShowSeletedOptions;
