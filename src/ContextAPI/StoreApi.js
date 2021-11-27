// TO be deleted
import { useStore } from "./Store";

const useStoreApi = () => {
  const { state, dispatch } = useStore();

  return {
    address: state.address,
    balance: state.balance,
    message: state.message,
    setBalance: (newBalance) => {
      dispatch({
        type: "SET-BALANCE",
        newBalance,
      });
    },
    setAddress: (newAddress) => {
      dispatch({
        type: "NEW-ADDRESS",
        newAddress,
        message: "New account added successfully!",
      });
    },
  };
};

export default useStoreApi;
