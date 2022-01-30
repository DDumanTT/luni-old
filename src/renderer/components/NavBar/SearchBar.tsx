import { SearchIcon } from '@heroicons/react/outline';
import { useState, useRef, ChangeEvent } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { X } from 'react-feather';

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
    scale: 1.05,
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

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const searchInputEl = useRef(document.createElement('input'));

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

  return (
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
  );
}
