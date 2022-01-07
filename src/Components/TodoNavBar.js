import React, { useEffect } from 'react';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';
import { useGlobalContext } from '../context';

const TodoNavBar = () => {
  const { themeIcon, changeTheme, theme } = useGlobalContext();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <nav className='nav'>
      <h1>TODO</h1>
      {themeIcon ? (
        <img src={moon} alt='' className='theme' onClick={changeTheme} />
      ) : (
        <img src={sun} alt='' className='theme' onClick={changeTheme} />
      )}
    </nav>
  );
};

export default TodoNavBar;
