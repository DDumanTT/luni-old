import SearchBar from './SearchBar';
import SettingsButton from './SettingsButton';
import ContextMenu from '../ContextMenu';

export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-20 w-screen absolute z-10">
      <div className="m-6">
        <SearchBar />
      </div>
      <div className="m-6">
        <SettingsButton />
      </div>
    </div>
  );
}
