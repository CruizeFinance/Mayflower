import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../pages.scss";
import { setBlockData } from "../../../ContextAPI/ContextApi";

const ViewLinks = ({ map, page }) => {
  const { setMetamaskEvent } = useContext(setBlockData);

  return (
    <div className={`view-links`}>
      {Object.keys(map).map((view, index) => (
        <Link
          to={map[view].route}
          key={`${view} - ${index}`}
          className={`${view === page?.toLowerCase() ? "active" : ""}`}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            fontWeight: "bold",
            letterSpacing: 1
          }}
          onClick={() => setMetamaskEvent(undefined)}
        >
          {map[view].label}
        </Link>
      ))}
    </div>
  );
};

export default ViewLinks;
