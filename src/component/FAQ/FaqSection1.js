import styled from "styled-components";

const FaqSection1 = () => {
  // ReactDOM.render();
  // const accordion = document.getElementsByClassName("accordion");
  const toggleHandler = () => {};

  return (
    <Container>
      <Btn className="accordion" onClick={toggleHandler}>
        <Categ>이용방법</Categ>
        <div>저작권 이용에 대한 문의는 어떻게 하나요?</div>
      </Btn>
      <div className="panel">
        <p>Lorem</p>
      </div>

      <Btn className="accordion" onClick={toggleHandler}>
        <Categ>이용방법</Categ>
        <div>작품 등록은 어떻게 하나요?</div>
      </Btn>
      <div className="panel">
        <p>Lorem</p>
      </div>

      <Btn className="accordion" onClick={toggleHandler}>
        <Categ>이용방법</Categ>
        <div>작품 이용은 어떻게 하나요?</div>
      </Btn>
      <div className="panel">
        <p>Lorem</p>
      </div>
      <Btn className="accordion" onClick={toggleHandler}>
        <Categ>이용방법</Categ>
        <div>Play License란?</div>
      </Btn>
      <div className="panel">
        <p>Lorem</p>
      </div>
      <Btn className="accordion" onClick={toggleHandler}>
        <Categ>작품구매</Categ>
        <div>구매문의시 제한사항이 있나요?</div>
      </Btn>
      <div className="panel">
        <p>Lorem</p>
      </div>
      <Btn className="accordion" onClick={toggleHandler}>
        <Categ>작품등록</Categ>
        <div>작품등록은 누구나 가능한가요?</div>
      </Btn>
      <div className="panel">
        <p>Lorem</p>
      </div>

      <Btn className="accordion" onClick={toggleHandler}>
        <Categ>작품구매</Categ>
        <div>작품구매 후 취소 가능한가요?</div>
      </Btn>
      <div className="panel">
        <p>Lorem</p>
      </div>

      <Btn className="accordion" onClick={toggleHandler}>
        <Categ>작품구매</Categ>
        <div>구매비용은 얼마인가요?</div>
      </Btn>
      <div className="panel">
        <p>Lorem</p>
      </div>

      <Btn className="accordion" onClick={toggleHandler}>
        <Categ>작품구매</Categ>
        <div>작품구매 신청 후 승인여부는 어디서 확인하나요?</div>
      </Btn>
      <div className="panel">
        <p>Lorem</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  .accordion {
    font-family: "NotoSansCJKkr-Medium";
    font-size: 16px;
    line-height: 16px;
    background-color: #ffffff;
    color: #333333;
    cursor: pointer;
    padding: 18px;
    padding: 23px 35px 23px 0;
    width: 100%;
    text-align: left;
    border: none;
    border-bottom: 1px solid #eee;
    outline: none;
    transition: 0.4s;
  }
  .active,
  .accordion:hover {
    color: #ff6f69;
  }
  .panel {
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
  }
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
`;

const Categ = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  width: 60px;
  height: 28px;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12%;
`;
export default FaqSection1;
