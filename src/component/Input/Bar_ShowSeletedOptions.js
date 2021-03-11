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
    setIsExist(values.some(isEven));
  }, [isExist, selectedOption]);

  return (
    <Container>
      {isExist && (
        <Bar>
          <List>
            {stateNames.map((item, i) => {
              let itemValue = selectedOption[item];
              if (itemValue !== "") {
                return (
                  <ListItem key={i}>
                    <Item>
                      <CheckBoxWrapper
                        widthHeight={"20px"}
                        checked={true}
                        cursor={true}
                        onClick={(e) => {
                          setOption((prev) => {
                            return { ...prev, [item]: "" };
                          });
                        }}
                      >
                        <IoMdClose size={"15px"} color={color.white} />
                      </CheckBoxWrapper>
                      <Item_Text>{itemValue}</Item_Text>
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
  border-right: 1px solid ${color.black4};
  &:last-child {
    border: none;
  }
`;

const Item = styled.div`
  display: flex;
  width: 100%;
`;
const Item_Text = styled.span`
  display: inline-block;
  margin-left: 10px;
  margin-right: 40px;
`;

export default Bar_ShowSeletedOptions;
