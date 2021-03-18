import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { debounce } from "lodash";
import Tag from "../../src/component/Tag/Tag.";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const Search = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [count, setCount] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [search, setSearch] = useState("");
  // const { data, error, revalidate } = useSWR(
  //   ["/product/search", searchInput],
  //   fetcher
  // );
  const router = useRouter();

  const debounceSearchFunc = debounce(() => {
    console.log("called debounceSomethingFunc");
  }, 1000);

  const onClickHandler = (id) => () => {
    console.log("123", id);
    router.push(`/performances/${id}`);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("searchInput", searchInput);
    if (!searchInput) {
      console.log("if");
      setList([]);
      setCount(0);
      setTypingDone(false);
      return;
    }

    if (searchInput.length > 0) {
      // revalidate();
      // console.log(data, "data");
      console.log("here");
      axios
        .get("/product/search", {
          params: {
            q: searchInput,
            page: 1,
          },
        })
        .then((res) => {
          console.log(res.data, "뭐야");
          setList(res.data);
          setCount(res.data.length);
          setTypingDone(true);
          setSearch(searchInput);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onChangeSearchInput = useCallback(
    (e) => {
      setSearchInput(e.target.value);
    },
    [searchInput]
  );
  console.log(list, typingDone, "-----");
  return (
    <Container>
      <Section1>
        <FormWrapper onSubmit={onSubmitHandler}>
          <InputBox onChange={onChangeSearchInput} value={searchInput} />
        </FormWrapper>
      </Section1>
      <Section2>
        {typingDone && list.length >= 0 && (
          <Title>
            "{search}" 검색결과 <CounterSpan>{count}건</CounterSpan>
          </Title>
        )}
        {list && (
          <ListSt>
            {list
              .map((item) => (
                <Item
                  key={item.productId}
                  onClick={onClickHandler(item.productId)}
                >
                  <a>
                    <ItemImg>
                      <img src={item.poster} alt={item.name} />
                    </ItemImg>
                  </a>
                  <a>
                    <ItemDesc>
                      <div>
                        {item.brokerageConsignments.map((cate, i) => {
                          return (
                            <Tag title={cate} id={item.id}>
                              {cate}
                            </Tag>
                          );
                        })}
                      </div>
                      <Ptitle>{item.title}</Ptitle>
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
              ))
              .slice(0, 3)}
            {list.length === 0 && typingDone && (
              <None>
                <img src="/assets/image/search_icon.png" />
                <NoSearch>검색 결과가 없습니다</NoSearch>
              </None>
            )}
          </ListSt>
        )}
      </Section2>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Section1 = styled.div`
  display: flex;
  margin-bottom: 65px;
  padding: 0 1rem;
`;
const InputBox = styled.input.attrs({
  placeholder: "검색할 작품을 입력해주세요",
})`
  width: calc(100% - 34px);
  height: 104px;
  border-radius: 14px;
  background-color: #f5f5f5;
  border: none;
  font-size: 36px;
  font-family: "NotoSansCJKkr-Medium";
  padding-left: 34px;
`;

const Section2 = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
const Title = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  font-size: 24px;
  line-height: 48px;
  margin-bottom: 39px;
`;
const Category = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
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

const ItemDesc = styled.div`
  min-width: 276px;
  display: flex;
  flex-direction: column;
`;

const ItemImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);

  & > img {
    min-width: 276px;
    width: 100%;
    height: auto;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 276px;
  width: 100%;
  height: auto;
  margin-right: 5%;
  cursor: pointer;
`;

const ListSt = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  flex-wrap: wrap;
`;

const CounterSpan = styled.span`
  margin-left: 30px;
  opacity: 0.3;
  font-family: NotoSansCJKkr;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #000000;
`;
const FormWrapper = styled.form`
  width: 100%;
`;

const None = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 400px;
  justify-content: center;
`;

const SearchIcon = styled.img`
  margin-right: 37px;
`;

const NoSearch = styled.span`
  font-family: NotoSansCJKkr;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #000000;
  margin-left: 37px;
`;
export default Search;
