import { createContext, useReducer } from "react";
import { buyingInitialState, buyingReducer } from "../reducers/buying";

export const BuyingContext = createContext();

const BuyingStore = ({ children }) => {
  return (
    <BuyingContext.Provider
      value={useReducer(buyingReducer, buyingInitialState)}
    >
      {children}
    </BuyingContext.Provider>
  );
};

export default BuyingStore;
