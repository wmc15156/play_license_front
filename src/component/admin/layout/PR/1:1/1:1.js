import color from "../../../../../../styles/colors";
import Question from "../../../common/Wrapper/1:1";

const questionTab = () => {
  return (
    <div>
      <Question
        pageType={"provider"}
        headerOptArr1={["제목", "이메일", "내용"]}
        defaultOption1={"카테고리"}
        headerOptArr2={["답변요청", "답변완료"]}
        defaultOption2={"상태변경"}
        subColor={color.blue_4}
        mainColor={color.blue}
      />
    </div>
  );
};

export default questionTab;
