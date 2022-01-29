import { SearchIcon, CogIcon } from '@heroicons/react/outline';
import { X } from 'react-feather';
import { useEffect, useState, useRef, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import NavBarButton from './NavBarButton';
import ContextMenu from './ContextMenu';

export default function NavBar() {
  // states
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false);

  const searchInputEl = useRef(document.createElement('input'));
  const buttonRef = useRef(document.createElement('div'));

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchOpen = () => {
    setShowSearch(!showSearch);
  };

  // Input box invisible while animating
  useEffect(() => {
    let delay = showSearchInput ? 100 : 0; // delay 100ms when setting to visible, else 0ms

    var timeout = setTimeout(() => {
      setShowSearchInput(!showSearchInput);
      searchInputEl.current.focus();
    }, delay);

    setSearchTerm('');

    return () => {
      clearTimeout(timeout);
    };
  }, [showSearch]);

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

  const searchBarCollapsed =
    'cursor-pointer bg-opacity-0 bg-zinc-700 hover:bg-opacity-50 w-12';
  const searchBarExtended = 'bg-zinc-700 bg-opacity-50 w-96';

  return (
    <div className="flex justify-between items-center h-20 w-screen absolute text-zinc-100 z-10">
      {/* Search Bar */}
      <div className="m-6">
        <div
          className={`rounded-full transition-all ease-in duration-100 ${
            showSearch ? searchBarExtended : searchBarCollapsed
          }`}
          onClick={showSearch ? undefined : handleSearchOpen}
        >
          <div className="flex items-center p-2">
            <SearchIcon className="h-8 w-8" />
            <input
              type="text"
              className="flex-grow ml-2 w-72 bg-transparent outline-none text-xl"
              placeholder="Search..."
              hidden={showSearchInput}
              onChange={handleSearchChange}
              ref={searchInputEl}
              value={searchTerm}
            />
            <div
              className={showSearch ? 'cursor-pointer' : ''}
              hidden={showSearchInput}
              onClick={showSearch ? handleSearchOpen : undefined}
            >
              <X className="h-8 w-8" />
            </div>
          </div>
        </div>
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
