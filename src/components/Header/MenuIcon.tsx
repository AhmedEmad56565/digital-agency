import { useState } from 'react';
import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';
import MenuSidebar from './MenuSidebar';

export default function MenuIcon() {
  const [menu, setMenu] = useState(false);

  function handleShowMenu() {
    setMenu(true);
  }

  function handleHideMenu() {
    setMenu(false);
  }

  return (
    <>
      <span className='cursor-pointer' onClick={handleShowMenu}>
        {menu ? (
          <BiMenuAltLeft
            size={30}
            className='hover:text-main transition-colors duration-200'
          />
        ) : (
          <BiMenuAltRight
            size={30}
            className='hover:text-main transition-colors duration-200'
          />
        )}
      </span>

      <MenuSidebar showSidebar={menu} onClose={handleHideMenu} />
    </>
  );
}
