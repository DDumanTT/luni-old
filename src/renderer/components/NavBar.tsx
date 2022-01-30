import { SearchIcon, CogIcon } from '@heroicons/react/outline';
import { X } from 'react-feather';
import { useState, useRef, ChangeEvent } from 'react';
import { motion, useAnimation } from 'framer-motion';

import NavBarButton from './NavBarButton';
import ContextMenu from './ContextMenu';

export default function NavBar() {
  // states
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false);

  // refs
  const searchInputEl = useRef(document.createElement('input'));
  const buttonRef = useRef(document.createElement('div'));

  const searchBarAnim = useAnimation();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchOpen = () => {
    if (showSearch) {
      setShowSearch(false);
      setShowSearchInput(false);
      searchBarAnim.start('collapsed').then(() => {
        // setSearchTerm('');
        searchBarAnim.start('rest');
      });
    } else {
      setShowSearch(true);
      setShowSearchInput(true);
      setSearchTerm('');
      searchBarAnim.start('expanded');
      setTimeout(() => {
        searchInputEl.current.focus();
      }, 50);
    }
  };

  const handleSearchHoverStart = () => {
    searchBarAnim.start('hover');
  };

  const handleSearchHoverEnd = () => {
    if (showSearch) {
      searchBarAnim.start('expanded');
    } else {
      searchBarAnim.start('rest');
    }
  };

  const settingsMenu = (
    <motion.ul className="absolute w-36 px-3 py-1 top-10 right-20 bg-zinc-800 rounded-xl drop-shadow-lg">
      <li className="my-1 px-2 py-1 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-600 active:to-indigo-900 active:from-indigo-900 cursor-pointer rounded-lg">
        Add game
      </li>
      <li className="my-1 px-2 py-1 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-600 active:to-indigo-900 active:from-indigo-900 cursor-pointer rounded-lg">
        Scan games
      </li>
      <li className="my-1 px-2 py-1 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-600 active:to-indigo-900 active:from-indigo-900 cursor-pointer rounded-lg">
        Settings
      </li>
    </motion.ul>
  );

  const searchBarVariants = {
    expanded: {
      width: 384,
      backgroundColor: 'rgb(63 63 70 0.5)',
    },
    collapsed: {
      width: 48,
      transition: { bounce: 0.9, delayChildren: 0.1, duration: 0.2 },
    },
    rest: { backgroundColor: 'rgb(63 63 70 0)', transition: { duration: 0.2 } },
    hover: {
      backgroundColor: 'rgb(63 63 70 0.5)',
      transition: { duration: 0.2 },
    },
  };

  const searchBarItemsVariants = {
    expanded: { display: 'inline', opacity: 1, transition: { duration: 0.1 } },
    collapsed: {
      opacity: 0,
      transition: { duration: 0.1 },
      transitionEnd: { display: 'none' },
    },
  };

  return (
    <div className="flex justify-between items-center h-20 w-screen absolute text-zinc-100 z-10">
      {/* Search Bar */}
      <div className="m-6">
        <motion.div
          variants={searchBarVariants}
          animate={searchBarAnim}
          onHoverStart={handleSearchHoverStart}
          onHoverEnd={handleSearchHoverEnd}
          className={`rounded-full bg-zinc-700 w-12 ${
            showSearch ? 'bg-opacity-50' : 'cursor-pointer bg-opacity-0'
          }`}
          onClick={showSearch ? () => {} : handleSearchOpen}
        >
          <div className="flex items-center p-2">
            <div>
              <SearchIcon className="h-8 w-8" />
            </div>
            <motion.input
              variants={searchBarItemsVariants}
              type="text"
              className="w-full ml-2 bg-transparent outline-none text-xl"
              placeholder="Search..."
              onChange={handleSearchChange}
              ref={searchInputEl}
              value={searchTerm}
            />
            <motion.div
              variants={searchBarItemsVariants}
              className={showSearch ? 'cursor-pointer' : 'hidden'}
              onClick={showSearch ? handleSearchOpen : () => {}}
            >
              <X className="h-8 w-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Settings Button */}
      <div className="m-6">
        <NavBarButton
          ref={buttonRef}
          onClick={() => {
            setSettingsMenuVisible(!settingsMenuVisible);
          }}
        >
          <CogIcon className="h-8 w-8" />
        </NavBarButton>
        {settingsMenuVisible ? settingsMenu : <></>}
      </div>
    </div>
  );
}
