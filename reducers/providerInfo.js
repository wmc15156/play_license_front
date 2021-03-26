import { createContext } from "react";

export const ProviderInfoContext = createContext();

export const providerInfoInitialState = {
  user: {},
  changed: {},
};

export const providerInfoReducer = (state, action) => {
  // console.log(state, "state는?");
  switch (action.type) {
    case "GET_INFO": {
      // console.log(action);
      return {
        ...state,
        user: action.info,
      };
    }
    case "SELECT_IMG": {
      return {
        ...state,
        user: action.avatar,
      };
    }
    case "UPDATE_INFO": {
      return {
        ...state,
        changed: action.changed,
      };
    }
    case "CHANGE_COMMENT_VALUE": {
      return {
        ...state,
        changed: action.changed,
      };
    }
    default:
      throw new Error("Unhandled action type", action.type);
  }
};
