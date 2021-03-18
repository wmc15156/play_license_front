import { SAVE_PASSWORD_CHECK, SAVE_USER_EMAIL } from "@reducers/types/types";

export const homeInitialState = {
  new: [],
  hot: [],
  curation: [],
  coming: [],
  userName: "",
  userEmail: "",
  passwordCheck: false,
};

export const homeReducer = (state, action) => {
  switch (action.type) {
    case "fetchHotPerformances": {
      return {
        ...state,
        hot: action.hot,
      };
    }
    case "fetchNewPerformances": {
      return {
        ...state,
        new: action.new,
      };
    }

    case "fetchCurations": {
      return {
        ...state,
        curation: action.curation,
      };
    }

    case "fetchComingSoon": {
      return {
        ...state,
        coming: action.coming,
      };
    }

    case "SAVE_USER_NAME":
      return {
        ...state,
        userName: action.payload,
      };

    case SAVE_USER_EMAIL:
      console.log(action.payload, 2);
      return {
        ...state,
        userEmail: action.payload,
      };
    case SAVE_PASSWORD_CHECK:
      console.log(action.payload);
      return {
        ...state,
        passwordCheck: action.payload,
      };
    default:
      throw new Error("Unhandled action type", action.type);
  }
};
