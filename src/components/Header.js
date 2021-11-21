import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <div className="headerMenu">
        <Link className="headerLink" to="/comics">
          Comics
        </Link>
        <Link className="headerLink" to="/">
          Characters
        </Link>
        <Link className="headerLink" to="/favorites">
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default Header;
