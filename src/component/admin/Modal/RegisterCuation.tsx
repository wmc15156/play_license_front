import styled from "styled-components";
import colors from "@styles/colors";
import React, { Dispatch, FC, SetStateAction, useState, VFC } from "react";
import Comment from "@src/component/Comment/Comment";
import { SpanWrapper } from "@src/component/molecules/TextAndInput/TextAndInput";
import BasicInput from "@src/component/BasicInput/BasicInput";
import useInput from "@utils/useInput";
import { ImSearch } from "react-icons/im";
import { ProductLists } from "@src/component/admin/AdminAddCuration/AddCuration";
import Tag from "@src/component/Tag/Tag.";
import CheckBoxWrapper from "@src/component/CheckBoxWrapper/CheckBoxWrapper";
import color from "@styles/colors";
import { FaCheck } from "react-icons/fa";
import OriginalButton from "@src/component/Button/OriginalButton";
import { element } from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  max-width: 950px;
  height: 936px;
  background-color: ${colors.white};
  z-index: 1;
  overflow-y: auto;
`;

const DivWrapper = styled.div<{
  marginTop: string;
  marginBottom?: string;
  justifyContent?: string;
  paddingRight?: string;
}>`
  position: relative;
  width: 100%;
  max-width: 950px;
  box-sizing: border-box;
  display: flex;
  justify-content: ${(p) => (p.justifyContent ? p.justifyContent : "center")};
  margin-top: ${(p) => p.marginTop};
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : null)};
  padding-right: ${(p) => (p.paddingRight ? p.paddingRight : null)};
  & > p {
    margin: 0;
  }
`;

const ListSt = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 170px;
  width: 100%;
  height: auto;
  margin-right: 5%;
  cursor: pointer;
  margin-top: 58px;
`;

const SearchIcon = styled(ImSearch)`
  position: absolute;
  font-size: 24px;
  top: 0;
  bottom: 0;
  height: 24px;
  margin: auto;
  left: 660px;
  color: ${colors.orange};
`;

const ItemImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);

  & > img {
    min-width: 170px;
    width: 100%;
    height: auto;
  }

  &:hover img {
    cursor: pointer;
  }
`;

const ItemDesc = styled.div`
  min-width: 276px;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  margin: 0 6px;
`;

const PInfo = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  line-height: 14px;
  opacity: 0.4;
`;
const Ptitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 12px;
`;

type Props = {
  productLists: ProductLists[];
  closeModal: any;
  selectProduct: ProductLists[];
  select: (productId: number) => any;
  checkboxArray: Array<number>;
  setShowProduct: Dispatch<SetStateAction<boolean>>;
  setSelectProduct: Dispatch<SetStateAction<ProductLists[]>>;
  setCheckboxArray: Dispatch<SetStateAction<number[]>>;
};

const RegisterCuration: VFC<Props> = ({
  productLists,
  closeModal,
  selectProduct,
  select,
  checkboxArray,
  setShowProduct,
  setSelectProduct,
  setCheckboxArray,
}) => {
  const [search, setSearch] = useInput("");
  const onSubmit = () => {
    console.log(selectProduct);
    if (selectProduct.length < 3) {
      alert("큐레이션 등록시 3개 이상의 작품을 선택해주세요");
      return;
    }
    if (selectProduct.length > 10) {
      alert("큐레이션 등록시 작품 등록은 10개까지 가능해요.");
      return;
    }
    setShowProduct(true);
    closeModal();
  };

  const canceledSelect = () => {
    setSelectProduct([]);
    setCheckboxArray([]);
    setShowProduct(false);
    closeModal();
  };

  return (
    <Wrapper>
      <DivWrapper marginTop={"44px"}>
        <Comment font={"18px"} margin={""}>
          <span>작품선택</span>&nbsp; 리스트
        </Comment>
      </DivWrapper>
      <DivWrapper marginTop={"40px"}>
        <SpanWrapper width={"26px"} size={"14px"} textMargin={"20px"}>
          검색
        </SpanWrapper>
        <BasicInput
          width={"400px"}
          placeholder={"작품이름을 검색해보세요"}
          onChange={setSearch}
          value={search}
          inputHeight={"40px"}
          fontSize={"14px"}
        />
        <SearchIcon />
      </DivWrapper>
      <DivWrapper marginTop={""}>
        <ListSt>
          {productLists &&
            productLists.map((item, i) => (
              <Item
                key={item.productId}
                onClick={() => {
                  select(item.productId)();
                }}
              >
                <a>
                  <ItemImg>
                    <img src={item.poster.url} alt={item.title} />
                  </ItemImg>
                </a>
                <a>
                  <ItemDesc>
                    <div>
                      {item.brokerageConsignments.map((cate, i) => {
                        return (
                          <Tag title={cate} key={i}>
                            {cate}
                          </Tag>
                        );
                      })}
                    </div>
                    <div style={{ display: "flex", maxWidth: "170px" }}>
                      <CheckBoxWrapper
                        width={"24px"}
                        height={"24px"}
                        onChange={select(item.productId)}
                        value={
                          checkboxArray.includes(item.productId)
                            ? color.pink
                            : ""
                        }
                        borderRadius={"50%"}
                      >
                        <FaCheck
                          size={"15px"}
                          color={selectProduct ? "white" : "gray"}
                        />
                      </CheckBoxWrapper>
                      <Ptitle>{item.title}</Ptitle>
                    </div>

                    <PInfo>
                      <div>{item.category}</div>
                      <Divider>|</Divider>
                      <div>{item.year}</div>
                      <Divider>|</Divider>
                      <div>{item.company}</div>
                    </PInfo>
                  </ItemDesc>
                </a>
              </Item>
            ))}
        </ListSt>
      </DivWrapper>
      <DivWrapper
        marginTop={"60px"}
        marginBottom={"50px"}
        justifyContent={"flex-end"}
        paddingRight={"60px"}
      >
        <OriginalButton
          width={"100px"}
          height={"36px"}
          margin={""}
          background={colors.gray1}
          size={"12px"}
          fontColor={colors.black2}
          marginRight={"20px"}
          onClick={canceledSelect}
        >
          선택취소
        </OriginalButton>

        <OriginalButton
          width={"100px"}
          height={"36px"}
          margin={""}
          background={colors.orange}
          size={"12px"}
          onClick={onSubmit}
        >
          선택완료
        </OriginalButton>
      </DivWrapper>
    </Wrapper>
  );
};

export default RegisterCuration;
