import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';

// View imports
import Main from './views/Main';
import NavBar from './components/NavBar';

declare global {
  interface Window {
    electron: {
      store: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get: (key: string) => any;
        set: (key: string, val: string) => void;
      };
    };
  }
}

const NavLayout = () => (
  <div
    id="MainContent"
    className="flex flex-col absolute left-0 right-0 bottom-0 overflow-hidden"
  >
    <NavBar />
    <Outlet />
  </div>
);

// Routing
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}
