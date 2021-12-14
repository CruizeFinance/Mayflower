import { ConfirmDetails, HistoryBox, InfoBox } from "../Sections";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Confirm = (props) => {
  const navigate = useNavigate();
  const { active } = useWeb3React();

  /* redirect back to home, if the wallet is not connected. */
  useEffect(() => {
    if (!active) navigate(`/`);
  }, [active]);

  return (
    <>
      <ConfirmDetails
        type={window.location?.search?.includes("protect") ? "Protect" : "Buy"}
      />
      <HistoryBox />
      <InfoBox
        hideDialogOne
        dialogTwoLabel={
          "Your orders will only get executed if the funds are present in your wallet at the time of execution."
        }
      />
    </>
  );
};

export default Confirm;
