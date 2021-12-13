import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VIEW } from "../../utils/constants";
import "../pages.scss";
import {
  InfoBox,
  RedeemBox,
  HistoryBox,
  ViewLinks,
  TokenModal
} from "../Sections";

const Manage = () => {
  const navigate = useNavigate();
  const { active } = useWeb3React();

  /* redirect back to home, if the wallet is not connected. */
  useEffect(() => {
    if (!active) navigate(`/`);
  }, [active]);

  return !active ? null : (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"manage"} />
      <RedeemBox
        view={window.location?.search?.includes("protect") ? "Protect" : "Buy"}
      />
      <HistoryBox />
      <InfoBox
        hideDialogOne
        dialogTwoLabel={
          "Your orders will only get executed if the staked balance is more than the required amount at the time of execution."
        }
      />
    </>
  );
};

export default Manage;
