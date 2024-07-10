import MenuList from "../MenuList/MenuList";
import { GrAppsRounded } from "react-icons/gr";
import { FaMoon  } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { useEffect, useState } from "react";


const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [showShadow, setShowShadow] = useState<boolean>(false)
  const [modeDark, setModeDark] = useState<boolean>(false)

  const changeModeHandler = () => {
    setModeDark(!modeDark)
    const body = document.querySelector('body')

    body?.classList.contains('dark-theme') 
      ? body?.classList.remove('dark-theme')
      : body?.classList.add('dark-theme')
  }

  useEffect(() => {
    window.addEventListener('scroll', () => setShowShadow(window.scrollY > 50 ? true : false))
  }, [])

  return (
    <header className={`header ${showShadow ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <p className="nav__logo">
          Portfolio
        </p>

        <MenuList open={openMenu} setOpenMenu={setOpenMenu} />

        <div className="nav__btns">
          {modeDark && <MdOutlineWbSunny onClick={changeModeHandler} className="change-theme" />}
          {!modeDark && <FaMoon onClick={changeModeHandler} className="change-theme" />}

          <div className="nav__toggle" id="nav-toggle">
            <GrAppsRounded onClick={() => setOpenMenu(prev => !prev)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
