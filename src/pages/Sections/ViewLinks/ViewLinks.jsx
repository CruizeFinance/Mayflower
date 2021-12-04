import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import "../../pages.scss";

const ViewLinks = ({ map, page }) => {
  // const { isAuthenticated } = useMoralis();
  let isAuthenticated = true;
  const [hashMap, setHashMap] = useState(map);

  useEffect(() => {
    if (isAuthenticated) {
      setHashMap({
        ...map,
        ...{
          manage: {
            label: "Manage",
            route: "/manage"
          }
        }
      });
    }
  }, [isAuthenticated]);

  return (
    <div className={`view-links`}>
      {Object.keys(hashMap).map((view, index) => (
        <Link
          to={hashMap[view].route}
          key={`${view} - ${index}`}
          className={`${view === page?.toLowerCase() ? "active" : ""}`}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            fontWeight: "bold",
            letterSpacing: 1
          }}
        >
          {hashMap[view].label}
        </Link>
      ))}
    </div>
  );
};

export default ViewLinks;
