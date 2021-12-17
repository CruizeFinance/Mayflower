import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../pages.scss";
import { useWeb3React } from "@web3-react/core";
import { setBlockData } from "../../../ContextAPI/ContextApi";

const ViewLinks = ({ map, page }) => {
  const { active } = useWeb3React();

  const { setMetamaskEvent } = useContext(setBlockData);

  const [hashMap, setHashMap] = useState(map);

  useEffect(() => {
    if (active) {
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
  }, [active]);

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
          onClick={() => setMetamaskEvent(undefined)}
        >
          {hashMap[view].label}
        </Link>
      ))}
    </div>
  );
};

export default ViewLinks;
