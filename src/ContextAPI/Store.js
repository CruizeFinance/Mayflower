import React, { useReducer, useContext, createContext } from "react";

const StoreContext = createContext();
const initialState = {
  message: "",
  address: null,
  balance: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW-ADDRESS":
      return {
        ...state,
        address: action.newAddress,
        message: action.message,
      };
    case "SET-BALANCE":
      return {
        ...state,
        balance: action.newBalance,
      };
    default:
      throw new Error(`Unknown type of action ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
