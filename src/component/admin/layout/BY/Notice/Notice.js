import color from "../../../../../../styles/colors";
import Notice from "../../../common/Wrapper/Notice";

const Noticetab = () => {
  return (
    <div>
      <Notice
        pageType={"buyer"}
        btnBodyColor={color.orange2}
        mainColor={color.orange}
      />
    </div>
  );
};

export default Noticetab;
