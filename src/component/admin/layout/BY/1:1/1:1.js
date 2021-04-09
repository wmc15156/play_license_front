import color from "../../../../../../styles/colors";
import Question from "../../../common/Wrapper/1:1";

const questionTab = () => {
  return (
    <div>
      <Question
        pageType={"buyer"}
        headerOptArr1={["제목", "이메일", "내용"]}
        defaultOption1={"카테고리"}
        headerOptArr2={["답변요청", "답변완료"]}
        defaultOption2={"진행상태"}
        subColor={color.yellow}
        mainColor={color.orange}
      />
    </div>
  );
};

export default questionTab;
