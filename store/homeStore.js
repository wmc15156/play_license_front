import { createContext, useCallback, useContext } from "react";
import { useReducer } from "react";
import { homeInitialState, homeReducer } from "../reducers/home";

export const HomeContext = createContext();

const GlobalDispatchContext = createContext(null);

const HomeStore = ({ children }) => {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);
  return (
    <HomeContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </HomeContext.Provider>
  );
};

export function useHomeState() {
  const state = useContext(HomeContext);
  if (!state) {
    throw new Error("Can not find HomeProvider");
  }
  return state;
}

export function useGlobalDispatch() {
  const dispatch = useContext(GlobalDispatchContext);
  if (!dispatch) {
    throw new Error("Can not find HomeProvider");
  }
  return dispatch;
}

export default HomeStore;
