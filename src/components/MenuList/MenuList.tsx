import { TMenuList } from "../../types";
import MenuItem from "../MenuItem/MenuItem";
import { IoMdClose } from "react-icons/io";

const menu = [
  {link: 'home', label: 'Home'},
  {link: 'about', label: 'About'},
  {link: 'skills', label: 'Skills'},
  {link: 'service', label: 'Service'},
  {link: 'portfolio', label: 'Portfolio'},
  {link: 'contacts', label: 'Contacts'},
]



const MenuList = ({open, setOpenMenu}:TMenuList) => {
  return (
    <div className={`nav__menu ${open ? 'show-menu' : ''}`} id="nav-menu">
      <ul className="nav__list grid">
        {menu.map((item, index) => {
          return (
            <MenuItem setOpenMenu={setOpenMenu} key={index} label={item.label} link={item.link} />
          )
        })}
      </ul>
      <IoMdClose onClick={() => setOpenMenu(!open)} className="nav__close" />
    </div>
  );
};

export default MenuList;
