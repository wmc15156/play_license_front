import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "FreightSansBlackSC";
  font-size: 21px;
  margin-top: 43px;

  & > img {
    width: 60px;
    height: 34px;
    display: inline-block;
    margin-right: 22px;
  }
`;

function ProviderHeader() {
  return (
    <Wrapper>
      <img src={"/assets/image/logo.png"} />
      <div>PLAY LICENSE &nbsp; &nbsp; 제작사 센터</div>
    </Wrapper>
  );
}

export default ProviderHeader;
