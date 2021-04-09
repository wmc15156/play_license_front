export const data = {
  adminCheck: "보완요청",
  company: "상상마루",
  description: "상ㅅ아ㅅㄴ리마ㅜㄹ",
  name: "",
  phone: "",
  title: "마당씨의 식탁",
  brokerageConsignments: ["공연 목적", "교육 목적"],
  year: "1",
  requiredMaterials: {
    select: [
      {
        name: "대본",
        price: "",
        originalMaterial: {
          filename: "사진.png",
          url:
            "https://play-license.s3.ap-northeast-2.amazonaws.com/poster/12-layers%402x.png",
        },
        agreement: { url: "", filename: "" },
        etc: "",
      },
      {
        name: "보컬악보",
        price: "",
        originalMaterial: { url: "", filename: "" },
        agreement: { url: "", filename: "" },
        etc: "",
      },
    ],
  },
  selectMaterials: {
    select: [
      {
        name: "연습MR",
        price: "",
        originalMaterial: { url: "", filename: "" },
        agreement: { url: "", filename: "" },
        etc: "",
      },
      {
        name: "총보",
        price: "",
        originalMaterial: { url: "", filename: "" },
        agreement: { url: "", filename: "" },
        etc: "",
      },
      {
        name: "의상디자인",
        price: "",
        originalMaterial: { url: "", filename: "" },
        agreement: { url: "", filename: "" },
        etc: "",
      },
      {
        name: "음향리스트 및 파일",
        price: "",
        originalMaterial: { url: "", filename: "" },
        agreement: { url: "", filename: "" },
        etc: "",
      },
    ],
    input: "",
  },
  comment: "남기실 말씀",
  category: "연극", //공연분야
  creativeStaff: {
    author: { select: "작가", input: "작가이름" },
    composer: {},
    writer: {},
  },
  genre: ["힐링", "로맨스"],
  mainAudience: ["중고등(14세~19세)"],
  sizeOfPerformance: "",
  runningTime: { hour: "2", min: "50", intermission: "10" },
  castMembers: { women: "", men: "", children: "" },
  changedScenario: "각색있음", //각색허용여부
  performanceVideo: "youtube.com",
  planningDocument: "기획의도",
  synopsis: "시놉시스",
  performanceInformationURL: "공연정보URL.",
  numberList: ["1. AAA", "2. B"],
  posterURL: {
    filename: "사진.png",
    url:
      "https://play-license.s3.ap-northeast-2.amazonaws.com/poster/12-layers%402x.png",
  },
};
