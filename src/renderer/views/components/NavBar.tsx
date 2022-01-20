import { Link } from 'react-router-dom';
import { UserCircleIcon, MenuIcon } from '@heroicons/react/solid';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between items-center h-16 bg-slate-850">
        <Link to="/">
          <div className="text-orange-400 font-bold text-4xl ml-4">LUNI</div>
        </Link>
        <div>
          <SearchBar />
        </div>
        <div className="flex">
          <div>
            <UserCircleIcon className="h-10 w-10" />
          </div>
          <div>
            <MenuIcon className="h-10 w-10" />
          </div>
        </div>
      </div>
    </>
  );
}
