import Image from "next/image";
import styleFooter from "../../styles/Footer.module.css";
// import imag from "../../public/assets/image/logo.png";

const Footer = () => {
  return (
    <div className={styleFooter.container}>
      <div className={styleFooter.leftSection}>
        <ul className={styleFooter.logo}>
          <li>
            {/* <Image
            className={styleFooter.logoImg}
            src="../../public/assets/images/logo.png"
            width="56px"
            height="36px"
          /> */}
            <div className={styleFooter.logoImg}>
              <img src="/assets/image/logo.png" alt="" />
            </div>
            <div className={styleFooter.logoText}>
              PLAY
              <br />
              LICENSE
            </div>
          </li>
        </ul>
        <ul className={styleFooter.about_company}>
          <li>
            <div className={styleFooter.strong}>관리자</div>
            <div className={styleFooter.strong}>주소</div>
            <div className={styleFooter.strong}>TEL</div>
            <div className={styleFooter.strong}>E-MAIL</div>
          </li>
          <li>
            <div className={styleFooter.textContent}>
              (주)문화공작소 상상마루
            </div>
            <div className={styleFooter.textContent}>
              서울시 강동구 고덕로 53, 3층
            </div>
            <div className={styleFooter.textContent}>(02) 6956 3370</div>
            <div className={styleFooter.textContent}>
              sangsang5557@naver.com
            </div>
          </li>
        </ul>
      </div>
      <div className={styleFooter.rightSection}>
        <ul className={styleFooter.quickmenu}>
          <li>
            <div className={styleFooter.strong}>자주 묻는 질문</div>
          </li>
          <span className={styleFooter.stick}>|</span>
          <li>
            <div className={styleFooter.strong}>개인정보처리방침</div>
          </li>
          <span className={styleFooter.stick}>|</span>
          <li>
            <div className={styleFooter.strong}>이용약관</div>
          </li>
        </ul>
        <div>
          <button className={styleFooter.goTopBtn}>Back to the TOP</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
