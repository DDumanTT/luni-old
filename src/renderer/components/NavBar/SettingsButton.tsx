import { useRef, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { CogIcon } from '@heroicons/react/outline';
import useComponentVisible from 'renderer/hooks/useComponentVisible';

import ThemeSwitcher from './ThemeSwitcher';

const settingsVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    x: 16,
    transition: { delay: 0.05, staggerChildren: 0.05 },
  },
  exit: { opacity: 0 },
};

const itemsVariants = {
  initial: { opacity: 0, x: -4 },
  enter: { opacity: 1, x: 0 },
};

export default function SettingsButton() {
  const {
    ref: menuRef,
    isComponentVisible: settingsVisible,
    setIsComponentVisible: setSettingsVisible,
  } = useComponentVisible(false);

  const buttonRef = useRef(document.createElement('div'));

  const settingsMenu = (
    <motion.div
      key="settings"
      variants={settingsVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.1 }}
      className="absolute top-10 right-24"
    >
      <ul className="w-36 px-3 py-1 bg-zinc-800 rounded-xl drop-shadow-lg">
        <motion.li
          variants={itemsVariants}
          whileTap={{ scale: 0.98 }}
          className="my-1 px-2 py-1 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-600 active:to-indigo-900 active:from-indigo-900 cursor-pointer rounded-lg"
        >
          Add game
        </motion.li>
        <motion.li
          variants={itemsVariants}
          whileTap={{ scale: 0.98 }}
          className="my-1 px-2 py-1 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-600 active:to-indigo-900 active:from-indigo-900 cursor-pointer rounded-lg"
        >
          Scan games
        </motion.li>
        <motion.li variants={itemsVariants} className="my-1 px-2 py-1">
          <ThemeSwitcher />
        </motion.li>
        <motion.li
          variants={itemsVariants}
          whileTap={{ scale: 0.98 }}
          className="my-1 px-2 py-1 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-600 active:to-indigo-900 active:from-indigo-900 cursor-pointer rounded-lg"
        >
          Settings
        </motion.li>
      </ul>
    </motion.div>
  );

  return (
    <LayoutGroup>
      <div ref={menuRef}>
        <motion.div
          className="cursor-pointer rounded-full bg-zinc-700 bg-opacity-0 p-2"
          ref={buttonRef}
          onClick={() => {
            setSettingsVisible(!settingsVisible);
          }}
          whileHover={{
            backgroundColor: 'rgb(63 63 70 0.5)',
            transition: { duration: 0.2 },
          }}
        >
          <CogIcon className="h-8 w-8" />
        </motion.div>
        <AnimatePresence exitBeforeEnter>
          {settingsVisible && settingsMenu}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}
