import color from "../../../../../../styles/colors";
import Notice from "../../../common/Wrapper/Notice";

const Noticetab = () => {
  return (
    <div>
      <Notice
        pageType={"provider"}
        btnBodyColor={color.blue_4}
        mainColor={color.blue}
      />
    </div>
  );
};

export default Noticetab;
