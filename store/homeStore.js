import { createContext } from "react";
import { useReducer } from "react";
import { homeInitialState, homeReducer } from "../reducers/home";

export const HomeContext = createContext();

const HomeStore = (props) => {
  return (
    <HomeContext.Provider value={useReducer(homeReducer, homeInitialState)}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeStore;
