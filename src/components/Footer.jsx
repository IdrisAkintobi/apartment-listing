import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/shareIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const samePath = (path) => {
    return location.pathname === path;
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={samePath("/") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                samePath("/")
                  ? "NavbarListItemNameActive"
                  : "NavbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={samePath("/offers") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                samePath("/offers")
                  ? "NavbarListItemNameActive"
                  : "NavbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={samePath("/profile") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                samePath("/profile")
                  ? "NavbarListItemNameActive"
                  : "NavbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
