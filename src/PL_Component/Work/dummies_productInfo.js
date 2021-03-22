export const data = {
  adminCheck: "보완요청",
  groupName: "상상마루",
  introduction: "상ㅅ아ㅅㄴ리마ㅜㄹ",
  name: "",
  phone: "",
  title: "마당씨의 식탁",
  purpose: ["공연 목적", "교육 목적"],
  year: "1",
  requiredMaterials: {
    select: [
      { name: "대본", price: "", original: "", etc: "" },
      { name: "보컬악보", price: "", original: "", etc: "" },
    ],
  },
  selectedMaterials: {
    select: [
      { name: "연습MR", price: "", original: "", etc: "" },
      { name: "총보", price: "", original: "", etc: "" },
      { name: "의상디자인", price: "", original: "", etc: "" },
      { name: "음향리스트 및 파일", price: "", original: "", etc: "" },
    ],
    input: "",
  },
  comment: "남기실 말씀",
  category: { select: ["연극", "기타"], input: "기타내용" }, //공연분야
  creativeStaff: {
    author: { select: "작가", input: "작가이름" },
    composer: {},
    writer: {},
  },
  genre: ["힐링", "로맨스"],
  mainAudience: ["중고등(14세~19세)"],
  sizeOfPerformance: "",
  runningTime: { hour: "", min: "", intermission: "" },
  castMembers: { women: "", men: "", child: "" },
  isChangedScenario: "각색있음", //각색허용여부
  youtubeUrl: "youtube.com",
  description: "기획의도",
  synopsis: "시놉시스",
  performanceInformationURL: "공연정보URL.",
  numberList: "",
  posterImage: "",
  background: { pc: "", mobile: "" },
};
