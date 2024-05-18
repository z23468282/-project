import React from 'react';
import useLocalStorage from './useLocalStorage';
import './theme.css';

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        {theme === 'dark' ? <p>深色模式</p> : <p>淺色模式</p>}
        <button onClick={handleToggleTheme}>切換模式</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
