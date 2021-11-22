import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import "../../pages.scss";

const ViewLinks = ({ map, page }) => {
  const { isAuthenticated } = useMoralis();

  return (
    <div className={`view-links`}>
      {Object.keys(map).map((view, index) => (
        <Link
          to={isAuthenticated ? map[view].route : "/"}
          key={`${view} - ${index}`}
          className={`${view === page?.toLowerCase() ? "active" : ""}`}
          style={{
            textDecoration: "none",
            cursor: isAuthenticated ? "pointer" : "not-allowed"
          }}
        >
          {map[view].label}
        </Link>
      ))}
    </div>
  );
};

export default ViewLinks;
