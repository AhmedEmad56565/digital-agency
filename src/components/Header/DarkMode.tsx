import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkMode() {
  const [theme, setTheme] = useState<boolean | undefined>(undefined);

  function handleChangeTheme() {
    setTheme((prevState) => !prevState);
  }

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', 'true');
      document.documentElement.classList.add('dark');
    } else if (theme === false) {
      localStorage.setItem('theme', 'false');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme(localStorage.getItem('theme') === 'true');
    }
  }, [theme]);

  return (
    <span className='cursor-pointer' onClick={handleChangeTheme}>
      {theme ? (
        <FaSun
          size={20}
          className='hover:text-main transition-colors duration-200'
        />
      ) : (
        <FaMoon
          size={20}
          className='hover:text-main transition-colors duration-200'
        />
      )}
    </span>
  );
}
