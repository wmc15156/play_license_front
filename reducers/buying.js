import {
  SAVE_GROUP_NAME,
  SAVE_ABOUT_GROUP,
  SAVE_PLANNED_CONTENTS,
  SAVE_SCHEDULE,
  SAVE_NUMBER,
  SAVE_PLACE,
  SAVE_PRICE,
  SAVE_CHANGE_SCENARIO,
  SAVE_RANGE_OF_CHANGE,
  SAVE_REQUIRED_MATERIALS,
  SAVE_SELECT_MATERIALS,
  SAVE_CAST_MEMBERS,
  SAVE_STAFF_MEMBERS,
  SAVE_NAME,
  SAVE_PHONE,
  SAVE_COMMENT,
} from "./types/types";

export const buyingInitialState = {
  groupName: "",
  aboutGroup: "",
  plannedContents: "",
  schedule: [],
  number: null,
  place: [], // [선택, 구체적 장소, 비고사항],
  price: null,
  changeScenario: false,
  rangeOfChange: [],
  requiredMaterials: [],
  selectMaterials: [],
  castMembers: null,
  staffMembers: null,
  name: "",
  phone: null,
  comment: "",
};

export const buyingReducer = (state, action) => {
  switch (action.type) {
    case SAVE_GROUP_NAME:
      return {
        ...state,
        groupName: action.groupName,
      };

    case SAVE_ABOUT_GROUP:
      return {
        ...state,
        aboutGroup: action.aboutGroup,
      };

    case SAVE_PLANNED_CONTENTS:
      return {
        ...state,
        plannedContents: action.plannedContents,
      };
    case SAVE_SCHEDULE:
      return {
        ...state,
        schedule: action.schedule,
      };
    case SAVE_NUMBER:
      return {
        ...state,
        number: action.number,
      };
    case SAVE_PLACE:
      return {
        ...state,
        place: action.place,
      };
    case SAVE_PRICE:
      return {
        ...state,
        price: action.price,
      };
    case SAVE_CHANGE_SCENARIO:
      return {
        ...state,
        changeScenario: action.changeScenario,
      };
    case SAVE_RANGE_OF_CHANGE:
      return {
        ...state,
        rangeOfChange: action.rangeOfChange,
      };
    case SAVE_REQUIRED_MATERIALS:
      return {
        ...state,
        requiredMaterials: action.requiredMaterials,
      };
    case SAVE_SELECT_MATERIALS:
      return {
        ...state,
        selectMaterials: action.selectMaterials,
      };
    case SAVE_CAST_MEMBERS:
      return {
        ...state,
        castMembers: action.castMembers,
      };
    case SAVE_STAFF_MEMBERS:
      return {
        ...state,
        staffMembers: action.staffMembers,
      };
    case SAVE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SAVE_PHONE:
      return {
        ...state,
        phone: action.phone,
      };
    case SAVE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    default: {
      throw new Error(`unexpected action.type: ${action.type}`);
    }
  }
};
