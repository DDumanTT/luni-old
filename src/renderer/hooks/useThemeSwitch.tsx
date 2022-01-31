import { useState } from 'react';

export default function useThemeSwitch<T>(initialTheme: string) {
  const [theme, setTheme] = useState(initialTheme);

  const switchTheme = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.className = 'dark';
      window.api.store.set('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.className = 'light';
      window.api.store.set('theme', 'light');
    }
  };

  return switchTheme;
}
