import { SearchIcon } from '@heroicons/react/outline';

export default function SearchBar() {
  return (
    <div className="flex items-center">
      <SearchIcon className="h-8 w-8" />
      <div>
        <input type="text" />
      </div>
    </div>
  );
}
