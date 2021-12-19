import { CreatedDetails, InfoBox } from "../Sections";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Created = (props) => {
  const navigate = useNavigate();
  const { active } = useWeb3React();

  /* redirect back to home, if the wallet is not connected. */
  useEffect(() => {
    if (!active) navigate(`/`);
  }, [active]);

  return (
    <>
      <CreatedDetails />
      <InfoBox
        hideDialogOne
        dialogTwoLabel={
          "Your orders will only get executed if the funds are present in your wallet at the time of execution."
        }
      />
    </>
  );
};

export default Created;
