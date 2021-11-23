import { CreatedDetails, HistoryBox, InfoBox } from "../Sections";

const Created = (props) => {
  return (
    <>
      <CreatedDetails
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

export default Created;
