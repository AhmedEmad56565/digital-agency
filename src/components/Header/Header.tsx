import Logo from '../../assets/logo.svg';
import { menuList } from '../../helpers/constants';

import DarkMode from './DarkMode';
import MenuIcon from './MenuIcon';

export default function Header() {
  return (
    <header className='header bg-white z-30 fixed top-0 left-0 w-full shadow-sm shadow-main'>
      <nav className='header__nav'>
        <div className='header__nav-left'>
          <img src={Logo} alt='digital agency logo' className='w-5' />
          <h1 className='header__nav-name'>Digital Agency</h1>
        </div>

        <div className='header__nav-links'>
          <ul className='flex-center gap-5 lg:gap-8'>
            {menuList.map((list) => (
              <li
                key={list.name}
                className='text-lg capitalize border-b border-b-transparent hover:text-main hover:border-b hover:border-b-main transition-colors duration-200'
              >
                <a href='#'>{list.name}</a>
              </li>
            ))}
          </ul>
          <button>Get in Touch</button>
          <DarkMode />
        </div>

        <div className='flex-center gap-x-3 md:hidden'>
          <DarkMode />
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
}
