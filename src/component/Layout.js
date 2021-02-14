import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  @font-face {
    font-family: "Gotham Medium";
    font-weight: 500;
    src: url("/assets/font/Gotham-Medium.ttf");
  }
  
  @font-face {
    font-family: "Gotham Bold";
    font-weight:700;
    src: url(/assets/font/Gotham-Bold.ttf);
  }

  @font-face {
    font-family: "FreightSansBlackSC";
    font-weight: 900;
    src: url("/assets/font/FreightSansBlackSC.otf");
  }
  
  @font-face {
    font-family: "NotoSansCJKkr-Medium";
    font-weight: 500;
    src: url("/assets/font/NotoSansCJKkr-Medium.otf");
  }
  
  @font-face {
    font-family: "NotoSansCJKkr-Bold";
    font-weight: 700;
    src: url("/assets/font/NotoSansCJKkr-Bold.otf");
  }
  
  @font-face {
    font-family: "NotoSansCJKkr-Regular";
    font-weight: 400;
    src: url("/assets/font/NotoSansCJKkr-Regular.otf");
  }
`;

const Layout = (props) => {
  return (
    <>
      {props.children}
      <GlobalStyle />
    </>
  );
};

export default Layout;
