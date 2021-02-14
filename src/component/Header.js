import styleHeader from "../../styles/Header.module.css";

const style = {};

const Header = (props) => {
  return (
    <div className={styleHeader.container}>
      <div className={styleHeader.logo}>
        <img src="/assets/image/logo.png" alt="" />
        {/* <div className={styleHeader.logoImg}></div> */}
        <div className={styleHeader.logoText}>
          PLAY
          <br />
          LICENSE
        </div>
      </div>
      <ul className={styleHeader.list}>
        <li>
          <img src="/assets/image/icon_mypage.png" />
          <div className={styleHeader.text}>MYPAGE</div>
        </li>
        <li>
          <img src="/assets/image/icon_search.png" />
          <div className={styleHeader.text}>SEARCH</div>
        </li>
        <li onClick={props.open}>
          {props.status === false ? (
            <>
              <img src="/assets/image/icon_hamburger.png" />
              <div className={styleHeader.text}>MENU</div>
            </>
          ) : (
            <>
              {/* 흰색이미지 */}
              {/* <img src="/assets/image/icon_hamburger.png" /> */}
              <div className={styleHeader.clickedText}>MENU</div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
