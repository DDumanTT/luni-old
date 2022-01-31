import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import useThemeSwitch from 'renderer/hooks/useThemeSwitch';

const switcherVariants = {
  dark: {
    backgroundColor: 'rgb(79 70 229)',
  },
  light: {
    backgroundColor: 'rgb(251 191 36)',
  },
};

export default function ThemeSwitcher() {
  const theme = document.documentElement.className;
  const switchTheme = useThemeSwitch<HTMLDivElement>(theme);

  return (
    <div className="inline-flex w-full justify-between items-center">
      <li className="">Theme</li>
      <motion.div
        className="flex items-center justify-center bg-amber-400 h-6 w-6 rounded-full"
        variants={switcherVariants}
        initial={theme.includes('dark') ? 'dark' : 'light'}
        animate={theme}
        whileTap={{ scale: 0.95 }}
        onClick={switchTheme}
      >
        {theme === 'light' ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </motion.div>
    </div>
  );
}
