import { Link } from "react-scroll";

type NavlinkType = {
  label: string;
  link: string;
  setOpenMenu: (open:boolean) => void
};

const MenuItem = ({ label, link, setOpenMenu }: NavlinkType) => {
  return (
    <li className="nav__item">
      <Link
        to={link}
        spy={true}
        smooth={true}
        duration={500}
        className="nav__link"
        activeClass="active-link"
        onClick={() => setOpenMenu(false)}
      >
        <i className="uil uil-estate nav__icon"></i> {label}
      </Link>
    </li>
  );
};

export default MenuItem;
