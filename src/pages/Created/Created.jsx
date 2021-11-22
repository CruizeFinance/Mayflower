import { CreatedDetails, HistoryBox, InfoBox } from "../Sections";

const Created = () => {
  return (
    <>
      <CreatedDetails type="Protect" />
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
