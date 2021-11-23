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
  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"manage"} />
      <RedeemBox />
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
