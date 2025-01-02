'use client';

import { useEffect, useState } from 'react';
import './darkmode.styles.css';

export default function DarkModeBtn() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className="toggle">
      <input type="checkbox" checked={!isDarkMode} onChange={toggleTheme} />
      <label htmlFor="toggleSwitch"></label>
    </div>
  );
}
